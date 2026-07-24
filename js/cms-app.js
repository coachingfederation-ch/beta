import { signInWithGoogle, signOut, getCurrentEditor, onAuthChange } from './cms-auth.js';
import {
  fetchArticles, fetchArticleById, createArticle, updateArticle, deleteArticle,
  fetchCategories, fetchTags, fetchArticleTags, setArticleTags,
  createCategory, deleteCategory, createTag, deleteTag,
  getCategoryCounts, getTagCounts, uploadArticleImage, slugify,
  saveArticleTranslations,
} from './cms-data.js';
import { LANGS, SOURCE_LANG, translateStrings } from './i18n.js';
import { SITE_STRINGS, TARGET_LANGS as SITE_TARGET_LANGS } from './site-strings.js';
import { supabase } from './supabase-client.js';

const TARGET_LANGS = ['de', 'fr', 'it'];
const LANG_NATIVE = { de: 'Deutsch', fr: 'Français', it: 'Italiano' };

const ALLOWED_DOMAIN = 'coachingfederation.ch';
let currentEditor = null;
let currentView = 'articles';
let currentArticleId = null;
let articlesCache = [];
let categoriesCache = [];
let tagsCache = [];

const app = document.getElementById('cms-app');

// ── Auth gate ─────────────────────────────────────────────
async function init() {
  onAuthChange((editor) => {
    if (currentEditor && editor && currentEditor.id === editor.id) return;
    currentEditor = editor;
    render();
  });

  const editor = await getCurrentEditor();
  currentEditor = editor;
  render();
}

function render() {
  if (!currentEditor) {
    renderLogin();
  } else {
    renderShell();
  }
}

function renderLogin() {
  app.innerHTML = `
    <div class="cms-login">
      <div class="cms-login-card">
        <img src="assets/logos/ICF_SwitzerlandCharterChapter_Horizontal_RGB_Positive.png" alt="ICF Switzerland">
        <h1>Insights CMS</h1>
        <p>Sign in with your @${ALLOWED_DOMAIN} Google account to manage blog articles.</p>
        <button id="googleSignIn" class="cms-google-btn">
          <svg viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1Z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"/><path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38Z"/></svg>
          Continue with Google
        </button>
        <div class="cms-login-domain-hint">Only @${ALLOWED_DOMAIN} accounts can access this editor.</div>
      </div>
    </div>`;
  document.getElementById('googleSignIn').addEventListener('click', () => {
    signInWithGoogle();
  });
}

// ── Shell ─────────────────────────────────────────────────
function renderShell() {
  renderToken++;
  app.innerHTML = `
    <div class="cms-shell">
      ${renderSidebar()}
      <main class="cms-main" id="cmsMain"></main>
    </div>`;
  bindSidebarNav();
  renderView();
}

function renderSidebar() {
  const navItems = [
    { id: 'articles', label: 'Articles', icon: '<path d="M4 4h13a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3V4Z"></path><path d="M8 9h8M8 13h8M8 17h5"></path>' },
    { id: 'editor', label: 'Editor', icon: '<path d="M12 20h9"></path><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"></path>' },
    { id: 'taxonomy', label: 'Categories & Tags', icon: '<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0l-7-7V3h10.6l7 7a2 2 0 0 1 0 2.8Z"></path><circle cx="7.5" cy="7.5" r="1.3" fill="currentColor" stroke="none"></circle>' },
    { id: 'site-translations', label: 'Site Translations', icon: '<path d="M4 5h16M4 12h16M4 19h16"></path><path d="M7 5v14M17 5v14"></path>' },
  ];

  const navHtml = navItems.map(item => `
    <button class="cms-nav-btn ${currentView === item.id ? 'active' : ''}" data-view="${item.id}">
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${item.icon}</svg>
      ${item.label}
    </button>`).join('');

  return `
    <aside class="cms-sidebar">
      <div class="cms-sidebar-header">
        <img src="assets/logos/ICF_SwitzerlandCharterChapter_Horizontal_RGB_Positive.png" alt="ICF Switzerland">
        <span style="display:flex;flex-direction:column">
          <span class="cms-title">Insights CMS</span>
          <span class="cms-sub">${ALLOWED_DOMAIN}</span>
        </span>
      </div>
      <nav class="cms-nav">
        ${navHtml}
      </nav>
      <div class="cms-sidebar-footer">
        <span class="cms-avatar">${currentEditor.initials}</span>
        <span style="display:flex;flex-direction:column;min-width:0">
          <span class="cms-editor-name">${escapeHtml(currentEditor.name)}</span>
          <span class="cms-editor-role">Chapter editor</span>
        </span>
        <button class="cms-logout-btn" id="cmsLogout" title="Sign out" aria-label="Sign out">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><path d="M16 17l5-5-5-5"></path><path d="M21 12H9"></path></svg>
        </button>
      </div>
    </aside>`;
}

function bindSidebarNav() {
  document.querySelectorAll('[data-view]').forEach(btn => {
    btn.addEventListener('click', () => {
      const view = btn.getAttribute('data-view');
      if (view === 'editor' && !currentArticleId) {
        switchView('articles');
      } else {
        switchView(view);
      }
    });
  });
  const logout = document.getElementById('cmsLogout');
  if (logout) logout.addEventListener('click', () => signOut());
}

function switchView(view) {
  currentView = view;
  renderShell();
}

function renderView() {
  const main = document.getElementById('cmsMain');
  if (!main) return;
  if (currentView === 'articles') renderArticlesList(main);
  else if (currentView === 'editor') renderEditor(main);
  else if (currentView === 'taxonomy') renderTaxonomy(main);
  else if (currentView === 'site-translations') renderSiteTranslations(main);
}

