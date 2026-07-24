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

// Reuse a single client across all requests instead of creating one per call.
const supabase = createClient(
  Deno.env.get("SUPABASE_URL")!,
  Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!,
);

// Max texts per PostgREST .in() query — long URLs cause timeouts.
const CACHE_CHUNK = 40;
// Max texts per OpenRouter call — balance speed vs. output reliability.
const LLM_BATCH = 25;

async function sha256Hex(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hashBuffer))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
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
      return new Response(JSON.stringify({ translations: texts }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const uniqueTexts = Array.from(new Set(texts.filter((t) => typeof t === "string" && t.length > 0)));

    const cache = new Map<string, string>();

    // 1. Look up cached translations — chunk to avoid URL length limits.
    if (uniqueTexts.length > 0) {
      const cacheChunks: Promise<{ data: CacheRow[] | null; error: any }>[] = [];
      for (let i = 0; i < uniqueTexts.length; i += CACHE_CHUNK) {
        const chunk = uniqueTexts.slice(i, i + CACHE_CHUNK);
        cacheChunks.push(
          supabase
            .from("translations")
            .select("source_text, target_text")
            .eq("source_lang", source_lang)
            .eq("target_lang", target_lang)
            .in("source_text", chunk),
        );
      }
      const results = await Promise.all(cacheChunks);
      for (const { data, error } of results) {
        if (error) throw error;
        for (const row of data || []) {
          cache.set(row.source_text, row.target_text);
        }
      }
    }

    // 2. Figure out which texts still need translating.
    const toTranslate = uniqueTexts.filter((t) => !cache.has(t));

    // 3. Translate missing texts via OpenRouter — batches run in PARALLEL.
    if (toTranslate.length > 0) {
      const apiKey = Deno.env.get("OPENROUTER_API_KEY");
      if (!apiKey) {
        for (const t of toTranslate) cache.set(t, t);
      } else {
        const model = "openai/gpt-4o-mini";
        const targetName = LANG_NAMES[target_lang];

        const systemPrompt =
          `You are a professional translator for the ICF Switzerland website (International Coaching Federation). ` +
          `Translate the user's text from ${LANG_NAMES[source_lang]} into ${targetName}. ` +
          `Preserve meaning, tone and any HTML entities or markup exactly. ` +
          `Do NOT translate brand names ("ICF", "ICF Switzerland"), credential abbreviations ` +
          `("ACC", "PCC", "MCC"), or Swiss place names ("Zürich", "Genève", "Lausanne", "Lugano", ` +
          `"Basel", "Bern", "Ticino", "Romandie"). Keep them as-is. ` +
          `Return ONLY the ${targetName} translation, with no quotes, no commentary and no preamble.`;

        // Build all batch promises, then fire them in parallel.
        const batchPromises: Promise<void>[] = [];
        for (let i = 0; i < toTranslate.length; i += LLM_BATCH) {
          const batch = toTranslate.slice(i, i + LLM_BATCH);
          const numbered = batch.map((t, idx) => `${idx + 1}. ${t}`).join("\n");
          const userPrompt =
            `Translate each of the following ${batch.length} ${LANG_NAMES[source_lang]} ` +
            `strings into ${targetName}. Return them as a numbered list in the SAME order, ` +
            `one per line, with no extra text:\n\n${numbered}`;

          batchPromises.push(
            (async () => {
              try {
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
                  for (const t of batch) cache.set(t, t);
                  return;
                }

                const apiJson = await apiResponse.json();
                const content: string = apiJson?.choices?.[0]?.message?.content ?? "";
                const lines = content.split("\n").map((l) => l.trim()).filter(Boolean);

                for (let j = 0; j < batch.length; j++) {
                  const expectedPrefix = `${j + 1}.`;
                  const line = lines.find((l) => l.startsWith(expectedPrefix + " ") || l.startsWith(expectedPrefix + ".")) || "";
                  const translated = line ? line.replace(new RegExp(`^${j + 1}\\.[\\s]*`), "").trim() : batch[j];
                  cache.set(batch[j], translated || batch[j]);
                }
              } catch {
                for (const t of batch) cache.set(t, t);
              }
            })(),
          );
        }

        await Promise.all(batchPromises);

        // 4. Persist the freshly translated texts to the memory bank.
        const rows = await Promise.all(toTranslate
          .filter((t) => cache.get(t) && cache.get(t) !== t)
          .map(async (t) => ({
            source_lang,
            target_lang,
            source_text: t,
            target_text: cache.get(t)!,
            text_hash: await sha256Hex(`${source_lang}|${target_lang}|${t}`),
          })));

        if (rows.length > 0) {
          const { error: insertErr } = await supabase
            .from("translations")
            .upsert(rows, { onConflict: "source_lang,target_lang,source_text", ignoreDuplicates: true });
          if (insertErr) console.error("translation insert error:", insertErr.message);
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
