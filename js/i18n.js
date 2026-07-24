import { createClient } from '@supabase/supabase-js';

export const SOURCE_LANG = 'en';
export const TARGET_LANGS = ['de', 'fr', 'it'];

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

const supabase = SUPABASE_URL && SUPABASE_ANON_KEY
  ? createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
  : null;

const STORAGE_KEY = 'icf_lang';
const SUPPORTED = [SOURCE_LANG, ...TARGET_LANGS];

let currentLang = SOURCE_LANG;
let translationCache = new Map();
let pendingFetch = null;

function detectInitialLang() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored && SUPPORTED.includes(stored)) return stored;
  const browser = (navigator.language || '').slice(0, 2).toLowerCase();
  if (SUPPORTED.includes(browser)) return browser;
  return SOURCE_LANG;
}

export function getCurrentLang() {
  return currentLang;
}

export function setCurrentLang(lang) {
  if (!SUPPORTED.includes(lang)) return;
  currentLang = lang;
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang;
}

export async function loadTranslations(lang) {
  if (lang === SOURCE_LANG) return new Map();
  if (translationCache.has(lang)) return translationCache.get(lang);
  if (pendingFetch) {
    await pendingFetch;
    return translationCache.get(lang) || new Map();
  }

  if (!supabase) {
    console.warn('i18n: Supabase not configured — translations unavailable.');
    return new Map();
  }

  pendingFetch = supabase
    .from('translations')
    .select('source_text, target_text')
    .eq('source_lang', SOURCE_LANG)
    .eq('target_lang', lang)
    .then(({ data, error }) => {
      if (error) {
        console.warn('i18n: translation fetch failed:', error.message);
        return new Map();
      }
      const map = new Map();
      for (const row of data || []) {
        map.set(row.source_text, row.target_text);
      }
      translationCache.set(lang, map);
      return map;
    })
    .finally(() => { pendingFetch = null; });

  return pendingFetch;
}

export function translateBatch(texts, lang = currentLang) {
  const cache = translationCache.get(lang);
  if (!cache) return texts;
  return texts.map((t) => cache.get(t) || t);
}

export async function applyTranslations(root = document) {
  const lang = getCurrentLang();
  await loadTranslations(lang);
  const cache = translationCache.get(lang);

  root.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    if (key && cache?.has(key)) {
      el.textContent = cache.get(key);
    }
  });

  root.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    const spec = el.getAttribute('data-i18n-attr');
    if (!spec) return;
    for (const pair of spec.split(',')) {
      const [attr, key] = pair.split(':').map((s) => s.trim());
      if (attr && key && cache?.has(key)) {
        el.setAttribute(attr, cache.get(key));
      }
    }
  });
}

export async function initI18n() {
  currentLang = detectInitialLang();
  document.documentElement.lang = currentLang;
  await loadTranslations(currentLang);
  await applyTranslations();
  document.dispatchEvent(new CustomEvent('i18n:ready', { detail: { lang: currentLang } }));
}

try {
  if (typeof document !== 'undefined') {
    document.addEventListener('DOMContentLoaded', initI18n, { once: true });
  }
} catch {
  // SSR / non-browser context
}