// ── Articles list ─────────────────────────────────────────
async function renderArticlesList(main) {
  const myToken = renderToken;
  main.innerHTML = `<div style="padding:40px;text-align:center;color:var(--text-muted)">Loading articles…</div>`;

  try {
    articlesCache = await fetchArticles();
  } catch (err) {
    if (myToken !== renderToken) return;
    main.innerHTML = `<div class="cms-empty"><h3>Could not load articles</h3><p>${escapeHtml(err.message)}</p></div>`;
    return;
  }
  if (myToken !== renderToken) return;

  const counts = { published: 0, draft: 0, scheduled: 0 };
  for (const a of articlesCache) {
    if (counts[a.status] !== undefined) counts[a.status]++;
  }

  main.innerHTML = `
    <div class="cms-page-header">
      <div>
        <h1>Articles</h1>
        <p class="cms-subtitle">${articlesCache.length} articles · ${counts.draft} drafts · ${counts.scheduled} scheduled</p>
      </div>
      <button class="cms-new-btn" id="newArticleBtn">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round"><path d="M12 5v14M5 12h14"></path></svg>
        New article
      </button>
    </div>
    <div class="cms-toolbar">
      <div class="cms-search">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--neutral-400)" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-3.5-3.5"></path></svg>
        <input type="text" id="articleSearch" placeholder="Search articles…">
      </div>
      <button class="cms-filter-chip active" data-filter="all">All</button>
      <button class="cms-filter-chip" data-filter="published">Published</button>
      <button class="cms-filter-chip" data-filter="draft">Drafts</button>
      <button class="cms-filter-chip" data-filter="scheduled">Scheduled</button>
    </div>
    <div class="cms-table-wrap">
      <div class="cms-table" id="articlesTable">
        ${renderArticlesTable(articlesCache)}
      </div>
      <div class="cms-legend">
        <span class="cms-legend-swatch" style="background:var(--icf-cyan-100);border:1px solid var(--icf-cyan-300)"></span> AI-translated
        <span class="cms-legend-swatch cms-legend-gap" style="background:var(--neutral-100);border:1px solid var(--neutral-300)"></span> Pending
        <span class="cms-legend-swatch cms-legend-gap" style="background:var(--icf-indigo-600)"></span> Source language (EN)
      </div>
    </div>`;

  document.getElementById('newArticleBtn').addEventListener('click', handleNewArticle);
  document.getElementById('articleSearch').addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase();
    const filtered = articlesCache.filter(a =>
      a.title.toLowerCase().includes(q) || (a.author || '').toLowerCase().includes(q)
    );
    document.getElementById('articlesTable').innerHTML = renderArticlesTable(filtered);
    bindArticleRows();
  });
  document.querySelectorAll('[data-filter]').forEach(chip => {
    chip.addEventListener('click', () => {
      document.querySelectorAll('[data-filter]').forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const filter = chip.getAttribute('data-filter');
      const filtered = filter === 'all' ? articlesCache : articlesCache.filter(a => a.status === filter);
      document.getElementById('articlesTable').innerHTML = renderArticlesTable(filtered);
      bindArticleRows();
    });
  });
  bindArticleRows();
}

function renderArticlesTable(articles) {
  if (articles.length === 0) {
    return `<div class="cms-empty"><h3>No articles found</h3><p>Create your first article to get started.</p></div>`;
  }
  const head = `
    <div class="cms-table-head">
      <span>Article</span><span>Category</span><span>Status</span><span>Translations</span><span>Updated</span>
    </div>`;
  const rows = articles.map(a => {
    const statusClass = `cms-status-${a.status}`;
    const statusLabel = a.status.charAt(0).toUpperCase() + a.status.slice(1);
    const updated = a.updated_at ? formatDate(a.updated_at) : '';
    const catName = a.category?.name || '—';
    return `
      <div class="cms-table-row" data-id="${a.id}">
        <span style="display:flex;flex-direction:column;gap:3px;min-width:0">
          <span class="cms-article-title">${escapeHtml(a.title)}</span>
          <span class="cms-article-author">by ${escapeHtml(a.author)}</span>
        </span>
        <span class="cms-article-cat">${escapeHtml(catName)}</span>
        <span><span class="cms-status-badge ${statusClass}"><span class="dot"></span>${statusLabel}</span></span>
        <span class="cms-lang-row">
          <span class="cms-lang-pill cms-lang-translated" title="German">DE</span>
          <span class="cms-lang-pill cms-lang-translated" title="French">FR</span>
          <span class="cms-lang-pill cms-lang-translated" title="Italian">IT</span>
          <span class="cms-lang-pill cms-lang-source" title="English source">EN</span>
        </span>
        <span class="cms-updated">${updated}</span>
      </div>`;
  }).join('');
  return head + rows;
}

function bindArticleRows() {
  document.querySelectorAll('.cms-table-row[data-id]').forEach(row => {
    row.addEventListener('click', () => {
      currentArticleId = row.getAttribute('data-id');
      currentView = 'editor';
      renderShell();
    });
  });
}

async function handleNewArticle() {
  try {
    const article = await createArticle(currentEditor.id);
    currentArticleId = article.id;
    currentView = 'editor';
    renderShell();
  } catch (err) {
    alert('Could not create article: ' + err.message);
  }
}

// ── Editor ────────────────────────────────────────────────
let editorState = { title: '', slug: '', excerpt: '', body: '', author: '', status: 'draft', category_id: null, featured_image_url: null, featured_image_alt: '', translations: {} };
let saveTimer = null;
let isDirty = false;
let isTranslating = false;
let renderToken = 0;

