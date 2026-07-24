import { supabase } from './supabase-client.js';

export const LANGS = ['en', 'de', 'fr', 'it'];
export const LANG_LABELS = { en: 'EN', de: 'DE', fr: 'FR', it: 'IT' };
export const LANG_NATIVE = { en: 'English', de: 'Deutsch', fr: 'Français', it: 'Italiano' };
export const SOURCE_LANG = 'en';
const STORAGE_KEY = 'icf-lang';
const SESSION_CACHE_PREFIX = 'icf-i18n-';

const translateEndpoint = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/translate`;
const translateHeaders = {
  Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
  'Content-Type': 'application/json',
};

// Chunk size for progressive translation — the UI updates as each chunk
// arrives instead of waiting for one giant response.
const UI_CHUNK = 30;

export function getCurrentLang() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && LANGS.includes(saved)) return saved;
  return SOURCE_LANG;
}

export function setCurrentLang(lang) {
  localStorage.setItem(STORAGE_KEY, lang);
}

function getSessionCache(lang) {
  const key = SESSION_CACHE_PREFIX + lang;
  try {
    const raw = sessionStorage.getItem(key);
    return raw ? new Map(JSON.parse(raw)) : new Map();
  } catch {
    return new Map();
  }
}

function saveSessionCache(lang, map) {
  try {
    sessionStorage.setItem(SESSION_CACHE_PREFIX + lang, JSON.stringify([...map]));
  } catch {
    // sessionStorage full or unavailable — non-fatal, skip caching.
  }
}

/**
 * Translate an array of source strings from sourceLang to targetLang.
 * Returns an array of translated strings in the same order. On any failure,
 * returns the original strings unchanged so the UI never breaks.
 * Uses a per-session cache so navigating between pages doesn't re-fetch
 * strings that were already translated this visit.
 */
export async function translateStrings(texts, sourceLang, targetLang) {
  if (!texts || texts.length === 0) return [];
  if (sourceLang === targetLang) return [...texts];

  const cache = getSessionCache(targetLang);
  const result = new Array(texts.length);
  const needIndexes = [];
  const needTexts = [];

  texts.forEach((t, i) => {
    if (typeof t === 'string' && t.length > 0 && cache.has(t)) {
      result[i] = cache.get(t);
    } else if (typeof t === 'string' && t.length > 0) {
      result[i] = t; // placeholder, overwritten below
      needIndexes.push(i);
      needTexts.push(t);
    } else {
      result[i] = t;
    }
  });

  if (needTexts.length === 0) return result;

  try {
    const res = await fetch(translateEndpoint, {
      method: 'POST',
      headers: translateHeaders,
      body: JSON.stringify({ source_lang: sourceLang, target_lang: targetLang, texts: needTexts }),
    });
    if (!res.ok) throw new Error(`translate failed (${res.status})`);
    const data = await res.json();
    if (!Array.isArray(data.translations) || data.translations.length !== needTexts.length) {
      throw new Error('translate response shape mismatch');
    }
    needIndexes.forEach((idx, j) => {
      result[idx] = data.translations[j];
      cache.set(needTexts[j], data.translations[j]);
    });
    saveSessionCache(targetLang, cache);
    return result;
  } catch (err) {
    console.warn('i18n: translation fell back to source text', err);
    return [...texts];
  }
}

/**
 * Collect all translatable text from elements with [data-i18n] (and
 * [data-i18n-attr]) under rootEl. Returns a list of { el, kind, attr, original }.
 */
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

let translatingIndicator = null;

function showIndicator() {
  if (translatingIndicator) return;
  translatingIndicator = document.createElement('div');
  translatingIndicator.id = 'i18n-indicator';
  translatingIndicator.setAttribute('aria-live', 'polite');
  translatingIndicator.textContent = 'Translating…';
  document.body.appendChild(translatingIndicator);
  requestAnimationFrame(() => translatingIndicator?.classList.add('visible'));
}

function hideIndicator() {
  if (!translatingIndicator) return;
  translatingIndicator.classList.remove('visible');
  const el = translatingIndicator;
  translatingIndicator = null;
  setTimeout(() => el.remove(), 300);
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

/**
 * Apply translations to all [data-i18n] elements under root (default: whole
 * document), including the document <title> and meta description.
 * Translates progressively in chunks so the UI updates as results arrive.
 */
export async function applyTranslations(targetLang, root) {
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

  showIndicator();

  // Check session cache — if everything is already cached, skip the network
  // entirely and apply instantly.
  const sessionCache = getSessionCache(targetLang);
  const allCached = uniqueTexts.every((t) => sessionCache.has(t));

  if (allCached) {
    const map = new Map();
    uniqueTexts.forEach((t) => map.set(t, sessionCache.get(t)));
    applyMapToHead(titleEl, descEl, headTexts, map);
    applyMapToItems(items, map);
    document.documentElement.setAttribute('lang', targetLang);
    hideIndicator();
    return;
  }

  // Progressive: translate in chunks, apply each chunk as it arrives.
  const map = new Map();
  for (let i = 0; i < uniqueTexts.length; i += UI_CHUNK) {
    const chunk = uniqueTexts.slice(i, i + UI_CHUNK);
    const translated = await translateStrings(chunk, SOURCE_LANG, targetLang);
    chunk.forEach((t, j) => map.set(t, translated[j]));

    // Apply head texts as soon as the first chunk (which contains them) is done.
    if (i === 0) {
      applyMapToHead(titleEl, descEl, headTexts, map);
    }
    // Apply any items whose text is now available.
    const itemsReady = items.filter((item) => map.has(item.original));
    applyMapToItems(itemsReady, map);
    // Remove applied items from the pending list.
    for (let k = items.length - 1; k >= 0; k--) {
      if (map.has(items[k].original)) items.splice(k, 1);
    }
  }

  document.documentElement.setAttribute('lang', targetLang);
  hideIndicator();
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

export function updateSwitcherActive(lang) {
  document.querySelectorAll('[data-lang-switch]').forEach((el) => {
    el.classList.toggle('active', el.getAttribute('data-lang-switch') === lang);
  });
  document.querySelectorAll('[data-lang-footer]').forEach((el) => {
    const isMatch = el.getAttribute('data-lang-footer') === lang;
    el.style.color = isMatch ? '#fff' : '';
    el.style.fontWeight = isMatch ? '600' : '';
  });
}

export async function setLanguage(lang) {
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
