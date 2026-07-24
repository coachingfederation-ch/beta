import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');

function loadEnv() {
  const env = { ...process.env };
  try {
    const raw = readFileSync(resolve(root, '.env'), 'utf8');
    for (const line of raw.split('\n')) {
      const m = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);
      if (m && env[m[1]] === undefined) env[m[1]] = m[2].replace(/^["']|["']$/g, '');
    }
  } catch {
    // no .env file — rely on process env
  }
  return env;
}

const CHUNK = 40;

async function main() {
  const env = loadEnv();
  const url = env.VITE_SUPABASE_URL;
  const anonKey = env.VITE_SUPABASE_ANON_KEY;
  if (!url || !anonKey) {
    console.warn('pretranslate: Supabase credentials not found — skipping.');
    return;
  }

  const { SITE_STRINGS, TARGET_LANGS, SOURCE_LANG } = await import(
    pathToFileURL(resolve(root, 'js/site-strings.js'))
  );

  const endpoint = `${url}/functions/v1/translate`;
  const headers = {
    Authorization: `Bearer ${anonKey}`,
    'Content-Type': 'application/json',
  };

  let ok = 0;
  let failed = 0;
  for (const lang of TARGET_LANGS) {
    for (let i = 0; i < SITE_STRINGS.length; i += CHUNK) {
      const texts = SITE_STRINGS.slice(i, i + CHUNK);
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers,
          body: JSON.stringify({ source_lang: SOURCE_LANG, target_lang: lang, texts }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (!Array.isArray(data.translations)) throw new Error('bad response shape');
        ok += texts.length;
      } catch (err) {
        failed += texts.length;
        console.warn(`pretranslate: ${lang} batch at ${i} failed (${err.message})`);
      }
    }
    console.log(`pretranslate: ${lang.toUpperCase()} done`);
  }

  if (failed > 0) {
    console.warn(`pretranslate: ${ok} strings ensured, ${failed} failed — the site's live fallback will cover gaps.`);
  } else {
    console.log(`pretranslate: all ${ok} string translations ensured in the database.`);
  }
}

main().catch((err) => {
  console.warn('pretranslate: skipped due to error:', err.message);
});