async function renderEditor(main) {
  const myToken = renderToken;
  if (!currentArticleId) {
    main.innerHTML = `
      <div class="cms-empty" style="padding:120px 20px">
        <h3>No article selected</h3>
        <p>Choose an article from the list or create a new one.</p>
        <button class="cms-new-btn" style="margin-top:20px" id="newArticleBtn2">New article</button>
      </div>`;
    document.getElementById('newArticleBtn2').addEventListener('click', handleNewArticle);
    return;
  }

  main.innerHTML = `<div style="padding:40px;text-align:center;color:var(--text-muted)">Loading editor…</div>`;

  try {
    const [article, cats, allTags, articleTags] = await Promise.all([
      fetchArticleById(currentArticleId),
      fetchCategories(),
      fetchTags(),
      fetchArticleTags(currentArticleId),
    ]);
    if (myToken !== renderToken) return;
    categoriesCache = cats;
    tagsCache = allTags;

    if (!article) {
      main.innerHTML = `<div class="cms-empty"><h3>Article not found</h3></div>`;
      return;
    }

    editorState = {
      id: article.id,
      title: article.title || '',
      slug: article.slug || '',
      excerpt: article.excerpt || '',
      body: article.body || '',
      author: article.author || 'ICF Switzerland',
      status: article.status || 'draft',
      category_id: article.category_id || null,
      featured_image_url: article.featured_image_url || null,
      featured_image_alt: article.featured_image_alt || '',
      tagIds: articleTags.map(t => t.id),
      translations: {
        de: { title: article.title_de || null, excerpt: article.excerpt_de || null, body: article.body_de || null },
        fr: { title: article.title_fr || null, excerpt: article.excerpt_fr || null, body: article.body_fr || null },
        it: { title: article.title_it || null, excerpt: article.excerpt_it || null, body: article.body_it || null },
      },
    };

    renderEditorContent(main);
  } catch (err) {
    main.innerHTML = `<div class="cms-empty"><h3>Could not load article</h3><p>${escapeHtml(err.message)}</p></div>`;
  }
}

function renderEditorContent(main) {
  const statusBadge = editorState.status === 'published'
    ? '<span class="cms-status-badge cms-status-published"><span class="dot"></span>Published</span>'
    : editorState.status === 'scheduled'
    ? '<span class="cms-status-badge cms-status-scheduled"><span class="dot"></span>Scheduled</span>'
    : '<span class="cms-status-badge cms-status-draft"><span class="dot"></span>Draft</span>';

  const publishLabel = editorState.status === 'published' ? 'Unpublish' : 'Publish';

  main.innerHTML = `
    <div class="cms-editor-topbar">
      <button class="cms-topbar-btn" id="backToArticles">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"></path></svg>
        Articles
      </button>
      ${statusBadge}
      <span class="cms-save-status" id="saveStatus">All changes saved</span>
      <div style="margin-left:auto;display:flex;align-items:center;gap:10px">
        <button class="cms-topbar-btn" id="deleteBtn" style="color:var(--red-600);border-color:var(--red-100)">Delete</button>
        <button class="cms-topbar-publish" id="publishBtn">${publishLabel}</button>
      </div>
    </div>
    <div class="cms-editor-body">
      <div class="cms-canvas">
        <div class="cms-canvas-inner">
          <div class="cms-lang-tabs">
            <span class="cms-lang-tab cms-lang-tab-source">EN · Source</span>
            ${renderLangTab('de')}
            ${renderLangTab('fr')}
            ${renderLangTab('it')}
            <span class="cms-lang-tabs-hint">Click “Translate now” in the panel to generate translations</span>
          </div>
          <input type="text" class="cms-title-input" id="titleInput" value="${escapeAttr(editorState.title)}" placeholder="Article title">
          <textarea class="cms-excerpt-input" id="excerptInput" rows="2" placeholder="Lead paragraph — a short summary that appears under the headline and in article cards.">${escapeHtml(editorState.excerpt)}</textarea>
          <div class="cms-featured-drop ${editorState.featured_image_url ? 'has-image' : ''}" id="featuredDrop">
            ${editorState.featured_image_url ? `<img src="${escapeAttr(editorState.featured_image_url)}" alt="">` : ''}
            <svg class="cms-featured-drop-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="M17 8l-5-5-5 5"></path><path d="M12 3v12"></path></svg>
            <span class="cms-featured-drop-text">Featured image — drop or click to upload</span>
            <button class="cms-featured-remove" id="featuredRemove">Remove image</button>
            <input type="file" id="featuredFileInput" accept="image/*" style="display:none">
          </div>
          <p class="cms-featured-hint">Add alt text in the panel on the right for accessibility.</p>
          <div class="cms-toolbar-row" id="formatToolbar">
            <button class="cms-toolbar-btn" data-cmd="bold" title="Bold"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 4h8a4 4 0 0 1 0 8H6z"/><path d="M6 12h9a4 4 0 0 1 0 8H6z"/></svg></button>
            <button class="cms-toolbar-btn" data-cmd="italic" title="Italic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="4" x2="10" y2="4"/><line x1="14" y1="20" x2="5" y2="20"/><line x1="15" y1="4" x2="9" y2="20"/></svg></button>
            <div class="cms-toolbar-divider"></div>
            <button class="cms-toolbar-btn" data-block="h2" title="Heading"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 12h12M6 4v16M18 4v16"/></svg></button>
            <button class="cms-toolbar-btn" data-block="h3" title="Subheading"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 18h16M10 6v12"/></svg></button>
            <button class="cms-toolbar-btn" data-block="blockquote" title="Quote"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21c3 0 7-1 7-8V5c0-1-1-2-2-2H4c-1 0-2 1-2 2v6c0 1 1 2 2 2h2"/><path d="M15 21c3 0 7-1 7-8V5c0-1-1-2-2-2h-4c-1 0-2 1-2 2v6c0 1 1 2 2 2h2"/></svg></button>
            <div class="cms-toolbar-divider"></div>
            <button class="cms-toolbar-btn" data-block="ul" title="Bullet list"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg></button>
            <button class="cms-toolbar-btn" data-block="ol" title="Numbered list"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="10" y1="6" x2="21" y2="6"/><line x1="10" y1="12" x2="21" y2="12"/><line x1="10" y1="18" x2="21" y2="18"/><path d="M4 6h1v4M4 10h2M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/></svg></button>
            <div class="cms-toolbar-divider"></div>
            <button class="cms-toolbar-btn" data-block="p" title="Paragraph"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 4v16M17 4v16M19 4H9a4 4 0 0 0 0 8h4"/></svg></button>
          </div>
          <div class="cms-body-editor" id="bodyEditor" contenteditable="true">${editorState.body || '<p>Start writing your article here…</p>'}</div>
        </div>
      </div>
      ${renderSettingsPanel()}
    </div>`;

  bindEditorEvents();
}

