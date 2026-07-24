import { supabase } from './supabase-client.js';

export const LANGS = ['en', 'de', 'fr', 'it'];
export const LANG_LABELS = { en: 'EN', de: 'DE', fr: 'FR', it: 'IT' };
export const LANG_NATIVE = { en: 'English', de: 'Deutsch', fr: 'Français', it: 'Italiano' };
export const SOURCE_LANG = 'en';
const STORAGE_KEY = 'icf-lang';

const translateEndpoint = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/translate`;
const translateHeaders = {
  Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
  'Content-Type': 'application/json',
};

export function getCurrentLang() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved && LANGS.includes(saved)) return saved;
  return SOURCE_LANG;
}

export function setCurrentLang(lang) {
  localStorage.setItem(STORAGE_KEY, lang);
}

/**
 * Translate an array of source strings via the edge function.
 * Used by the CMS for article translation and site-text pre-translation.
 * NOT used at page-view time on the public site — the public site reads
 * pre-translated strings from the translations table directly.
 */
export async function translateStrings(texts, sourceLang, targetLang) {
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

// ── Static UI text — pre-translated DB lookup ─────────────

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

/**
 * Look up pre-translated strings from the translations table and apply them.
 * Pure database lookup — no edge function call, no network latency beyond
 * the Supabase query itself. Falls back to English if a translation is
 * not found.
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

  const map = new Map();
  const CHUNK = 40;
  for (let i = 0; i < uniqueTexts.length; i += CHUNK) {
    const chunk = uniqueTexts.slice(i, i + CHUNK);
    const { data, error } = await supabase
      .from('translations')
      .select('source_text, target_text')
      .eq('source_lang', SOURCE_LANG)
      .eq('target_lang', targetLang)
      .in('source_text', chunk);
    if (error) {
      console.warn('i18n: translation lookup failed', error);
      break;
    }
    for (const row of data || []) {
      map.set(row.source_text, row.target_text);
    }
  }

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
