import {
  fetchPublishedArticleBySlug,
  fetchRelatedArticles,
  fetchArticleTags,
} from './cms-data.js';
import { mountLayout } from './layout.js';
import { getCurrentLang, SOURCE_LANG, applyTranslations } from './i18n.js';

let currentArticle = null;

async function init() {
  mountLayout('Insights');

  const params = new URLSearchParams(window.location.search);
  const slug = params.get('slug');

  if (!slug) {
    renderNotFound();
    return;
  }

  try {
    const article = await fetchPublishedArticleBySlug(slug);
    if (!article) {
      renderNotFound();
      return;
    }
    currentArticle = article;
    await renderArticle(article);
  } catch (err) {
    renderError(err);
  }
}

async function renderArticle(article) {
  document.title = `${article.title} — ICF Switzerland Insights`;

  const descEl = document.querySelector('meta[name="description"]');
  if (descEl) descEl.setAttribute('content', article.excerpt || article.title);

  const tags = await fetchArticleTags(article.id);
  const related = await fetchRelatedArticles(article.id, article.category_id, 3);

  const lang = getCurrentLang();
  const isTranslated = lang !== SOURCE_LANG;

  const heroImg = article.featured_image_url
    ? `<div class="article-hero-img"><img src="${escapeAttr(article.featured_image_url)}" alt="${escapeAttr(article.featured_image_alt || '')}"></div>`
    : '';

  const tagHtml = tags.length > 0
    ? `<div class="article-tags">${tags.map(t => `<span class="article-tag">${escapeHtml(t.name)}</span>`).join('')}</div>`
    : '';

  const pubDate = article.published_at
    ? new Date(article.published_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })
    : '';

  const main = document.getElementById('article-content');
  main.innerHTML = `
    <article class="article-detail">
      <div class="article-breadcrumb">
        <a href="insights.html">Insights</a>
        <span class="article-breadcrumb-sep">/</span>
        <span>${escapeHtml(article.category?.name || 'Article')}</span>
      </div>
      <span class="icf-overline article-category-label" data-i18n>${escapeHtml(article.category?.name || '')}</span>
      <h1 class="article-title" data-i18n>${escapeHtml(article.title)}</h1>
      <p class="article-excerpt" data-i18n>${escapeHtml(article.excerpt)}</p>
      <div class="article-meta">
        <span class="article-author" data-i18n>By ${escapeHtml(article.author)}</span>
        <span class="article-date">${pubDate}</span>
      </div>
      ${heroImg}
      <div class="article-body" data-i18n-body>${article.body || ''}</div>
      ${tagHtml}
    </article>
    ${related.length > 0 ? renderRelated(related) : ''}
    <div class="article-back">
      <a href="insights.html" class="btn btn-secondary btn-md" data-i18n>&larr; Back to Insights</a>
    </div>`;

  if (isTranslated) {
    await translateArticleContent(lang);
  }

  // Re-apply UI translations for surrounding elements
  if (isTranslated) {
    applyTranslations(lang, main);
  }
}

async function translateArticleContent(lang) {
  const titleEl = document.querySelector('.article-title');
  const excerptEl = document.querySelector('.article-excerpt');
  const bodyEl = document.querySelector('.article-body');
  const catEl = document.querySelector('.article-category-label');
  const authorEl = document.querySelector('.article-author');

  const texts = [];
  if (titleEl) texts.push(titleEl.textContent.trim());
  if (excerptEl) texts.push(excerptEl.textContent.trim());
  if (catEl && catEl.textContent.trim()) texts.push(catEl.textContent.trim());
  if (authorEl) texts.push(authorEl.textContent.trim());

  // Extract plain text from body paragraphs for translation
  const bodyTexts = [];
  if (bodyEl) {
    bodyEl.querySelectorAll('p, h2, h3, li, blockquote').forEach(el => {
      const t = el.textContent.trim();
      if (t) bodyTexts.push({ el, text: t });
    });
  }

  const allTexts = [...texts, ...bodyTexts.map(b => b.text)];
  if (allTexts.length === 0) return;

  try {
    const translated = await translateStrings(allTexts, SOURCE_LANG, lang);
    let idx = 0;
    if (titleEl) { titleEl.textContent = translated[idx++]; }
    if (excerptEl) { excerptEl.textContent = translated[idx++]; }
    if (catEl && catEl.textContent.trim()) { catEl.textContent = translated[idx++]; }
    if (authorEl) { authorEl.textContent = translated[idx++]; }
    bodyTexts.forEach(({ el }) => {
      el.textContent = translated[idx++];
    });
  } catch {
    // Fall back to source text — UI still works
  }
}

function renderRelated(related) {
  const cards = related.map(a => {
    const img = a.featured_image_url
      ? `<div class="related-card-img"><img src="${escapeAttr(a.featured_image_url)}" alt="${escapeAttr(a.featured_image_alt || '')}" loading="lazy"></div>`
      : `<div class="related-card-img related-card-placeholder"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--text-subtle)" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/></svg></div>`;
    const date = a.published_at
      ? new Date(a.published_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })
      : '';
    return `
      <a href="article.html?slug=${escapeAttr(a.slug)}" class="related-card">
        ${img}
        <div class="related-card-body">
          <span class="icf-overline" data-i18n>${escapeHtml(a.category?.name || '')}</span>
          <span class="related-card-title" data-i18n>${escapeHtml(a.title)}</span>
          <span class="related-card-date">${date}</span>
        </div>
      </a>`;
  }).join('');

  return `
    <section class="article-related">
      <h2 data-i18n>Related articles</h2>
      <div class="related-grid">${cards}</div>
    </section>`;
}

function renderNotFound() {
  document.getElementById('article-content').innerHTML = `
    <div class="article-not-found">
      <h1>Article not found</h1>
      <p>The article you are looking for may have been moved or is no longer available.</p>
      <a href="insights.html" class="btn btn-primary btn-md">Back to Insights</a>
    </div>`;
}

function renderError(err) {
  document.getElementById('article-content').innerHTML = `
    <div class="article-not-found">
      <h1>Something went wrong</h1>
      <p>We could not load this article. Please try again later.</p>
      <a href="insights.html" class="btn btn-primary btn-md">Back to Insights</a>
    </div>`;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function escapeAttr(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

init();