function renderSettingsPanel() {
  const catOptions = categoriesCache.map(c =>
    `<option value="${c.id}" ${editorState.category_id === c.id ? 'selected' : ''}>${escapeHtml(c.name)}</option>`
  ).join('');

  const selectedTagIds = new Set(editorState.tagIds || []);
  const tagChips = tagsCache.filter(t => selectedTagIds.has(t.id)).map(t =>
    `<span class="cms-tag-chip">${escapeHtml(t.name)} <button data-tag-remove="${t.id}">×</button></span>`
  ).join('');

  const availableTags = tagsCache.filter(t => !selectedTagIds.has(t.id)).map(t =>
    `<span class="cms-tag-cloud-item" data-tag-add="${t.id}">${escapeHtml(t.name)} +</span>`
  ).join('');

  return `
    <aside class="cms-settings-panel">
      <section class="cms-panel-section">
        <h3>Translations</h3>
        <button class="cms-translate-btn" id="translateNowBtn">${isTranslating ? 'Translating…' : 'Translate now'}</button>
        ${renderTranslationRow('de')}
        ${renderTranslationRow('fr')}
        ${renderTranslationRow('it')}
        <p style="font-size:12px;color:var(--text-muted);line-height:1.55;margin:10px 2px 0">Click “Translate now” to generate all three translations at once. Visitors see the stored version for their language — no live translation needed on page load.</p>
      </section>
      <section class="cms-panel-section">
        <h3>Publishing</h3>
        <div class="cms-field">
          <label>Category</label>
          <select id="categorySelect">
            <option value="">No category</option>
            ${catOptions}
          </select>
        </div>
        <div class="cms-field">
          <label>Author</label>
          <input type="text" id="authorInput" value="${escapeAttr(editorState.author)}">
        </div>
        <div class="cms-field">
          <label>Permalink</label>
          <div class="cms-slug-field">
            <span class="cms-slug-prefix">article.html?slug=</span>
            <input type="text" id="slugInput" value="${escapeAttr(editorState.slug)}">
          </div>
          <div class="cms-permalink-display">
            <a href="article.html?slug=${escapeAttr(editorState.slug)}" target="_blank">View article →</a>
          </div>
        </div>
        <div class="cms-field">
          <label>Featured image alt text</label>
          <input type="text" id="altInput" value="${escapeAttr(editorState.featured_image_alt)}" placeholder="Describe the image for accessibility">
        </div>
      </section>
      <section class="cms-panel-section">
        <h3>Tags</h3>
        <div class="cms-tag-list" id="tagChips">${tagChips || '<span style="font-size:12px;color:var(--text-muted)">No tags assigned</span>'}</div>
        <div class="cms-tag-cloud" id="tagCloud">${availableTags || '<span style="font-size:12px;color:var(--text-muted)">All tags assigned</span>'}</div>
        <div style="margin-top:12px">
          <input type="text" class="cms-tag-add-input" id="newTagInput" placeholder="Add a new tag…">
        </div>
      </section>
    </aside>`;
}

function bindEditorEvents() {
  document.getElementById('backToArticles').addEventListener('click', () => {
    currentArticleId = null;
    currentView = 'articles';
    renderShell();
  });

  const titleInput = document.getElementById('titleInput');
  const excerptInput = document.getElementById('excerptInput');
  const bodyEditor = document.getElementById('bodyEditor');
  const authorInput = document.getElementById('authorInput');
  const slugInput = document.getElementById('slugInput');
  const categorySelect = document.getElementById('categorySelect');
  const altInput = document.getElementById('altInput');

  titleInput.addEventListener('input', () => { editorState.title = titleInput.value; markDirty(); });
  excerptInput.addEventListener('input', () => { editorState.excerpt = excerptInput.value; markDirty(); });
  bodyEditor.addEventListener('input', () => { editorState.body = bodyEditor.innerHTML; markDirty(); });
  authorInput.addEventListener('input', () => { editorState.author = authorInput.value; markDirty(); });
  slugInput.addEventListener('input', () => { editorState.slug = slugInput.value; markDirty(); });
  categorySelect.addEventListener('change', () => { editorState.category_id = categorySelect.value || null; markDirty(); });
  altInput.addEventListener('input', () => { editorState.featured_image_alt = altInput.value; markDirty(); });

  // Format toolbar
  document.querySelectorAll('[data-cmd]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      document.execCommand(btn.getAttribute('data-cmd'), false, null);
      bodyEditor.focus();
      editorState.body = bodyEditor.innerHTML;
      markDirty();
    });
  });
  document.querySelectorAll('[data-block]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const block = btn.getAttribute('data-block');
      if (block === 'h2' || block === 'h3' || block === 'p') {
        document.execCommand('formatBlock', false, block);
      } else if (block === 'blockquote') {
        document.execCommand('formatBlock', false, 'blockquote');
      } else if (block === 'ul') {
        document.execCommand('insertUnorderedList', false, null);
      } else if (block === 'ol') {
        document.execCommand('insertOrderedList', false, null);
      }
      bodyEditor.focus();
      editorState.body = bodyEditor.innerHTML;
      markDirty();
    });
  });

  // Featured image upload
  const drop = document.getElementById('featuredDrop');
  const fileInput = document.getElementById('featuredFileInput');
  const removeBtn = document.getElementById('featuredRemove');

  drop.addEventListener('click', (e) => {
    if (e.target === removeBtn) return;
    fileInput.click();
  });
  drop.addEventListener('dragover', (e) => { e.preventDefault(); drop.classList.add('dragging'); });
  drop.addEventListener('dragleave', () => drop.classList.remove('dragging'));
  drop.addEventListener('drop', (e) => {
    e.preventDefault();
    drop.classList.remove('dragging');
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) handleImageUpload(file);
  });
  fileInput.addEventListener('change', () => {
    const file = fileInput.files[0];
    if (file) handleImageUpload(file);
  });
  removeBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    editorState.featured_image_url = null;
    drop.classList.remove('has-image');
    const img = drop.querySelector('img');
    if (img) img.remove();
    markDirty();
  });

  // Tag management
  document.querySelectorAll('[data-tag-add]').forEach(el => {
    el.addEventListener('click', () => {
      const tagId = el.getAttribute('data-tag-add');
      editorState.tagIds = [...(editorState.tagIds || []), tagId];
      renderEditorContent(document.getElementById('cmsMain'));
    });
  });
  document.querySelectorAll('[data-tag-remove]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.stopPropagation();
      const tagId = el.getAttribute('data-tag-remove');
      editorState.tagIds = (editorState.tagIds || []).filter(id => id !== tagId);
      renderEditorContent(document.getElementById('cmsMain'));
    });
  });
  const newTagInput = document.getElementById('newTagInput');
  if (newTagInput) {
    newTagInput.addEventListener('keydown', async (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        const name = newTagInput.value.trim();
        if (!name) return;
        try {
          const tag = await createTag(name);
          tagsCache.push(tag);
          editorState.tagIds = [...(editorState.tagIds || []), tag.id];
          renderEditorContent(document.getElementById('cmsMain'));
        } catch (err) {
          alert('Could not create tag: ' + err.message);
        }
      }
    });
  }

  // Publish / Delete
  document.getElementById('publishBtn').addEventListener('click', handlePublish);
  document.getElementById('deleteBtn').addEventListener('click', handleDelete);

  const translateBtn = document.getElementById('translateNowBtn');
  if (translateBtn) translateBtn.addEventListener('click', handleTranslateNow);
  TARGET_LANGS.forEach(lang => {
    const reBtn = document.getElementById(`retranslate-${lang}`);
    if (reBtn) reBtn.addEventListener('click', () => handleTranslateNow(lang));
  });
}

