import { supabase } from './supabase-client.js';

export const LANGS = ['en', 'de', 'fr', 'it'];
export const LANG_LABELS = { en: 'EN', de: 'DE', fr: 'FR', it: 'IT' };
const LANG_NATIVE = { en: 'English', de: 'Deutsch', fr: 'Français', it: 'Italiano' };
const SOURCE_LANG = 'en';
const STORAGE_KEY = 'icf-lang';

const translateEndpoint = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/translate`;
const translateHeaders = {
  Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
  'Content-Type': 'application/json',
};

function getCurrentLang() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && LANGS.includes(saved)) return saved;
  return SOURCE_LANG;
}

function setCurrentLang(lang) {
  localStorage.setItem(STORAGE_KEY, lang);
}

async function translateStrings(texts, sourceLang, targetLang) {
  if (!texts || texts.length === 0) return [];
  if (sourceLang === targetLang) return [...texts];

  try {
    const res = await fetch(translateEndpoint, {
      method: 'POST',
      headers: translateHeaders,
      body: JSON.stringify({ source_lang: sourceLang, target_lang: targetLang, texts }),
    });
    if (!res.ok) throw new Error(`translate failed (${res.status})`);
    const data = await res.json();
    if (!Array.isArray(data.translations) || data.translations.length !== texts.length) {
      throw new Error('translate response shape mismatch');
    }
    return data.translations;
  } catch (err) {
    console.warn('i18n: translation fell back to source text', err);
    return [...texts];
  }
}

// ── Shared batch translation: DB lookup first, live edge-function
// fallback for anything missing (which also caches it in the DB),
// plus an in-memory cache per language pair for the session. ──

const memoryCache = new Map();

function cacheFor(sourceLang, targetLang) {
  const key = `${sourceLang}->${targetLang}`;
  if (!memoryCache.has(key)) memoryCache.set(key, new Map());
  return memoryCache.get(key);
}

const DB_CHUNK = 40;

async function translateBatch(texts, targetLang, sourceLang = SOURCE_LANG) {
  const result = new Map();
  const unique = Array.from(new Set((texts || []).filter((t) => typeof t === 'string' && t.length > 0)));
  if (sourceLang === targetLang) {
    unique.forEach((t) => result.set(t, t));
    return result;
  }

  const cache = cacheFor(sourceLang, targetLang);
  const uncached = [];
  for (const t of unique) {
    if (cache.has(t)) result.set(t, cache.get(t));
    else uncached.push(t);
  }
  if (uncached.length === 0) return result;

  const stillMissing = [];
  for (let i = 0; i < uncached.length; i += DB_CHUNK) {
    const chunk = uncached.slice(i, i + DB_CHUNK);
    const { data, error } = await supabase
      .from('translations')
      .select('source_text, target_text')
      .eq('source_lang', sourceLang)
      .eq('target_lang', targetLang)
      .in('source_text', chunk);
    if (error) {
      console.warn('i18n: translation lookup failed', error);
      stillMissing.push(...chunk);
      continue;
    }
    const found = new Map((data || []).map((r) => [r.source_text, r.target_text]));
    for (const t of chunk) {
      if (found.has(t)) {
        cache.set(t, found.get(t));
        result.set(t, found.get(t));
      } else {
        stillMissing.push(t);
      }
    }
  }

  if (stillMissing.length > 0) {
    const translated = await translateStrings(stillMissing, sourceLang, targetLang);
    stillMissing.forEach((t, i) => {
      const tr = translated[i] || t;
      cache.set(t, tr);
      result.set(t, tr);
    });
  }

  return result;
}

// ── Static UI text ────────────────────────────────────────

function collectTranslatable(root) {
  const scope = root || document;
  const nodes = scope.querySelectorAll('[data-i18n], [data-i18n-attr]');
  const items = [];
  const seen = new Set();
  nodes.forEach((el) => {
    if (el.hasAttribute('data-i18n')) {
      const original = el.getAttribute('data-i18n-original') || el.textContent.trim();
      if (!el.hasAttribute('data-i18n-original')) el.setAttribute('data-i18n-original', original);
      if (original && !seen.has(original)) {
        items.push({ el, kind: 'text', original });
        seen.add(original);
      } else if (original) {
        items.push({ el, kind: 'text-ref', original });
      }
    }
    if (el.hasAttribute('data-i18n-attr')) {
      const attrs = el.getAttribute('data-i18n-attr').split(',').map((s) => s.trim()).filter(Boolean);
      attrs.forEach((attr) => {
        const original = el.getAttribute(`data-i18n-${attr}-original`) || el.getAttribute(attr) || '';
        if (!el.hasAttribute(`data-i18n-${attr}-original`)) {
          el.setAttribute(`data-i18n-${attr}-original`, original);
        }
        if (original && !seen.has(original)) {
          items.push({ el, kind: 'attr', attr, original });
          seen.add(original);
        } else if (original) {
          items.push({ el, kind: 'attr-ref', attr, original });
        }
      });
    }
  });
  return items;
}

async function applyTranslations(targetLang, root) {
  if (targetLang === SOURCE_LANG) {
    restoreOriginals(root);
    document.documentElement.setAttribute('lang', SOURCE_LANG);
    return;
  }

  const items = collectTranslatable(root);

  const titleEl = document.querySelector('title');
  if (titleEl && !titleEl.hasAttribute('data-i18n-original')) {
    titleEl.setAttribute('data-i18n-original', titleEl.textContent.trim());
  }
  const descEl = document.querySelector('meta[name="description"]');
  if (descEl && !descEl.hasAttribute('data-i18n-original')) {
    descEl.setAttribute('data-i18n-original', descEl.getAttribute('content') || '');
  }

  const headTexts = [];
  if (titleEl) headTexts.push(titleEl.getAttribute('data-i18n-original'));
  if (descEl) headTexts.push(descEl.getAttribute('data-i18n-original'));

  const uniqueTexts = [
    ...headTexts.filter(Boolean),
    ...items.filter((i) => i.kind === 'text' || i.kind === 'attr').map((i) => i.original),
  ];

  if (uniqueTexts.length === 0) {
    document.documentElement.setAttribute('lang', targetLang);
    return;
  }

  const map = await translateBatch(uniqueTexts, targetLang);

  applyMapToHead(titleEl, descEl, headTexts, map);
  applyMapToItems(items, map);
  document.documentElement.setAttribute('lang', targetLang);
}

function applyMapToHead(titleEl, descEl, headTexts, map) {
  let headIdx = 0;
  if (titleEl && headTexts[0]) {
    titleEl.textContent = map.get(headTexts[0]) || headTexts[0];
    headIdx = 1;
  }
  if (descEl && headTexts[headIdx]) {
    descEl.setAttribute('content', map.get(headTexts[headIdx]) || headTexts[headIdx]);
  }
}

function applyMapToItems(items, map) {
  items.forEach((item) => {
    const translatedText = map.get(item.original) || item.original;
    if (item.kind === 'text' || item.kind === 'text-ref') {
      item.el.textContent = translatedText;
    } else if (item.kind === 'attr' || item.kind === 'attr-ref') {
      item.el.setAttribute(item.attr, translatedText);
    }
  });
}

function restoreOriginals(root) {
  const scope = root || document;
  scope.querySelectorAll('[data-i18n]').forEach((el) => {
    const original = el.getAttribute('data-i18n-original');
    if (original != null) el.textContent = original;
  });
  scope.querySelectorAll('[data-i18n-attr]').forEach((el) => {
    const attrs = el.getAttribute('data-i18n-attr').split(',').map((s) => s.trim()).filter(Boolean);
    attrs.forEach((attr) => {
      const original = el.getAttribute(`data-i18n-${attr}-original`);
      if (original != null) el.setAttribute(attr, original);
    });
  });
  const titleEl = document.querySelector('title');
  if (titleEl && titleEl.hasAttribute('data-i18n-original')) {
    titleEl.textContent = titleEl.getAttribute('data-i18n-original');
  }
  const descEl = document.querySelector('meta[name="description"]');
  if (descEl && descEl.hasAttribute('data-i18n-original')) {
    descEl.setAttribute('content', descEl.getAttribute('data-i18n-original'));
  }
}

function updateSwitcherActive(lang) {
  document.querySelectorAll('[data-lang-switch]').forEach((el) => {
    el.classList.toggle('active', el.getAttribute('data-lang-switch') === lang);
  });
  document.querySelectorAll('[data-lang-footer]').forEach((el) => {
    const isMatch = el.getAttribute('data-lang-footer') === lang;
    el.style.color = isMatch ? '#fff' : '';
    el.style.fontWeight = isMatch ? '600' : '';
  });
}

async function setLanguage(lang) {
  if (!LANGS.includes(lang)) return;
  setCurrentLang(lang);
  updateSwitcherActive(lang);
  await applyTranslations(lang);
  document.dispatchEvent(new CustomEvent('icf:langchange', { detail: { lang } }));
}

export function initI18n() {
  const lang = getCurrentLang();

  document.querySelectorAll('[data-lang-switch]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      setLanguage(el.getAttribute('data-lang-switch'));
    });
  });
  document.querySelectorAll('[data-lang-footer]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      setLanguage(el.getAttribute('data-lang-footer'));
    });
  });

  updateSwitcherActive(lang);
  if (lang !== SOURCE_LANG) {
    applyTranslations(lang);
  }
}
