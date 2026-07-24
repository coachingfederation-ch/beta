import{s as w}from"./supabase-client-Bm3kDcaW.js";import{c as Q,d as N,e as q,g as J,h as K,i as X,j as Y,k as tt,l as et,m as P,n as at,a as st,u as nt,o as F,s as it,p as lt}from"./cms-data-Ci2-emH-.js";const z="coachingfederation.ch";async function dt(){const t=`${window.location.origin}${window.location.pathname}`;await w.auth.signInWithOAuth({provider:"google",options:{redirectTo:t,queryParams:{hd:z}}})}async function ct(){await w.auth.signOut()}function O(t){return t?t.toLowerCase().endsWith(`@${z}`):!1}async function V(){var i,m;const{data:{session:t}}=await w.auth.getSession();if(!t)return null;const e=t.user,a=(e==null?void 0:e.email)||"";if(!O(a))return await w.auth.signOut(),null;const n=((i=e==null?void 0:e.user_metadata)==null?void 0:i.full_name)||((m=e==null?void 0:e.user_metadata)==null?void 0:m.name)||a.split("@")[0],l=n.split(" ").filter(Boolean).slice(0,2).map(c=>c[0].toUpperCase()).join("");return{email:a,name:n,initials:l||"ED",id:e.id}}function rt(t){return w.auth.onAuthStateChange((e,a)=>{(async()=>{var i;if(!a){t(null);return}const n=((i=a.user)==null?void 0:i.email)||"";if(!O(n)){await w.auth.signOut(),t(null);return}const l=await V();t(l)})()})}const M="coachingfederation.ch";let x=null,h="articles",o=null,v=[],A=[],E=[];const R=document.getElementById("cms-app");async function ot(){rt(e=>{x=e,$()}),x=await V(),$()}function $(){x?k():ut()}function ut(){R.innerHTML=`
    <div class="cms-login">
      <div class="cms-login-card">
        <img src="assets/logos/ICF_SwitzerlandCharterChapter_Horizontal_RGB_Positive.png" alt="ICF Switzerland">
        <h1>Insights CMS</h1>
        <p>Sign in with your @${M} Google account to manage blog articles.</p>
        <button id="googleSignIn" class="cms-google-btn">
          <svg viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1Z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"/><path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38Z"/></svg>
          Continue with Google
        </button>
        <div class="cms-login-domain-hint">Only @${M} accounts can access this editor.</div>
      </div>
    </div>`,document.getElementById("googleSignIn").addEventListener("click",()=>{dt()})}function k(){R.innerHTML=`
    <div class="cms-shell">
      ${pt()}
      <main class="cms-main" id="cmsMain"></main>
    </div>`,gt(),mt()}function pt(){const e=[{id:"articles",label:"Articles",icon:'<path d="M4 4h13a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3V4Z"></path><path d="M8 9h8M8 13h8M8 17h5"></path>'},{id:"editor",label:"Editor",icon:'<path d="M12 20h9"></path><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"></path>'},{id:"taxonomy",label:"Categories & Tags",icon:'<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0l-7-7V3h10.6l7 7a2 2 0 0 1 0 2.8Z"></path><circle cx="7.5" cy="7.5" r="1.3" fill="currentColor" stroke="none"></circle>'}].map(a=>`
    <button class="cms-nav-btn ${h===a.id?"active":""}" data-view="${a.id}">
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${a.icon}</svg>
      ${a.label}
    </button>`).join("");return`
    <aside class="cms-sidebar">
      <div class="cms-sidebar-header">
        <img src="assets/logos/ICF_SwitzerlandCharterChapter_Horizontal_RGB_Positive.png" alt="ICF Switzerland">
        <span style="display:flex;flex-direction:column">
          <span class="cms-title">Insights CMS</span>
          <span class="cms-sub">${M}</span>
        </span>
      </div>
      <nav class="cms-nav">
        ${e}
      </nav>
      <div class="cms-sidebar-footer">
        <span class="cms-avatar">${x.initials}</span>
        <span style="display:flex;flex-direction:column;min-width:0">
          <span class="cms-editor-name">${p(x.name)}</span>
          <span class="cms-editor-role">Chapter editor</span>
        </span>
        <button class="cms-logout-btn" id="cmsLogout" title="Sign out" aria-label="Sign out">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><path d="M16 17l5-5-5-5"></path><path d="M21 12H9"></path></svg>
        </button>
      </div>
    </aside>`}function gt(){document.querySelectorAll("[data-view]").forEach(e=>{e.addEventListener("click",()=>{const a=e.getAttribute("data-view");_(a==="editor"&&!o?"articles":a)})});const t=document.getElementById("cmsLogout");t&&t.addEventListener("click",()=>ct())}function _(t){h=t,k()}function mt(){const t=document.getElementById("cmsMain");t&&(h==="articles"?ht(t):h==="editor"?vt(t):h==="taxonomy"&&I(t))}async function ht(t){t.innerHTML='<div style="padding:40px;text-align:center;color:var(--text-muted)">Loading articles…</div>';try{v=await Q()}catch(a){t.innerHTML=`<div class="cms-empty"><h3>Could not load articles</h3><p>${p(a.message)}</p></div>`;return}const e={published:0,draft:0,scheduled:0};for(const a of v)e[a.status]!==void 0&&e[a.status]++;t.innerHTML=`
    <div class="cms-page-header">
      <div>
        <h1>Articles</h1>
        <p class="cms-subtitle">${v.length} articles · ${e.draft} drafts · ${e.scheduled} scheduled</p>
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
        ${L(v)}
      </div>
      <div class="cms-legend">
        <span class="cms-legend-swatch" style="background:var(--icf-cyan-100);border:1px solid var(--icf-cyan-300)"></span> AI-translated
        <span class="cms-legend-swatch cms-legend-gap" style="background:var(--neutral-100);border:1px solid var(--neutral-300)"></span> Pending
        <span class="cms-legend-swatch cms-legend-gap" style="background:var(--icf-indigo-600)"></span> Source language (EN)
      </div>
    </div>`,document.getElementById("newArticleBtn").addEventListener("click",U),document.getElementById("articleSearch").addEventListener("input",a=>{const n=a.target.value.toLowerCase(),l=v.filter(i=>i.title.toLowerCase().includes(n)||(i.author||"").toLowerCase().includes(n));document.getElementById("articlesTable").innerHTML=L(l),B()}),document.querySelectorAll("[data-filter]").forEach(a=>{a.addEventListener("click",()=>{document.querySelectorAll("[data-filter]").forEach(i=>i.classList.remove("active")),a.classList.add("active");const n=a.getAttribute("data-filter"),l=n==="all"?v:v.filter(i=>i.status===n);document.getElementById("articlesTable").innerHTML=L(l),B()})}),B()}function L(t){if(t.length===0)return'<div class="cms-empty"><h3>No articles found</h3><p>Create your first article to get started.</p></div>';const e=`
    <div class="cms-table-head">
      <span>Article</span><span>Category</span><span>Status</span><span>Translations</span><span>Updated</span>
    </div>`,a=t.map(n=>{var y;const l=`cms-status-${n.status}`,i=n.status.charAt(0).toUpperCase()+n.status.slice(1),m=n.updated_at?xt(n.updated_at):"",c=((y=n.category)==null?void 0:y.name)||"—";return`
      <div class="cms-table-row" data-id="${n.id}">
        <span style="display:flex;flex-direction:column;gap:3px;min-width:0">
          <span class="cms-article-title">${p(n.title)}</span>
          <span class="cms-article-author">by ${p(n.author)}</span>
        </span>
        <span class="cms-article-cat">${p(c)}</span>
        <span><span class="cms-status-badge ${l}"><span class="dot"></span>${i}</span></span>
        <span class="cms-lang-row">
          <span class="cms-lang-pill cms-lang-translated" title="German">DE</span>
          <span class="cms-lang-pill cms-lang-translated" title="French">FR</span>
          <span class="cms-lang-pill cms-lang-translated" title="Italian">IT</span>
          <span class="cms-lang-pill cms-lang-source" title="English source">EN</span>
        </span>
        <span class="cms-updated">${m}</span>
      </div>`}).join("");return e+a}function B(){document.querySelectorAll(".cms-table-row[data-id]").forEach(t=>{t.addEventListener("click",()=>{o=t.getAttribute("data-id"),h="editor",k()})})}async function U(){try{o=(await tt(x.id)).id,h="editor",k()}catch(t){alert("Could not create article: "+t.message)}}let s={title:"",slug:"",excerpt:"",body:"",author:"",status:"draft",category_id:null,featured_image_url:null,featured_image_alt:""},S=null,G=!1;async function vt(t){if(!o){t.innerHTML=`
      <div class="cms-empty" style="padding:120px 20px">
        <h3>No article selected</h3>
        <p>Choose an article from the list or create a new one.</p>
        <button class="cms-new-btn" style="margin-top:20px" id="newArticleBtn2">New article</button>
      </div>`,document.getElementById("newArticleBtn2").addEventListener("click",U);return}t.innerHTML='<div style="padding:40px;text-align:center;color:var(--text-muted)">Loading editor…</div>';try{const[e,a,n,l]=await Promise.all([at(o),N(),q(),st(o)]);if(A=a,E=n,!e){t.innerHTML='<div class="cms-empty"><h3>Article not found</h3></div>';return}s={id:e.id,title:e.title||"",slug:e.slug||"",excerpt:e.excerpt||"",body:e.body||"",author:e.author||"ICF Switzerland",status:e.status||"draft",category_id:e.category_id||null,featured_image_url:e.featured_image_url||null,featured_image_alt:e.featured_image_alt||"",tagIds:l.map(i=>i.id)},b(t)}catch(e){t.innerHTML=`<div class="cms-empty"><h3>Could not load article</h3><p>${p(e.message)}</p></div>`}}function b(t){const e=s.status==="published"?'<span class="cms-status-badge cms-status-published"><span class="dot"></span>Published</span>':s.status==="scheduled"?'<span class="cms-status-badge cms-status-scheduled"><span class="dot"></span>Scheduled</span>':'<span class="cms-status-badge cms-status-draft"><span class="dot"></span>Draft</span>',a=s.status==="published"?"Unpublish":"Publish";t.innerHTML=`
    <div class="cms-editor-topbar">
      <button class="cms-topbar-btn" id="backToArticles">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"></path></svg>
        Articles
      </button>
      ${e}
      <span class="cms-save-status" id="saveStatus">All changes saved</span>
      <div style="margin-left:auto;display:flex;align-items:center;gap:10px">
        <button class="cms-topbar-btn" id="deleteBtn" style="color:var(--red-600);border-color:var(--red-100)">Delete</button>
        <button class="cms-topbar-publish" id="publishBtn">${a}</button>
      </div>
    </div>
    <div class="cms-editor-body">
      <div class="cms-canvas">
        <div class="cms-canvas-inner">
          <div class="cms-lang-tabs">
            <span class="cms-lang-tab cms-lang-tab-source">EN · Source</span>
            <span class="cms-lang-tab cms-lang-tab-done">DE <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg></span>
            <span class="cms-lang-tab cms-lang-tab-done">FR <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg></span>
            <span class="cms-lang-tab cms-lang-tab-done">IT <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg></span>
            <span class="cms-lang-tabs-hint">Write once — AI translates the rest</span>
          </div>
          <input type="text" class="cms-title-input" id="titleInput" value="${f(s.title)}" placeholder="Article title">
          <textarea class="cms-excerpt-input" id="excerptInput" rows="2" placeholder="Lead paragraph — a short summary that appears under the headline and in article cards.">${p(s.excerpt)}</textarea>
          <div class="cms-featured-drop ${s.featured_image_url?"has-image":""}" id="featuredDrop">
            ${s.featured_image_url?`<img src="${f(s.featured_image_url)}" alt="">`:""}
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
          <div class="cms-body-editor" id="bodyEditor" contenteditable="true">${s.body||"<p>Start writing your article here…</p>"}</div>
        </div>
      </div>
      ${ft()}
    </div>`,yt()}function ft(){const t=A.map(l=>`<option value="${l.id}" ${s.category_id===l.id?"selected":""}>${p(l.name)}</option>`).join(""),e=new Set(s.tagIds||[]),a=E.filter(l=>e.has(l.id)).map(l=>`<span class="cms-tag-chip">${p(l.name)} <button data-tag-remove="${l.id}">×</button></span>`).join(""),n=E.filter(l=>!e.has(l.id)).map(l=>`<span class="cms-tag-cloud-item" data-tag-add="${l.id}">${p(l.name)} +</span>`).join("");return`
    <aside class="cms-settings-panel">
      <section class="cms-panel-section">
        <h3>Translations</h3>
        <div class="cms-tag-row">
          <span>Deutsch</span>
          <span class="cms-tag-status"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Auto-translated</span>
        </div>
        <div class="cms-tag-row">
          <span>Français</span>
          <span class="cms-tag-status"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Auto-translated</span>
        </div>
        <div class="cms-tag-row">
          <span>Italiano</span>
          <span class="cms-tag-status"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>Auto-translated</span>
        </div>
        <p style="font-size:12px;color:var(--text-muted);line-height:1.55;margin:10px 2px 0">Translations update automatically when the article is published. Visitors see the translated version based on their language choice.</p>
      </section>
      <section class="cms-panel-section">
        <h3>Publishing</h3>
        <div class="cms-field">
          <label>Category</label>
          <select id="categorySelect">
            <option value="">No category</option>
            ${t}
          </select>
        </div>
        <div class="cms-field">
          <label>Author</label>
          <input type="text" id="authorInput" value="${f(s.author)}">
        </div>
        <div class="cms-field">
          <label>Permalink</label>
          <div class="cms-slug-field">
            <span class="cms-slug-prefix">article.html?slug=</span>
            <input type="text" id="slugInput" value="${f(s.slug)}">
          </div>
          <div class="cms-permalink-display">
            <a href="article.html?slug=${f(s.slug)}" target="_blank">View article →</a>
          </div>
        </div>
        <div class="cms-field">
          <label>Featured image alt text</label>
          <input type="text" id="altInput" value="${f(s.featured_image_alt)}" placeholder="Describe the image for accessibility">
        </div>
      </section>
      <section class="cms-panel-section">
        <h3>Tags</h3>
        <div class="cms-tag-list" id="tagChips">${a||'<span style="font-size:12px;color:var(--text-muted)">No tags assigned</span>'}</div>
        <div class="cms-tag-cloud" id="tagCloud">${n||'<span style="font-size:12px;color:var(--text-muted)">All tags assigned</span>'}</div>
        <div style="margin-top:12px">
          <input type="text" class="cms-tag-add-input" id="newTagInput" placeholder="Add a new tag…">
        </div>
      </section>
    </aside>`}function yt(){document.getElementById("backToArticles").addEventListener("click",()=>{o=null,h="articles",k()});const t=document.getElementById("titleInput"),e=document.getElementById("excerptInput"),a=document.getElementById("bodyEditor"),n=document.getElementById("authorInput"),l=document.getElementById("slugInput"),i=document.getElementById("categorySelect"),m=document.getElementById("altInput");t.addEventListener("input",()=>{s.title=t.value,g()}),e.addEventListener("input",()=>{s.excerpt=e.value,g()}),a.addEventListener("input",()=>{s.body=a.innerHTML,g()}),n.addEventListener("input",()=>{s.author=n.value,g()}),l.addEventListener("input",()=>{s.slug=l.value,g()}),i.addEventListener("change",()=>{s.category_id=i.value||null,g()}),m.addEventListener("input",()=>{s.featured_image_alt=m.value,g()}),document.querySelectorAll("[data-cmd]").forEach(d=>{d.addEventListener("click",r=>{r.preventDefault(),document.execCommand(d.getAttribute("data-cmd"),!1,null),a.focus(),s.body=a.innerHTML,g()})}),document.querySelectorAll("[data-block]").forEach(d=>{d.addEventListener("click",r=>{r.preventDefault();const u=d.getAttribute("data-block");u==="h2"||u==="h3"||u==="p"?document.execCommand("formatBlock",!1,u):u==="blockquote"?document.execCommand("formatBlock",!1,"blockquote"):u==="ul"?document.execCommand("insertUnorderedList",!1,null):u==="ol"&&document.execCommand("insertOrderedList",!1,null),a.focus(),s.body=a.innerHTML,g()})});const c=document.getElementById("featuredDrop"),y=document.getElementById("featuredFileInput"),T=document.getElementById("featuredRemove");c.addEventListener("click",d=>{d.target!==T&&y.click()}),c.addEventListener("dragover",d=>{d.preventDefault(),c.classList.add("dragging")}),c.addEventListener("dragleave",()=>c.classList.remove("dragging")),c.addEventListener("drop",d=>{d.preventDefault(),c.classList.remove("dragging");const r=d.dataTransfer.files[0];r&&r.type.startsWith("image/")&&H(r)}),y.addEventListener("change",()=>{const d=y.files[0];d&&H(d)}),T.addEventListener("click",d=>{d.stopPropagation(),s.featured_image_url=null,c.classList.remove("has-image");const r=c.querySelector("img");r&&r.remove(),g()}),document.querySelectorAll("[data-tag-add]").forEach(d=>{d.addEventListener("click",()=>{const r=d.getAttribute("data-tag-add");s.tagIds=[...s.tagIds||[],r],b(document.getElementById("cmsMain"))})}),document.querySelectorAll("[data-tag-remove]").forEach(d=>{d.addEventListener("click",r=>{r.stopPropagation();const u=d.getAttribute("data-tag-remove");s.tagIds=(s.tagIds||[]).filter(Z=>Z!==u),b(document.getElementById("cmsMain"))})});const C=document.getElementById("newTagInput");C&&C.addEventListener("keydown",async d=>{if(d.key==="Enter"){d.preventDefault();const r=C.value.trim();if(!r)return;try{const u=await P(r);E.push(u),s.tagIds=[...s.tagIds||[],u.id],b(document.getElementById("cmsMain"))}catch(u){alert("Could not create tag: "+u.message)}}}),document.getElementById("publishBtn").addEventListener("click",bt),document.getElementById("deleteBtn").addEventListener("click",wt)}async function H(t){const e=document.getElementById("featuredDrop");e.innerHTML='<span style="color:var(--text-muted);font-size:14px">Uploading…</span>';try{const a=await nt(t);s.featured_image_url=a,e.classList.add("has-image"),e.innerHTML=`<img src="${f(a)}" alt=""><button class="cms-featured-remove" id="featuredRemove">Remove image</button><input type="file" id="featuredFileInput" accept="image/*" style="display:none">`,document.getElementById("featuredRemove").addEventListener("click",n=>{var l;n.stopPropagation(),s.featured_image_url=null,e.classList.remove("has-image"),(l=e.querySelector("img"))==null||l.remove(),g()}),g()}catch(a){alert("Upload failed: "+a.message),b(document.getElementById("cmsMain"))}}function g(){G=!0;const t=document.getElementById("saveStatus");t&&(t.textContent="Saving…",t.className="cms-save-status dirty"),clearTimeout(S),S=setTimeout(W,1500)}async function W(){if(o)try{await F(o,{title:s.title,slug:s.slug,excerpt:s.excerpt,body:s.body,author:s.author,category_id:s.category_id,featured_image_url:s.featured_image_url,featured_image_alt:s.featured_image_alt}),s.tagIds&&await it(o,s.tagIds),G=!1;const t=document.getElementById("saveStatus");t&&(t.textContent="All changes saved",t.className="cms-save-status saved")}catch(t){const e=document.getElementById("saveStatus");e&&(e.textContent="Save failed: "+t.message,e.className="cms-save-status dirty")}}async function bt(){if(!o)return;const t=s.status==="published"?"draft":"published",e={status:t,published_at:t==="published"?new Date().toISOString():null};try{await W();const a=await F(o,e);s.status=t,b(document.getElementById("cmsMain"))}catch(a){alert("Could not change publish status: "+a.message)}}async function wt(){if(o&&confirm("Delete this article? This cannot be undone."))try{await lt(o),o=null,h="articles",k()}catch(t){alert("Could not delete: "+t.message)}}async function I(t){t.innerHTML='<div style="padding:40px;text-align:center;color:var(--text-muted)">Loading…</div>';try{const[e,a,n,l]=await Promise.all([N(),q(),J(),K()]);A=e,E=a,t.innerHTML=`
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
            ${e.map(i=>`
              <div class="cms-tax-item">
                <span class="cms-tax-item-name">${p(i.name)}</span>
                <div style="display:flex;align-items:center;gap:12px">
                  <span class="cms-tax-item-count">${n[i.id]||0} articles</span>
                  <button class="cms-tax-item-delete" data-cat-del="${i.id}" title="Delete">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path></svg>
                  </button>
                </div>
              </div>`).join("")}
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
            ${a.map(i=>`
              <span class="cms-tag-cloud-item">
                ${p(i.name)} · ${l[i.id]||0}
                <button class="cms-tax-item-delete" data-tag-del="${i.id}" title="Delete" style="background:none;border:none;cursor:pointer;padding:0 0 0 4px">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"></path></svg>
                </button>
              </span>`).join("")||'<span style="font-size:13px;color:var(--text-muted)">No tags yet</span>'}
          </div>
        </div>
      </div>`,document.getElementById("addCatBtn").addEventListener("click",D),document.getElementById("newCatInput").addEventListener("keydown",i=>{i.key==="Enter"&&D()}),document.getElementById("addTagBtn").addEventListener("click",j),document.getElementById("newTagInput2").addEventListener("keydown",i=>{i.key==="Enter"&&j()}),document.querySelectorAll("[data-cat-del]").forEach(i=>{i.addEventListener("click",async()=>{const m=i.getAttribute("data-cat-del");try{await X(m),I(t)}catch(c){alert("Could not delete category: "+c.message)}})}),document.querySelectorAll("[data-tag-del]").forEach(i=>{i.addEventListener("click",async()=>{const m=i.getAttribute("data-tag-del");try{await Y(m),I(t)}catch(c){alert("Could not delete tag: "+c.message)}})})}catch(e){t.innerHTML=`<div class="cms-empty"><h3>Could not load</h3><p>${p(e.message)}</p></div>`}}async function D(){const t=document.getElementById("newCatInput"),e=t.value.trim();if(e)try{await et(e),t.value="",I(document.getElementById("cmsMain"))}catch(a){alert("Could not add category: "+a.message)}}async function j(){const t=document.getElementById("newTagInput2"),e=t.value.trim();if(e)try{await P(e),t.value="",I(document.getElementById("cmsMain"))}catch(a){alert("Could not add tag: "+a.message)}}function p(t){return t?String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):""}function f(t){return t?String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function xt(t){const e=new Date(t),n=(new Date-e)/1e3;return n<60?"just now":n<3600?Math.floor(n/60)+" min ago":n<86400?Math.floor(n/3600)+" h ago":n<172800?"yesterday":e.toLocaleDateString("en-GB",{day:"numeric",month:"short"})}ot();