async function handleImageUpload(file) {
  const drop = document.getElementById('featuredDrop');
  drop.innerHTML = '<span style="color:var(--text-muted);font-size:14px">Uploading…</span>';
  try {
    const url = await uploadArticleImage(file);
    editorState.featured_image_url = url;
    drop.classList.add('has-image');
    drop.innerHTML = `<img src="${escapeAttr(url)}" alt=""><button class="cms-featured-remove" id="featuredRemove">Remove image</button><input type="file" id="featuredFileInput" accept="image/*" style="display:none">`;
    document.getElementById('featuredRemove').addEventListener('click', (e) => {
      e.stopPropagation();
      editorState.featured_image_url = null;
      drop.classList.remove('has-image');
      drop.querySelector('img')?.remove();
      markDirty();
    });
    markDirty();
  } catch (err) {
    alert('Upload failed: ' + err.message);
    renderEditorContent(document.getElementById('cmsMain'));
  }
}

function markDirty() {
  isDirty = true;
  const status = document.getElementById('saveStatus');
  if (status) {
    status.textContent = 'Saving…';
    status.className = 'cms-save-status dirty';
  }
  clearTimeout(saveTimer);
  saveTimer = setTimeout(saveArticle, 1500);
}

async function saveArticle() {
  if (!currentArticleId) return;
  try {
    await updateArticle(currentArticleId, {
      title: editorState.title,
      slug: editorState.slug,
      excerpt: editorState.excerpt,
      body: editorState.body,
      author: editorState.author,
      category_id: editorState.category_id,
      featured_image_url: editorState.featured_image_url,
      featured_image_alt: editorState.featured_image_alt,
    });
    if (editorState.tagIds) {
      await setArticleTags(currentArticleId, editorState.tagIds);
    }
    isDirty = false;
    const status = document.getElementById('saveStatus');
    if (status) {
      status.textContent = 'All changes saved';
      status.className = 'cms-save-status saved';
    }
  } catch (err) {
    const status = document.getElementById('saveStatus');
    if (status) {
      status.textContent = 'Save failed: ' + err.message;
      status.className = 'cms-save-status dirty';
    }
  }
}

async function handlePublish() {
  if (!currentArticleId) return;
  const newStatus = editorState.status === 'published' ? 'draft' : 'published';

  if (newStatus === 'published') {
    const hasTitle = editorState.title && editorState.title.trim() && editorState.title.trim() !== 'Untitled article';
    const hasBody = editorState.body && editorState.body.replace(/<[^>]*>/g, '').trim().length > 0;

    if (!hasTitle || !hasBody) {
      showPublishOverlay('warning', 'Article has no content',
        'This article is missing a title or body text. It will be published without translations — visitors will see the English version in all languages. Continue?');
      return;
    }

    showPublishOverlay('translating');

    try {
      await saveArticle();

      const sourceHash = `${editorState.title}|${editorState.excerpt}|${editorState.body}`;
      const needsTranslation = !editorState.translations?.de?.title || editorState._translationHash !== sourceHash;

      if (needsTranslation) {
        updatePublishOverlayMessage('Translating into German, French and Italian…');
        const sourceTexts = [editorState.title || '', editorState.excerpt || '', editorState.body || ''];
        for (const lang of TARGET_LANGS) {
          const [tTitle, tExcerpt, tBody] = await translateStrings(sourceTexts, SOURCE_LANG, lang);
          editorState.translations[lang] = { title: tTitle, excerpt: tExcerpt, body: tBody };
        }
        const dbUpdates = {};
        for (const lang of TARGET_LANGS) {
          const tr = editorState.translations[lang];
          if (tr && tr.title != null) {
            dbUpdates[`title_${lang}`] = tr.title;
            dbUpdates[`excerpt_${lang}`] = tr.excerpt;
            dbUpdates[`body_${lang}`] = tr.body;
          }
        }
        await saveArticleTranslations(editorState.id, dbUpdates, sourceHash);
        editorState._translationHash = sourceHash;
      } else {
        updatePublishOverlayMessage('Translations already up to date — publishing…');
      }

      const updated = await updateArticle(currentArticleId, {
        status: 'published',
        published_at: new Date().toISOString(),
      });
      editorState.status = 'published';
      hidePublishOverlay();
      renderEditorContent(document.getElementById('cmsMain'));
      showPanelToast('Article published with translations.');
    } catch (err) {
      hidePublishOverlay();
      alert('Could not publish: ' + err.message);
    }
  } else {
    try {
      await saveArticle();
      await updateArticle(currentArticleId, { status: 'draft', published_at: null });
      editorState.status = 'draft';
      renderEditorContent(document.getElementById('cmsMain'));
    } catch (err) {
      alert('Could not change publish status: ' + err.message);
    }
  }
}

