import{s as x,t as st,S as nt}from"./i18n-BbZBq89F.js";import{c as it,d as U,e as G,g as lt,h as rt,i as ct,j as ot,k as dt,m as ut,n as Z,o as mt,a as pt,u as gt,p as W,s as ht,q as vt,r as ft}from"./cms-data-De5lQQyV.js";const Q="coachingfederation.ch";async function yt(){const t=`${window.location.origin}${window.location.pathname}`;await x.auth.signInWithOAuth({provider:"google",options:{redirectTo:t,queryParams:{hd:Q}}})}async function bt(){await x.auth.signOut()}function J(t){return t?t.toLowerCase().endsWith(`@${Q}`):!1}async function K(){var l,p;const{data:{session:t}}=await x.auth.getSession();if(!t)return null;const e=t.user,a=(e==null?void 0:e.email)||"";if(!J(a))return await x.auth.signOut(),null;const i=((l=e==null?void 0:e.user_metadata)==null?void 0:l.full_name)||((p=e==null?void 0:e.user_metadata)==null?void 0:p.name)||a.split("@")[0],n=i.split(" ").filter(Boolean).slice(0,2).map(c=>c[0].toUpperCase()).join("");return{email:a,name:i,initials:n||"ED",id:e.id}}function xt(t){return x.auth.onAuthStateChange((e,a)=>{(async()=>{var l;if(!a){t(null);return}const i=((l=a.user)==null?void 0:l.email)||"";if(!J(i)){await x.auth.signOut(),t(null);return}const n=await K();t(n)})()})}const _=["de","fr","it"],wt={de:"Deutsch",fr:"Français",it:"Italiano"},S="coachingfederation.ch";let w=null,v="articles",d=null,f=[],H=[],k=[];const X=document.getElementById("cms-app");async function Et(){xt(e=>{w=e,N()}),w=await K(),N()}function N(){w?E():It()}function It(){X.innerHTML=`
    <div class="cms-login">
      <div class="cms-login-card">
        <img src="assets/logos/ICF_SwitzerlandCharterChapter_Horizontal_RGB_Positive.png" alt="ICF Switzerland">
        <h1>Insights CMS</h1>
        <p>Sign in with your @${S} Google account to manage blog articles.</p>
        <button id="googleSignIn" class="cms-google-btn">
          <svg viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1Z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"/><path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38Z"/></svg>
          Continue with Google
        </button>
        <div class="cms-login-domain-hint">Only @${S} accounts can access this editor.</div>
      </div>
    </div>`,document.getElementById("googleSignIn").addEventListener("click",()=>{yt()})}function E(){X.innerHTML=`
    <div class="cms-shell">
      ${kt()}
      <main class="cms-main" id="cmsMain"></main>
    </div>`,Ct(),Bt()}function kt(){const e=[{id:"articles",label:"Articles",icon:'<path d="M4 4h13a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3V4Z"></path><path d="M8 9h8M8 13h8M8 17h5"></path>'},{id:"editor",label:"Editor",icon:'<path d="M12 20h9"></path><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"></path>'},{id:"taxonomy",label:"Categories & Tags",icon:'<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0l-7-7V3h10.6l7 7a2 2 0 0 1 0 2.8Z"></path><circle cx="7.5" cy="7.5" r="1.3" fill="currentColor" stroke="none"></circle>'}].map(a=>`
    <button class="cms-nav-btn ${v===a.id?"active":""}" data-view="${a.id}">
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${a.icon}</svg>
      ${a.label}
    </button>`).join("");return`
    <aside class="cms-sidebar">
      <div class="cms-sidebar-header">
        <img src="assets/logos/ICF_SwitzerlandCharterChapter_Horizontal_RGB_Positive.png" alt="ICF Switzerland">
        <span style="display:flex;flex-direction:column">
          <span class="cms-title">Insights CMS</span>
          <span class="cms-sub">${S}</span>
        </span>
      </div>
      <nav class="cms-nav">
        ${e}
      </nav>
      <div class="cms-sidebar-footer">
        <span class="cms-avatar">${w.initials}</span>
        <span style="display:flex;flex-direction:column;min-width:0">
          <span class="cms-editor-name">${g(w.name)}</span>
          <span class="cms-editor-role">Chapter editor</span>
        </span>
        <button class="cms-logout-btn" id="cmsLogout" title="Sign out" aria-label="Sign out">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><path d="M16 17l5-5-5-5"></path><path d="M21 12H9"></path></svg>
        </button>
      </div>
    </aside>`}function Ct(){document.querySelectorAll("[data-view]").forEach(e=>{e.addEventListener("click",()=>{const a=e.getAttribute("data-view");q(a==="editor"&&!d?"articles":a)})});const t=document.getElementById("cmsLogout");t&&t.addEventListener("click",()=>bt())}function q(t){v=t,E()}function Bt(){const t=document.getElementById("cmsMain");t&&(v==="articles"?Lt(t):v==="editor"?Tt(t):v==="taxonomy"&&C(t))}async function Lt(t){t.innerHTML='<div style="padding:40px;text-align:center;color:var(--text-muted)">Loading articles…</div>';try{f=await it()}catch(a){t.innerHTML=`<div class="cms-empty"><h3>Could not load articles</h3><p>${g(a.message)}</p></div>`;return}const e={published:0,draft:0,scheduled:0};for(const a of f)e[a.status]!==void 0&&e[a.status]++;t.innerHTML=`
    <div class="cms-page-header">
      <div>
        <h1>Articles</h1>
        <p class="cms-subtitle">${f.length} articles · ${e.draft} drafts · ${e.scheduled} scheduled</p>
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
        ${T(f)}
      </div>
      <div class="cms-legend">
        <span class="cms-legend-swatch" style="background:var(--icf-cyan-100);border:1px solid var(--icf-cyan-300)"></span> AI-translated
        <span class="cms-legend-swatch cms-legend-gap" style="background:var(--neutral-100);border:1px solid var(--neutral-300)"></span> Pending
        <span class="cms-legend-swatch cms-legend-gap" style="background:var(--icf-indigo-600)"></span> Source language (EN)
      </div>
    </div>`,document.getElementById("newArticleBtn").addEventListener("click",Y),document.getElementById("articleSearch").addEventListener("input",a=>{const i=a.target.value.toLowerCase(),n=f.filter(l=>l.title.toLowerCase().includes(i)||(l.author||"").toLowerCase().includes(i));document.getElementById("articlesTable").innerHTML=T(n),$()}),document.querySelectorAll("[data-filter]").forEach(a=>{a.addEventListener("click",()=>{document.querySelectorAll("[data-filter]").forEach(l=>l.classList.remove("active")),a.classList.add("active");const i=a.getAttribute("data-filter"),n=i==="all"?f:f.filter(l=>l.status===i);document.getElementById("articlesTable").innerHTML=T(n),$()})}),$()}function T(t){if(t.length===0)return'<div class="cms-empty"><h3>No articles found</h3><p>Create your first article to get started.</p></div>';const e=`
    <div class="cms-table-head">
      <span>Article</span><span>Category</span><span>Status</span><span>Translations</span><span>Updated</span>
    </div>`,a=t.map(i=>{var u;const n=`cms-status-${i.status}`,l=i.status.charAt(0).toUpperCase()+i.status.slice(1),p=i.updated_at?Ht(i.updated_at):"",c=((u=i.category)==null?void 0:u.name)||"—";return`
      <div class="cms-table-row" data-id="${i.id}">
        <span style="display:flex;flex-direction:column;gap:3px;min-width:0">
          <span class="cms-article-title">${g(i.title)}</span>
          <span class="cms-article-author">by ${g(i.author)}</span>
        </span>
        <span class="cms-article-cat">${g(c)}</span>
        <span><span class="cms-status-badge ${n}"><span class="dot"></span>${l}</span></span>
        <span class="cms-lang-row">
          <span class="cms-lang-pill cms-lang-translated" title="German">DE</span>
          <span class="cms-lang-pill cms-lang-translated" title="French">FR</span>
          <span class="cms-lang-pill cms-lang-translated" title="Italian">IT</span>
          <span class="cms-lang-pill cms-lang-source" title="English source">EN</span>
        </span>
        <span class="cms-updated">${p}</span>
      </div>`}).join("");return e+a}function $(){document.querySelectorAll(".cms-table-row[data-id]").forEach(t=>{t.addEventListener("click",()=>{d=t.getAttribute("data-id"),v="editor",E()})})}async function Y(){try{d=(await dt(w.id)).id,v="editor",E()}catch(t){alert("Could not create article: "+t.message)}}let s={title:"",slug:"",excerpt:"",body:"",author:"",status:"draft",category_id:null,featured_image_url:null,featured_image_alt:"",translations:{}},P=null,tt=!1,L=!1;async function Tt(t){if(!d){t.innerHTML=`
      <div class="cms-empty" style="padding:120px 20px">
        <h3>No article selected</h3>
        <p>Choose an article from the list or create a new one.</p>
        <button class="cms-new-btn" style="margin-top:20px" id="newArticleBtn2">New article</button>
      </div>`,document.getElementById("newArticleBtn2").addEventListener("click",Y);return}t.innerHTML='<div style="padding:40px;text-align:center;color:var(--text-muted)">Loading editor…</div>';try{const[e,a,i,n]=await Promise.all([mt(d),U(),G(),pt(d)]);if(H=a,k=i,!e){t.innerHTML='<div class="cms-empty"><h3>Article not found</h3></div>';return}s={id:e.id,title:e.title||"",slug:e.slug||"",excerpt:e.excerpt||"",body:e.body||"",author:e.author||"ICF Switzerland",status:e.status||"draft",category_id:e.category_id||null,featured_image_url:e.featured_image_url||null,featured_image_alt:e.featured_image_alt||"",tagIds:n.map(l=>l.id),translations:{de:{title:e.title_de||null,excerpt:e.excerpt_de||null,body:e.body_de||null},fr:{title:e.title_fr||null,excerpt:e.excerpt_fr||null,body:e.body_fr||null},it:{title:e.title_it||null,excerpt:e.excerpt_it||null,body:e.body_it||null}}},b(t)}catch(e){t.innerHTML=`<div class="cms-empty"><h3>Could not load article</h3><p>${g(e.message)}</p></div>`}}function b(t){const e=s.status==="published"?'<span class="cms-status-badge cms-status-published"><span class="dot"></span>Published</span>':s.status==="scheduled"?'<span class="cms-status-badge cms-status-scheduled"><span class="dot"></span>Scheduled</span>':'<span class="cms-status-badge cms-status-draft"><span class="dot"></span>Draft</span>',a=s.status==="published"?"Unpublish":"Publish";t.innerHTML=`
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
            ${A("de")}
            ${A("fr")}
            ${A("it")}
            <span class="cms-lang-tabs-hint">Click “Translate now” in the panel to generate translations</span>
          </div>
          <input type="text" class="cms-title-input" id="titleInput" value="${y(s.title)}" placeholder="Article title">
          <textarea class="cms-excerpt-input" id="excerptInput" rows="2" placeholder="Lead paragraph — a short summary that appears under the headline and in article cards.">${g(s.excerpt)}</textarea>
          <div class="cms-featured-drop ${s.featured_image_url?"has-image":""}" id="featuredDrop">
            ${s.featured_image_url?`<img src="${y(s.featured_image_url)}" alt="">`:""}
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
      ${$t()}
    </div>`,At()}function $t(){const t=H.map(n=>`<option value="${n.id}" ${s.category_id===n.id?"selected":""}>${g(n.name)}</option>`).join(""),e=new Set(s.tagIds||[]),a=k.filter(n=>e.has(n.id)).map(n=>`<span class="cms-tag-chip">${g(n.name)} <button data-tag-remove="${n.id}">×</button></span>`).join(""),i=k.filter(n=>!e.has(n.id)).map(n=>`<span class="cms-tag-cloud-item" data-tag-add="${n.id}">${g(n.name)} +</span>`).join("");return`
    <aside class="cms-settings-panel">
      <section class="cms-panel-section">
        <h3>Translations</h3>
        <button class="cms-translate-btn" id="translateNowBtn">${L?"Translating…":"Translate now"}</button>
        ${M("de")}
        ${M("fr")}
        ${M("it")}
        <p style="font-size:12px;color:var(--text-muted);line-height:1.55;margin:10px 2px 0">Click “Translate now” to generate all three translations at once. Visitors see the stored version for their language — no live translation needed on page load.</p>
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
          <input type="text" id="authorInput" value="${y(s.author)}">
        </div>
        <div class="cms-field">
          <label>Permalink</label>
          <div class="cms-slug-field">
            <span class="cms-slug-prefix">article.html?slug=</span>
            <input type="text" id="slugInput" value="${y(s.slug)}">
          </div>
          <div class="cms-permalink-display">
            <a href="article.html?slug=${y(s.slug)}" target="_blank">View article →</a>
          </div>
        </div>
        <div class="cms-field">
          <label>Featured image alt text</label>
          <input type="text" id="altInput" value="${y(s.featured_image_alt)}" placeholder="Describe the image for accessibility">
        </div>
      </section>
      <section class="cms-panel-section">
        <h3>Tags</h3>
        <div class="cms-tag-list" id="tagChips">${a||'<span style="font-size:12px;color:var(--text-muted)">No tags assigned</span>'}</div>
        <div class="cms-tag-cloud" id="tagCloud">${i||'<span style="font-size:12px;color:var(--text-muted)">All tags assigned</span>'}</div>
        <div style="margin-top:12px">
          <input type="text" class="cms-tag-add-input" id="newTagInput" placeholder="Add a new tag…">
        </div>
      </section>
    </aside>`}function At(){document.getElementById("backToArticles").addEventListener("click",()=>{d=null,v="articles",E()});const t=document.getElementById("titleInput"),e=document.getElementById("excerptInput"),a=document.getElementById("bodyEditor"),i=document.getElementById("authorInput"),n=document.getElementById("slugInput"),l=document.getElementById("categorySelect"),p=document.getElementById("altInput");t.addEventListener("input",()=>{s.title=t.value,h()}),e.addEventListener("input",()=>{s.excerpt=e.value,h()}),a.addEventListener("input",()=>{s.body=a.innerHTML,h()}),i.addEventListener("input",()=>{s.author=i.value,h()}),n.addEventListener("input",()=>{s.slug=n.value,h()}),l.addEventListener("change",()=>{s.category_id=l.value||null,h()}),p.addEventListener("input",()=>{s.featured_image_alt=p.value,h()}),document.querySelectorAll("[data-cmd]").forEach(r=>{r.addEventListener("click",o=>{o.preventDefault(),document.execCommand(r.getAttribute("data-cmd"),!1,null),a.focus(),s.body=a.innerHTML,h()})}),document.querySelectorAll("[data-block]").forEach(r=>{r.addEventListener("click",o=>{o.preventDefault();const m=r.getAttribute("data-block");m==="h2"||m==="h3"||m==="p"?document.execCommand("formatBlock",!1,m):m==="blockquote"?document.execCommand("formatBlock",!1,"blockquote"):m==="ul"?document.execCommand("insertUnorderedList",!1,null):m==="ol"&&document.execCommand("insertOrderedList",!1,null),a.focus(),s.body=a.innerHTML,h()})});const c=document.getElementById("featuredDrop"),u=document.getElementById("featuredFileInput"),B=document.getElementById("featuredRemove");c.addEventListener("click",r=>{r.target!==B&&u.click()}),c.addEventListener("dragover",r=>{r.preventDefault(),c.classList.add("dragging")}),c.addEventListener("dragleave",()=>c.classList.remove("dragging")),c.addEventListener("drop",r=>{r.preventDefault(),c.classList.remove("dragging");const o=r.dataTransfer.files[0];o&&o.type.startsWith("image/")&&F(o)}),u.addEventListener("change",()=>{const r=u.files[0];r&&F(r)}),B.addEventListener("click",r=>{r.stopPropagation(),s.featured_image_url=null,c.classList.remove("has-image");const o=c.querySelector("img");o&&o.remove(),h()}),document.querySelectorAll("[data-tag-add]").forEach(r=>{r.addEventListener("click",()=>{const o=r.getAttribute("data-tag-add");s.tagIds=[...s.tagIds||[],o],b(document.getElementById("cmsMain"))})}),document.querySelectorAll("[data-tag-remove]").forEach(r=>{r.addEventListener("click",o=>{o.stopPropagation();const m=r.getAttribute("data-tag-remove");s.tagIds=(s.tagIds||[]).filter(at=>at!==m),b(document.getElementById("cmsMain"))})});const I=document.getElementById("newTagInput");I&&I.addEventListener("keydown",async r=>{if(r.key==="Enter"){r.preventDefault();const o=I.value.trim();if(!o)return;try{const m=await Z(o);k.push(m),s.tagIds=[...s.tagIds||[],m.id],b(document.getElementById("cmsMain"))}catch(m){alert("Could not create tag: "+m.message)}}}),document.getElementById("publishBtn").addEventListener("click",Mt),document.getElementById("deleteBtn").addEventListener("click",_t);const D=document.getElementById("translateNowBtn");D&&D.addEventListener("click",R),_.forEach(r=>{const o=document.getElementById(`retranslate-${r}`);o&&o.addEventListener("click",()=>R(r))})}async function F(t){const e=document.getElementById("featuredDrop");e.innerHTML='<span style="color:var(--text-muted);font-size:14px">Uploading…</span>';try{const a=await gt(t);s.featured_image_url=a,e.classList.add("has-image"),e.innerHTML=`<img src="${y(a)}" alt=""><button class="cms-featured-remove" id="featuredRemove">Remove image</button><input type="file" id="featuredFileInput" accept="image/*" style="display:none">`,document.getElementById("featuredRemove").addEventListener("click",i=>{var n;i.stopPropagation(),s.featured_image_url=null,e.classList.remove("has-image"),(n=e.querySelector("img"))==null||n.remove(),h()}),h()}catch(a){alert("Upload failed: "+a.message),b(document.getElementById("cmsMain"))}}function h(){tt=!0;const t=document.getElementById("saveStatus");t&&(t.textContent="Saving…",t.className="cms-save-status dirty"),clearTimeout(P),P=setTimeout(et,1500)}async function et(){if(d)try{await W(d,{title:s.title,slug:s.slug,excerpt:s.excerpt,body:s.body,author:s.author,category_id:s.category_id,featured_image_url:s.featured_image_url,featured_image_alt:s.featured_image_alt}),s.tagIds&&await ht(d,s.tagIds),tt=!1;const t=document.getElementById("saveStatus");t&&(t.textContent="All changes saved",t.className="cms-save-status saved")}catch(t){const e=document.getElementById("saveStatus");e&&(e.textContent="Save failed: "+t.message,e.className="cms-save-status dirty")}}async function Mt(){if(!d)return;const t=s.status==="published"?"draft":"published",e={status:t,published_at:t==="published"?new Date().toISOString():null};try{await et();const a=await W(d,e);s.status=t,b(document.getElementById("cmsMain"))}catch(a){alert("Could not change publish status: "+a.message)}}async function _t(){if(d&&confirm("Delete this article? This cannot be undone."))try{await vt(d),d=null,v="articles",E()}catch(t){alert("Could not delete: "+t.message)}}async function C(t){t.innerHTML='<div style="padding:40px;text-align:center;color:var(--text-muted)">Loading…</div>';try{const[e,a,i,n]=await Promise.all([U(),G(),lt(),rt()]);H=e,k=a,t.innerHTML=`
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
            ${e.map(l=>`
              <div class="cms-tax-item">
                <span class="cms-tax-item-name">${g(l.name)}</span>
                <div style="display:flex;align-items:center;gap:12px">
                  <span class="cms-tax-item-count">${i[l.id]||0} articles</span>
                  <button class="cms-tax-item-delete" data-cat-del="${l.id}" title="Delete">
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
            ${a.map(l=>`
              <span class="cms-tag-cloud-item">
                ${g(l.name)} · ${n[l.id]||0}
                <button class="cms-tax-item-delete" data-tag-del="${l.id}" title="Delete" style="background:none;border:none;cursor:pointer;padding:0 0 0 4px">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"></path></svg>
                </button>
              </span>`).join("")||'<span style="font-size:13px;color:var(--text-muted)">No tags yet</span>'}
          </div>
        </div>
      </div>`,document.getElementById("addCatBtn").addEventListener("click",j),document.getElementById("newCatInput").addEventListener("keydown",l=>{l.key==="Enter"&&j()}),document.getElementById("addTagBtn").addEventListener("click",z),document.getElementById("newTagInput2").addEventListener("keydown",l=>{l.key==="Enter"&&z()}),document.querySelectorAll("[data-cat-del]").forEach(l=>{l.addEventListener("click",async()=>{const p=l.getAttribute("data-cat-del");try{await ct(p),C(t)}catch(c){alert("Could not delete category: "+c.message)}})}),document.querySelectorAll("[data-tag-del]").forEach(l=>{l.addEventListener("click",async()=>{const p=l.getAttribute("data-tag-del");try{await ot(p),C(t)}catch(c){alert("Could not delete tag: "+c.message)}})})}catch(e){t.innerHTML=`<div class="cms-empty"><h3>Could not load</h3><p>${g(e.message)}</p></div>`}}async function j(){const t=document.getElementById("newCatInput"),e=t.value.trim();if(e)try{await ut(e),t.value="",C(document.getElementById("cmsMain"))}catch(a){alert("Could not add category: "+a.message)}}async function z(){const t=document.getElementById("newTagInput2"),e=t.value.trim();if(e)try{await Z(e),t.value="",C(document.getElementById("cmsMain"))}catch(a){alert("Could not add tag: "+a.message)}}function A(t){const e=s.translations[t]||{},a=e.title!=null,i=e.body!=null,n=a&&i;return`<span class="cms-lang-tab ${n?"cms-lang-tab-done":"cms-lang-tab-pending"}">${t.toUpperCase()} ${n?'<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>':'<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v6"></path><circle cx="12" cy="16.5" r="0.5" fill="currentColor"></circle></svg>'}</span>`}function M(t){const e=s.translations[t]||{},a=e.title!=null&&e.body!=null,i=a?"Translated":"Pending",n=a?"cms-tag-status-done":"cms-tag-status-pending";return`<div class="cms-tag-row">
    <span>${wt[t]}</span>
    <span class="cms-tag-status ${n}">${i}</span>
    <button class="cms-retranslate-btn" id="retranslate-${t}" style="margin-left:auto;padding:2px 10px;font-size:11px;border-radius:999px;border:1px solid var(--border-default);background:transparent;color:var(--text-muted);cursor:pointer">${a?"Re-translate":"Translate"}</button>
  </div>`}async function R(t){if(L||!s.id)return;const a=typeof t=="string"?[t]:_;if(!s.title||s.title.trim()==="Untitled article"){alert("Please add a title before translating.");return}L=!0,O(!0),V(!0);const i=[s.title||"",s.excerpt||"",s.body||""];try{for(const c of a){const[u,B,I]=await st(i,nt,c);s.translations[c]={title:u,excerpt:B,body:I}}const n={};let l="";const p=`${s.title}|${s.excerpt}|${s.body}`;for(const c of _){const u=s.translations[c];u&&u.title!=null&&(n[`title_${c}`]=u.title,n[`excerpt_${c}`]=u.excerpt,n[`body_${c}`]=u.body,l=p)}await ft(s.id,n,l),b(document.getElementById("cmsMain")),St("Translations saved.")}catch(n){alert("Translation failed: "+(n.message||n))}finally{L=!1,O(!1),V(!1)}}function O(t){const e=document.getElementById("translateNowBtn");e&&(e.textContent=t?"Translating…":"Translate now",e.disabled=t,e.classList.toggle("cms-translate-btn-busy",t))}function V(t){document.querySelectorAll(".cms-retranslate-btn").forEach(e=>{e.disabled=t})}function St(t){const e=document.querySelector(".cms-panel-toast");e&&e.remove();const a=document.createElement("div");a.className="cms-panel-toast",a.textContent=t,document.body.appendChild(a),requestAnimationFrame(()=>a.classList.add("visible")),setTimeout(()=>{a.classList.remove("visible"),setTimeout(()=>a.remove(),300)},2400)}function g(t){return t?String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):""}function y(t){return t?String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function Ht(t){const e=new Date(t),i=(new Date-e)/1e3;return i<60?"just now":i<3600?Math.floor(i/60)+" min ago":i<86400?Math.floor(i/3600)+" h ago":i<172800?"yesterday":e.toLocaleDateString("en-GB",{day:"numeric",month:"short"})}Et();
