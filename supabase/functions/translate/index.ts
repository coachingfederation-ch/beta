import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const LANG_NAMES: Record<string, string> = {
  en: "English",
  de: "German",
  fr: "French",
  it: "Italian",
};

async function sha256(text: string): Promise<string> {
  const data = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

async function translateBatch(
  texts: string[],
  sourceLang: string,
  targetLang: string
): Promise<string[]> {
  const apiKey = Deno.env.get("OPENROUTER_API_KEY");
  if (!apiKey) throw new Error("OPENROUTER_API_KEY is not configured");

  const sourceName = LANG_NAMES[sourceLang] || sourceLang;
  const targetName = LANG_NAMES[targetLang] || targetLang;

  const system = [
    `You are a professional translator for ICF Switzerland (International Coaching Federation).`,
    `Translate each item from ${sourceName} to ${targetName}.`,
    `Rules:`,
    `- Keep brand names and credentials untranslated: ICF, ICF Switzerland, ACC, PCC, MCC, ICF Insights.`,
    `- Keep Swiss place names in their local form (Zurich/Zürich, Geneva/Genève, Lausanne, Basel, Bern).`,
    `- Preserve any HTML tags, attributes, and entities exactly; translate only the human-readable text between tags.`,
    `- Preserve placeholders, numbers, punctuation style, and capitalization intent.`,
    `- Return ONLY a JSON array of translated strings, same length and order as the input. No commentary.`,
  ].join("\n");

  const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "openai/gpt-4o-mini",
      temperature: 0.2,
      messages: [
        { role: "system", content: system },
        { role: "user", content: JSON.stringify(texts) },
      ],
    }),
  });

  if (!res.ok) {
    const detail = await res.text();
    throw new Error(`OpenRouter request failed (${res.status}): ${detail.slice(0, 300)}`);
  }

  const payload = await res.json();
  let content: string = payload?.choices?.[0]?.message?.content ?? "";
  content = content.trim();
  if (content.startsWith("```")) {
    content = content.replace(/^```(?:json)?\s*/i, "").replace(/\s*```$/, "");
  }

  const parsed = JSON.parse(content);
  if (!Array.isArray(parsed) || parsed.length !== texts.length) {
    throw new Error("model returned unexpected shape");
  }
  return parsed.map((item) => String(item));
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { source_lang, target_lang, texts } = await req.json();

    if (!source_lang || !target_lang || !Array.isArray(texts)) {
      throw new Error("source_lang, target_lang and texts[] are required");
    }
    if (texts.some((t: unknown) => typeof t !== "string")) {
      throw new Error("texts must be an array of strings");
    }
    if (source_lang === target_lang) {
      return new Response(JSON.stringify({ translations: texts }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const results: (string | null)[] = texts.map(() => null);

    const { data: cached, error: cacheError } = await supabase
      .from("translations")
      .select("source_text, target_text")
      .eq("source_lang", source_lang)
      .eq("target_lang", target_lang)
      .in("source_text", texts);
    if (cacheError) throw cacheError;

    const cacheMap = new Map<string, string>();
    for (const row of cached || []) cacheMap.set(row.source_text, row.target_text);

    const missingIndexes: number[] = [];
    texts.forEach((text: string, i: number) => {
      const hit = cacheMap.get(text);
      if (hit !== undefined) results[i] = hit;
      else missingIndexes.push(i);
    });

    if (missingIndexes.length > 0) {
      const missingTexts = missingIndexes.map((i) => texts[i]);
      const translated = await translateBatch(missingTexts, source_lang, target_lang);

      const rows = await Promise.all(
        missingTexts.map(async (text, j) => ({
          source_lang,
          target_lang,
          source_text: text,
          target_text: translated[j],
          text_hash: await sha256(text),
        }))
      );

      const { error: upsertError } = await supabase
        .from("translations")
        .upsert(rows, { onConflict: "source_lang,target_lang,source_text" });
      if (upsertError) console.error("translate: cache write failed", upsertError.message);

      missingIndexes.forEach((originalIndex, j) => {
        results[originalIndex] = translated[j];
      });
    }

    return new Response(JSON.stringify({ translations: results }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: String((err as Error)?.message || err) }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