function showPublishOverlay(type, title, message) {
  hidePublishOverlay();
  const overlay = document.createElement('div');
  overlay.className = 'cms-publish-overlay';
  overlay.id = 'publishOverlay';

  if (type === 'translating') {
    overlay.innerHTML = `
      <div class="cms-publish-card">
        <div class="cms-publish-spinner"></div>
        <h3 id="publishOverlayTitle">Translating and publishing…</h3>
        <p id="publishOverlayMessage">Saving your article…</p>
        <p class="cms-publish-hint">The editor is locked while translations are generated. This usually takes 5–15 seconds.</p>
      </div>`;
  } else if (type === 'warning') {
    overlay.innerHTML = `
      <div class="cms-publish-card">
        <div class="cms-publish-warning-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
        </div>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(message)}</p>
        <div class="cms-publish-actions">
          <button class="cms-topbar-btn" id="publishCancel">Cancel</button>
          <button class="cms-topbar-publish" id="publishForce">Publish anyway</button>
        </div>
      </div>`;
  }

  document.body.appendChild(overlay);
  requestAnimationFrame(() => overlay.classList.add('visible'));

  if (type === 'warning') {
    document.getElementById('publishCancel').addEventListener('click', hidePublishOverlay);
    document.getElementById('publishForce').addEventListener('click', async () => {
      hidePublishOverlay();
      await forcePublishWithoutTranslation();
    });
  }
}

function updatePublishOverlayMessage(msg) {
  const el = document.getElementById('publishOverlayMessage');
  if (el) el.textContent = msg;
}

function hidePublishOverlay() {
  const overlay = document.getElementById('publishOverlay');
  if (overlay) {
    overlay.classList.remove('visible');
    setTimeout(() => overlay.remove(), 200);
  }
}

async function forcePublishWithoutTranslation() {
  try {
    await saveArticle();
    await updateArticle(currentArticleId, {
      status: 'published',
      published_at: new Date().toISOString(),
    });
    editorState.status = 'published';
    renderEditorContent(document.getElementById('cmsMain'));
    showPanelToast('Article published (no translations generated).');
  } catch (err) {
    alert('Could not publish: ' + err.message);
  }
}

async function handleDelete() {
  if (!currentArticleId) return;
  if (!confirm('Delete this article? This cannot be undone.')) return;
  try {
    await deleteArticle(currentArticleId);
    currentArticleId = null;
    currentView = 'articles';
    renderShell();
  } catch (err) {
    alert('Could not delete: ' + err.message);
  }
}

// ── Taxonomy ──────────────────────────────────────────────
async function renderTaxonomy(main) {
  const myToken = renderToken;
  main.innerHTML = `<div style="padding:40px;text-align:center;color:var(--text-muted)">Loading…</div>`;
  try {
    const [cats, allTags, catCounts, tagCounts] = await Promise.all([
      fetchCategories(),
      fetchTags(),
      getCategoryCounts(),
      getTagCounts(),
    ]);
    if (myToken !== renderToken) return;
    categoriesCache = cats;
    tagsCache = allTags;

    main.innerHTML = `
      <div class="cms-page-header">
        <div>
          <h1>Categories & Tags</h1>
          <p class="cms-subtitle">Categories structure the blog; tags connect related articles.</p>
        </div>
      </div>
      <div class="cms-taxonomy-grid">
        <div class="cms-tax-card">
          <div class="cms-tax-card-header">
            <h2>Categories</h2>
          </div>
          <div class="cms-tax-add-row">
            <input type="text" class="cms-tax-add-input" id="newCatInput" placeholder="Add a category…">
            <button class="cms-tax-add-btn" id="addCatBtn">+ Add</button>
          </div>
          <div id="catList">
            ${cats.map(c => `
              <div class="cms-tax-item">
                <span class="cms-tax-item-name">${escapeHtml(c.name)}</span>
                <div style="display:flex;align-items:center;gap:12px">
                  <span class="cms-tax-item-count">${catCounts[c.id] || 0} articles</span>
                  <button class="cms-tax-item-delete" data-cat-del="${c.id}" title="Delete">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path></svg>
                  </button>
                </div>
              </div>`).join('')}
          </div>
        </div>
        <div class="cms-tax-card">
          <div class="cms-tax-card-header">
            <h2>Tags</h2>
          </div>
          <div class="cms-tax-add-row">
            <input type="text" class="cms-tax-add-input" id="newTagInput2" placeholder="Add a tag…">
            <button class="cms-tax-add-btn" id="addTagBtn">+ Add</button>
          </div>
          <div class="cms-tag-cloud" id="tagList">
            ${allTags.map(t => `
              <span class="cms-tag-cloud-item">
                ${escapeHtml(t.name)} · ${tagCounts[t.id] || 0}
                <button class="cms-tax-item-delete" data-tag-del="${t.id}" title="Delete" style="background:none;border:none;cursor:pointer;padding:0 0 0 4px">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"></path></svg>
                </button>
              </span>`).join('') || '<span style="font-size:13px;color:var(--text-muted)">No tags yet</span>'}
          </div>
        </div>
      </div>`;

    document.getElementById('addCatBtn').addEventListener('click', handleAddCategory);
    document.getElementById('newCatInput').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleAddCategory();
    });
    document.getElementById('addTagBtn').addEventListener('click', handleAddTagTax);
    document.getElementById('newTagInput2').addEventListener('keydown', (e) => {
      if (e.key === 'Enter') handleAddTagTax();
    });
    document.querySelectorAll('[data-cat-del]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = btn.getAttribute('data-cat-del');
        try {
          await deleteCategory(id);
          renderTaxonomy(main);
        } catch (err) {
          alert('Could not delete category: ' + err.message);
        }
      });
    });
    document.querySelectorAll('[data-tag-del]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const id = btn.getAttribute('data-tag-del');
        try {
          await deleteTag(id);
          renderTaxonomy(main);
        } catch (err) {
          alert('Could not delete tag: ' + err.message);
        }
      });
    });
  } catch (err) {
    main.innerHTML = `<div class="cms-empty"><h3>Could not load</h3><p>${escapeHtml(err.message)}</p></div>`;
  }
}

