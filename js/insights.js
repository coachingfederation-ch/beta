import { fetchPublishedArticles, fetchCategories } from './cms-data.js';
import { mountLayout } from './layout.js';
import { getCurrentLang, SOURCE_LANG, applyTranslations } from './i18n.js';

let allArticles = [];
let allCategories = [];
let activeFilter = 'all';
let searchQuery = '';
let currentLang = SOURCE_LANG;

async function init() {
  mountLayout('Insights');

  const content = document.getElementById('blog-content');

  try {
    const [articles, categories] = await Promise.all([
      fetchPublishedArticles(),
      fetchCategories(),
    ]);
    allCategories = categories;
    currentLang = getCurrentLang();
    allArticles = articles;
    renderBlogPage(content);
    await applyStaticTranslations();
  } catch (err) {
    content.innerHTML = `
      <div class="blog-empty">
        <h3 data-i18n>Could not load articles</h3>
        <p data-i18n>Please try again later.</p>
      </div>`;
    await applyStaticTranslations();
  }

  document.addEventListener('icf:langchange', (e) => {
    currentLang = e.detail.lang;
    renderBlogPage(document.getElementById('blog-content'));
    applyStaticTranslations();
  });
}

async function applyStaticTranslations() {
  await applyTranslations(currentLang, document.getElementById('blog-content'));
}

function renderBlogPage(content) {
  content.innerHTML = `
    <div class="blog-hero">
      <p class="icf-overline" style="margin:0 0 14px" data-i18n>Insights</p>
      <h1 data-i18n>Coaching in action.</h1>
      <p data-i18n>Ideas, research and perspectives on the future of coaching, leadership, AI and diversity from ICF Switzerland.</p>
    </div>
    <div class="blog-toolbar" id="blogToolbar"></div>
    <div class="blog-grid" id="blogGrid"></div>`;

  renderToolbar();
  renderGrid();
}

function renderToolbar() {
  const toolbar = document.getElementById('blogToolbar');
  if (!toolbar) return;

  const catChips = [
    '<button class="blog-filter-chip active" data-cat="all" data-i18n>All</button>',
    ...allCategories.map((c) =>
      `<button class="blog-filter-chip" data-cat="${escapeAttr(c.id)}">${escapeHtml(c.name)}</button>`,
    ),
  ].join('');

  toolbar.innerHTML = `
    <div class="blog-search">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--neutral-400)" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-3.5-3.5"></path></svg>
      <input type="text" id="blogSearch" placeholder="Search articles…" data-i18n>
    </div>
    ${catChips}`;

  document.getElementById('blogSearch').addEventListener('input', (e) => {
    searchQuery = e.target.value.toLowerCase();
    renderGrid();
  });
  document.querySelectorAll('[data-cat]').forEach((chip) => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('[data-cat]').forEach((c) => c.classList.remove('active'));
      chip.classList.add('active');
      activeFilter = chip.getAttribute('data-cat');
      renderGrid();
    });
  });
}

function renderGrid() {
  const grid = document.getElementById('blogGrid');
  if (!grid) return;

  let filtered = allArticles;
  if (activeFilter !== 'all') {
    filtered = filtered.filter((a) => a.category_id === activeFilter);
  }
  if (searchQuery) {
    filtered = filtered.filter((a) =>
      a.title.toLowerCase().includes(searchQuery) ||
      (a.excerpt || '').toLowerCase().includes(searchQuery) ||
      (a.author || '').toLowerCase().includes(searchQuery),
    );
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="blog-empty">
        <h3 data-i18n>No articles found</h3>
        <p data-i18n>Try a different search or category filter.</p>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map((a) => {
    const lang = currentLang;
    const title = lang === SOURCE_LANG ? a.title : (a[`title_${lang}`] || a.title);
    const excerpt = lang === SOURCE_LANG ? a.excerpt : (a[`excerpt_${lang}`] || a.excerpt);

    const img = a.featured_image_url
      ? `<div class="blog-card-img"><img src="${escapeAttr(a.featured_image_url)}" alt="${escapeAttr(a.featured_image_alt || '')}" loading="lazy"></div>`
      : `<div class="blog-card-placeholder"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--text-subtle)" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/></svg></div>`;
    const date = a.published_at
      ? new Date(a.published_at).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
      : '';
    return `
      <a href="article.html?slug=${escapeAttr(a.slug)}" class="blog-card">
        ${img}
        <div class="blog-card-body">
          <span class="blog-card-category">${escapeHtml(a.category?.name || '')}</span>
          <span class="blog-card-title">${escapeHtml(title)}</span>
          <span class="blog-card-excerpt">${escapeHtml(excerpt || '')}</span>
          <div class="blog-card-meta">
            <span>${escapeHtml(a.author)}</span>
            <span class="dot"></span>
            <span>${date}</span>
          </div>
        </div>
      </a>`;
  }).join('');
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
