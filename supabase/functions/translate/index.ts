import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.110.8";

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

interface TranslateRequest {
  source_lang: string;
  target_lang: string;
  texts: string[];
}

interface CacheRow {
  source_text: string;
  target_text: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ error: "Method not allowed" }), {
        status: 405,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const body = await req.json() as TranslateRequest;
    const { source_lang, target_lang, texts } = body;

    if (!source_lang || !target_lang || !Array.isArray(texts)) {
      return new Response(JSON.stringify({ error: "Missing source_lang, target_lang or texts" }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (!LANG_NAMES[source_lang] || !LANG_NAMES[target_lang]) {
      return new Response(JSON.stringify({ error: `Unsupported language: ${source_lang} or ${target_lang}` }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    if (source_lang === target_lang) {
      // No translation needed — return the source text as-is.
      return new Response(JSON.stringify({ translations: texts }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // De-duplicate input while preserving order and indexes for the response.
    const uniqueTexts = Array.from(new Set(texts.filter((t) => typeof t === "string" && t.length > 0)));

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
    );

    // 1. Look up cached translations for the texts we already have.
    const cache = new Map<string, string>();
    if (uniqueTexts.length > 0) {
      const { data: cached, error: cacheErr } = await supabase
        .from("translations")
        .select("source_text, target_text")
        .eq("source_lang", source_lang)
        .eq("target_lang", target_lang)
        .in("source_text", uniqueTexts);

      if (cacheErr) throw cacheErr;
      for (const row of (cached as CacheRow[]) || []) {
        cache.set(row.source_text, row.target_text);
      }
    }

    // 2. Figure out which texts still need translating.
    const toTranslate = uniqueTexts.filter((t) => !cache.has(t));

    // 3. Translate the missing ones via OpenRouter.
    if (toTranslate.length > 0) {
      const apiKey = Deno.env.get("OPENROUTER_API_KEY");
      if (!apiKey) {
        // No key configured — fall back to source text so the site never breaks.
        for (const t of toTranslate) cache.set(t, t);
      } else {
        const model = Deno.env.get("OPENROUTER_MODEL") || "openai/gpt-4o-mini";
        const targetName = LANG_NAMES[target_lang];

        const systemPrompt =
          `You are a professional translator for the ICF Switzerland website (International Coaching Federation). ` +
          `Translate the user's text from ${LANG_NAMES[source_lang]} into ${targetName}. ` +
          `Preserve meaning, tone and any HTML entities or markup exactly. ` +
          `Do NOT translate brand names ("ICF", "ICF Switzerland"), credential abbreviations ` +
          `("ACC", "PCC", "MCC"), or Swiss place names ("Zürich", "Genève", "Lausanne", "Lugano", ` +
          `"Basel", "Bern", "Ticino", "Romandie"). Keep them as-is. ` +
          `Return ONLY the ${targetName} translation, with no quotes, no commentary and no preamble.`;

        // Translate in small batches to keep the LLM focused and reliable.
        const BATCH = 12;
        for (let i = 0; i < toTranslate.length; i += BATCH) {
          const batch = toTranslate.slice(i, i + BATCH);
          // Numbered list so the model returns one translation per input line,
          // in the same order — easy to split reliably.
          const numbered = batch.map((t, idx) => `${idx + 1}. ${t}`).join("\n");
          const userPrompt =
            `Translate each of the following ${batch.length} ${LANG_NAMES[source_lang]} ` +
            `strings into ${targetName}. Return them as a numbered list in the SAME order, ` +
            `one per line, with no extra text:\n\n${numbered}`;

          const apiResponse = await fetch("https://openrouter.ai/api/v1/chat/completions", {
            method: "POST",
            headers: {
              "Authorization": `Bearer ${apiKey}`,
              "Content-Type": "application/json",
              "HTTP-Referer": "https://icf-switzerland.ch",
              "X-Title": "ICF Switzerland Translation",
            },
            body: JSON.stringify({
              model,
              messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userPrompt },
              ],
              temperature: 0.2,
            }),
          });

          if (!apiResponse.ok) {
            // On API failure, fall back to source text for this batch only.
            for (const t of batch) cache.set(t, t);
            continue;
          }

          const apiJson = await apiResponse.json();
          const content: string = apiJson?.choices?.[0]?.message?.content ?? "";

          // Parse the numbered list back out, preserving order.
          const lines = content.split("\n").map((l) => l.trim()).filter(Boolean);
          for (let j = 0; j < batch.length; j++) {
            const expectedPrefix = `${j + 1}.`;
            // Find the line that starts with "N." for this index.
            const line = lines.find((l) => l.startsWith(expectedPrefix + " ") || l.startsWith(expectedPrefix + ".")) || "";
            const translated = line ? line.replace(new RegExp(`^${j + 1}\\.[\\s]*`), "").trim() : batch[j];
            // If parsing failed for a line, fall back to source.
            cache.set(batch[j], translated || batch[j]);
          }
        }

        // 4. Persist the freshly translated texts to the memory bank.
        const rows = toTranslate
          .filter((t) => cache.get(t) && cache.get(t) !== t)
          .map((t) => ({
            source_lang,
            target_lang,
            source_text: t,
            target_text: cache.get(t)!,
          }));

        if (rows.length > 0) {
          // upsert handles the rare race where another instance cached the same
          // text in the same moment.
          const { error: insertErr } = await supabase
            .from("translations")
            .upsert(rows, { onConflict: "source_lang,target_lang,source_text", ignoreDuplicates: true });
          if (insertErr) {
            // Insert failure is non-fatal — we already have the translations in
            // memory for this response; next request will just retranslate.
            console.error("translation insert error:", insertErr.message);
          }
        }
      }
    }

    // 5. Build the response array in the SAME order as the input `texts`.
    const translations = texts.map((t) => (typeof t === "string" && t.length > 0 ? (cache.get(t) ?? t) : t));

    return new Response(JSON.stringify({ translations }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message || "Translation failed" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