async function handleAddCategory() {
  const input = document.getElementById('newCatInput');
  const name = input.value.trim();
  if (!name) return;
  try {
    await createCategory(name);
    input.value = '';
    renderTaxonomy(document.getElementById('cmsMain'));
  } catch (err) {
    alert('Could not add category: ' + err.message);
  }
}

async function handleAddTagTax() {
  const input = document.getElementById('newTagInput2');
  const name = input.value.trim();
  if (!name) return;
  try {
    await createTag(name);
    input.value = '';
    renderTaxonomy(document.getElementById('cmsMain'));
  } catch (err) {
    alert('Could not add tag: ' + err.message);
  }
}

// ── Site Translations view ───────────────────────────────
async function renderSiteTranslations(main) {
  const myToken = renderToken;
  main.innerHTML = `<div style="padding:40px;text-align:center;color:var(--text-muted)">Loading…</div>`;

  try {
    const status = await getSiteTranslationStatus();
    if (myToken !== renderToken) return;

    main.innerHTML = `
      <div class="cms-page-header">
        <div>
          <h1>Site Translations</h1>
          <p class="cms-subtitle">Pre-translate all static UI text so language switching is instant for visitors.</p>
        </div>
      </div>
      <div class="cms-site-trans-body">
        <div class="cms-site-trans-card">
          <div class="cms-site-trans-card-header">
            <h2>How it works</h2>
          </div>
          <p class="cms-site-trans-explain">Every piece of static text on the website — navigation, buttons, headings, labels — is translated once and stored in the database. After that, switching languages on any page is instant: the site reads the stored translation directly, with no translation calls at page-view time.</p>
          <p class="cms-site-trans-explain">Run this whenever you add new pages or change static text. It only translates strings that are not yet in the database — existing translations are kept.</p>
        </div>

        <div class="cms-site-trans-card">
          <div class="cms-site-trans-card-header">
            <h2>Translation status</h2>
          </div>
          ${renderSiteTransStatusRows(status)}
        </div>

        <div class="cms-site-trans-card">
          <div class="cms-site-trans-card-header">
            <h2>Run pre-translation</h2>
          </div>
          <p class="cms-site-trans-explain">Translates ${SITE_STRINGS.length} static strings into German, French and Italian. Only missing strings are translated — existing ones are skipped.</p>
          <button class="cms-translate-btn" id="siteTransRunBtn">Translate site text now</button>
          <div class="cms-site-trans-result" id="siteTransResult"></div>
        </div>
      </div>`;

    const runBtn = document.getElementById('siteTransRunBtn');
    if (runBtn) runBtn.addEventListener('click', handleRunSiteTranslations);
  } catch (err) {
    main.innerHTML = `<div class="cms-empty"><h3>Could not load</h3><p>${escapeHtml(err.message)}</p></div>`;
  }
}

function renderSiteTransStatusRows(status) {
  const langNames = { de: 'Deutsch', fr: 'Français', it: 'Italiano' };
  return TARGET_LANGS.map((lang) => {
    const s = status[lang] || { total: 0, translated: 0 };
    const pct = s.total > 0 ? Math.round((s.translated / s.total) * 100) : 0;
    const isComplete = pct === 100;
    return `
      <div class="cms-site-trans-row">
        <span class="cms-site-trans-lang">${langNames[lang]}</span>
        <div class="cms-site-trans-bar-wrap">
          <div class="cms-site-trans-bar" style="width:${pct}%"></div>
        </div>
        <span class="cms-site-trans-count ${isComplete ? 'cms-site-trans-count-done' : ''}">${s.translated}/${s.total} ${isComplete ? '✓' : ''}</span>
      </div>`;
  }).join('');
}

async function getSiteTranslationStatus() {
  const status = {};
  const totalStrings = SITE_STRINGS.length;
  for (const lang of TARGET_LANGS) {
    const { data, error } = await supabase
      .from('translations')
      .select('source_text')
      .eq('source_lang', SOURCE_LANG)
      .eq('target_lang', lang)
      .in('source_text', SITE_STRINGS);
    if (error) throw error;
    const translated = (data || []).length;
    status[lang] = { total: totalStrings, translated };
  }
  return status;
}

async function handleRunSiteTranslations() {
  const myToken = renderToken;
  const btn = document.getElementById('siteTransRunBtn');
  const resultEl = document.getElementById('siteTransResult');
  if (!btn || !resultEl) return;

  btn.disabled = true;
  btn.textContent = 'Translating…';
  resultEl.innerHTML = '<p class="cms-site-trans-explain">Translating site text into German, French and Italian…</p>';

  try {
    let totalTranslated = 0;
    for (const lang of TARGET_LANGS) {
      const existing = new Set();
      const { data } = await supabase
        .from('translations')
        .select('source_text')
        .eq('source_lang', SOURCE_LANG)
        .eq('target_lang', lang)
        .in('source_text', SITE_STRINGS);
      (data || []).forEach((r) => existing.add(r.source_text));

      const missing = SITE_STRINGS.filter((s) => !existing.has(s));
      if (missing.length === 0) {
        resultEl.innerHTML = `<p class="cms-site-trans-explain">${lang.toUpperCase()}: already fully translated.</p>`;
        continue;
      }

      const translated = await translateStrings(missing, SOURCE_LANG, lang);
      // Verify translations actually persisted to DB
      const { data: verifyData } = await supabase
        .from('translations')
        .select('source_text')
        .eq('source_lang', SOURCE_LANG)
        .eq('target_lang', lang)
        .in('source_text', missing);
      const persisted = (verifyData || []).map((r) => r.source_text);
      const failed = missing.filter((s) => !persisted.includes(s));
      totalTranslated += persisted.length;
      if (failed.length > 0) {
        console.warn(`Site translation: ${failed.length} strings for ${lang.toUpperCase()} were not persisted`, failed);
      }
    }

    if (myToken !== renderToken) return;
    if (totalTranslated === 0) {
      resultEl.innerHTML = `<div class="cms-site-trans-error">No strings were persisted. Check the browser console for details — the translation service may be unavailable.</div>`;
    } else {
      resultEl.innerHTML = `<div class="cms-site-trans-success">✓ Translated ${totalTranslated} strings across all languages. Language switching is now instant on every page.</div>`;
    }
    btn.textContent = 'Re-run pre-translation';
    btn.disabled = false;

    const status = await getSiteTranslationStatus();
    if (myToken !== renderToken) return;
    document.querySelector('.cms-site-trans-card:nth-child(2)').innerHTML =
      '<div class="cms-site-trans-card-header"><h2>Translation status</h2></div>' + renderSiteTransStatusRows(status);
  } catch (err) {
    resultEl.innerHTML = `<div class="cms-site-trans-error">Translation failed: ${escapeHtml(err.message)}</div>`;
    btn.textContent = 'Translate site text now';
    btn.disabled = false;
  }
}

// ── Article translation helpers ──────────────────────────
function renderLangTab(lang) {
  const tr = editorState.translations[lang] || {};
  const hasTitle = tr.title != null;
  const hasBody = tr.body != null;
  const isDone = hasTitle && hasBody;
  return `<span class="cms-lang-tab ${isDone ? 'cms-lang-tab-done' : 'cms-lang-tab-pending'}">${lang.toUpperCase()} ${isDone
    ? '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>'
    : '<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v6"></path><circle cx="12\" cy=\"16.5\" r=\"0.5\" fill=\"currentColor\"></circle></svg>'}</span>`;
}

function renderTranslationRow(lang) {
  const tr = editorState.translations[lang] || {};
  const isDone = tr.title != null && tr.body != null;
  const statusText = isDone ? 'Translated' : 'Pending';
  const statusClass = isDone ? 'cms-tag-status-done' : 'cms-tag-status-pending';
  return `<div class="cms-tag-row">
    <span>${LANG_NATIVE[lang]}</span>
    <span class="cms-tag-status ${statusClass}">${statusText}</span>
    <button class="cms-retranslate-btn" id="retranslate-${lang}" style="margin-left:auto;padding:2px 10px;font-size:11px;border-radius:999px;border:1px solid var(--border-default);background:transparent;color:var(--text-muted);cursor:pointer">${isDone ? 'Re-translate' : 'Translate'}</button>
  </div>`;
}

async function handleTranslateNow(targetLang) {
  if (isTranslating || !editorState.id) return;
  const single = typeof targetLang === 'string';
  const langsToTranslate = single ? [targetLang] : TARGET_LANGS;

  if (!editorState.title || editorState.title.trim() === 'Untitled article') {
    alert('Please add a title before translating.');
    return;
  }

  isTranslating = true;
  setTranslateBtnState(true);
  setRetranslateButtonsDisabled(true);

  const sourceTexts = [
    editorState.title || '',
    editorState.excerpt || '',
    editorState.body || '',
  ];

  try {
    for (const lang of langsToTranslate) {
      const [tTitle, tExcerpt, tBody] = await translateStrings(sourceTexts, SOURCE_LANG, lang);
      editorState.translations[lang] = { title: tTitle, excerpt: tExcerpt, body: tBody };
    }

    const dbUpdates = {};
    let changedHash = '';
    const sourceHash = `${editorState.title}|${editorState.excerpt}|${editorState.body}`;
    for (const lang of TARGET_LANGS) {
      const tr = editorState.translations[lang];
      if (tr && tr.title != null) {
        dbUpdates[`title_${lang}`] = tr.title;
        dbUpdates[`excerpt_${lang}`] = tr.excerpt;
        dbUpdates[`body_${lang}`] = tr.body;
        changedHash = sourceHash;
      }
    }

    await saveArticleTranslations(editorState.id, dbUpdates, changedHash);
    renderEditorContent(document.getElementById('cmsMain'));
    showPanelToast('Translations saved.');
  } catch (err) {
    alert('Translation failed: ' + (err.message || err));
  } finally {
    isTranslating = false;
    setTranslateBtnState(false);
    setRetranslateButtonsDisabled(false);
  }
}

function setTranslateBtnState(translating) {
  const btn = document.getElementById('translateNowBtn');
  if (!btn) return;
  btn.textContent = translating ? 'Translating…' : 'Translate now';
  btn.disabled = translating;
  btn.classList.toggle('cms-translate-btn-busy', translating);
}

function setRetranslateButtonsDisabled(disabled) {
  document.querySelectorAll('.cms-retranslate-btn').forEach(b => { b.disabled = disabled; });
}

function showPanelToast(msg) {
  const existing = document.querySelector('.cms-panel-toast');
  if (existing) existing.remove();
  const toast = document.createElement('div');
  toast.className = 'cms-panel-toast';
  toast.textContent = msg;
  document.body.appendChild(toast);
  requestAnimationFrame(() => toast.classList.add('visible'));
  setTimeout(() => { toast.classList.remove('visible'); setTimeout(() => toast.remove(), 300); }, 2400);
}

// ── Helpers ───────────────────────────────────────────────
function escapeHtml(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}
function escapeAttr(str) {
  if (!str) return '';
  return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function formatDate(dateStr) {
  const d = new Date(dateStr);
  const now = new Date();
  const diff = (now - d) / 1000;
  if (diff < 60) return 'just now';
  if (diff < 3600) return Math.floor(diff / 60) + ' min ago';
  if (diff < 86400) return Math.floor(diff / 3600) + ' h ago';
  if (diff < 172800) return 'yesterday';
  return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short' });
}

init();
