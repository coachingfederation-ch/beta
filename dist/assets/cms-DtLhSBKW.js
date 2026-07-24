import{s as x,S as L,t as O}from"./i18n-DTIVa0Cg.js";import{c as pt,d as tt,e as et,g as mt,h as ht,i as vt,j as ft,k as yt,m as bt,n as at,o as wt,a as xt,u as Et,p as S,s as It,q as st,r as Tt}from"./cms-data-DhRMR_wT.js";const nt="coachingfederation.ch";async function Ct(){const t=`${window.location.origin}${window.location.pathname}`;await x.auth.signInWithOAuth({provider:"google",options:{redirectTo:t,queryParams:{hd:nt}}})}async function kt(){await x.auth.signOut()}function it(t){return t?t.toLowerCase().endsWith(`@${nt}`):!1}async function lt(){var l,p;const{data:{session:t}}=await x.auth.getSession();if(!t)return null;const e=t.user,a=(e==null?void 0:e.email)||"";if(!it(a))return await x.auth.signOut(),null;const n=((l=e==null?void 0:e.user_metadata)==null?void 0:l.full_name)||((p=e==null?void 0:e.user_metadata)==null?void 0:p.name)||a.split("@")[0],i=n.split(" ").filter(Boolean).slice(0,2).map(o=>o[0].toUpperCase()).join("");return{email:a,name:n,initials:i||"ED",id:e.id}}function Bt(t){return x.auth.onAuthStateChange((e,a)=>{(async()=>{var l;if(!a){t(null);return}const n=((l=a.user)==null?void 0:l.email)||"";if(!it(n)){await x.auth.signOut(),t(null);return}const i=await lt();t(i)})()})}const M=["Find a Coach","For Organisations","For Coaches","Insights","Events","About","Member Login","Join","Toggle menu","Search","Building a more human future through professional coaching.","Find a Coach","Coach Directory","Why an ICF Coach?","What is Coaching?","FAQs","Organisations","Why Coaching?","Executive Coaching","Team Coaching","Case Studies","For Coaches","Membership","Credentials","Communities","Mentoring & Supervision","About","Our Vision","Board","Partnerships","Contact","Privacy","Code of Ethics","Imprint","Coaching in action.","Ideas, research and perspectives on the future of coaching, leadership, AI and diversity from ICF Switzerland.","All","Search articles…","No articles found","Try a different search or category filter.","Insights","By","Related articles","Back to Insights","Article not found","The article you are looking for may have been moved or is no longer available.","Something went wrong","We could not load this article. Please try again later.","Back to Insights","Loading articles…","Could not load articles","Please try again later.","Deutsch","Français","Italiano","English"].filter((t,e,a)=>a.indexOf(t)===e),E=["de","fr","it"],Lt={de:"Deutsch",fr:"Français",it:"Italiano"},q="coachingfederation.ch";let C=null,b="articles",u=null,I=[],R=[],$=[];const rt=document.getElementById("cms-app");async function Mt(){Bt(e=>{C=e,z()}),C=await lt(),z()}function z(){C?k():$t()}function $t(){rt.innerHTML=`
    <div class="cms-login">
      <div class="cms-login-card">
        <img src="assets/logos/ICF_SwitzerlandCharterChapter_Horizontal_RGB_Positive.png" alt="ICF Switzerland">
        <h1>Insights CMS</h1>
        <p>Sign in with your @${q} Google account to manage blog articles.</p>
        <button id="googleSignIn" class="cms-google-btn">
          <svg viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1Z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"/><path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38Z"/></svg>
          Continue with Google
        </button>
        <div class="cms-login-domain-hint">Only @${q} accounts can access this editor.</div>
      </div>
    </div>`,document.getElementById("googleSignIn").addEventListener("click",()=>{Ct()})}function k(){rt.innerHTML=`
    <div class="cms-shell">
      ${_t()}
      <main class="cms-main" id="cmsMain"></main>
    </div>`,At(),St()}function _t(){const e=[{id:"articles",label:"Articles",icon:'<path d="M4 4h13a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3V4Z"></path><path d="M8 9h8M8 13h8M8 17h5"></path>'},{id:"editor",label:"Editor",icon:'<path d="M12 20h9"></path><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"></path>'},{id:"taxonomy",label:"Categories & Tags",icon:'<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0l-7-7V3h10.6l7 7a2 2 0 0 1 0 2.8Z"></path><circle cx="7.5" cy="7.5" r="1.3" fill="currentColor" stroke="none"></circle>'},{id:"site-translations",label:"Site Translations",icon:'<path d="M4 5h16M4 12h16M4 19h16"></path><path d="M7 5v14M17 5v14"></path>'}].map(a=>`
    <button class="cms-nav-btn ${b===a.id?"active":""}" data-view="${a.id}">
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${a.icon}</svg>
      ${a.label}
    </button>`).join("");return`
    <aside class="cms-sidebar">
      <div class="cms-sidebar-header">
        <img src="assets/logos/ICF_SwitzerlandCharterChapter_Horizontal_RGB_Positive.png" alt="ICF Switzerland">
        <span style="display:flex;flex-direction:column">
          <span class="cms-title">Insights CMS</span>
          <span class="cms-sub">${q}</span>
        </span>
      </div>
      <nav class="cms-nav">
        ${e}
      </nav>
      <div class="cms-sidebar-footer">
        <span class="cms-avatar">${C.initials}</span>
        <span style="display:flex;flex-direction:column;min-width:0">
          <span class="cms-editor-name">${g(C.name)}</span>
          <span class="cms-editor-role">Chapter editor</span>
        </span>
        <button class="cms-logout-btn" id="cmsLogout" title="Sign out" aria-label="Sign out">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><path d="M16 17l5-5-5-5"></path><path d="M21 12H9"></path></svg>
        </button>
      </div>
    </aside>`}function At(){document.querySelectorAll("[data-view]").forEach(e=>{e.addEventListener("click",()=>{const a=e.getAttribute("data-view");U(a==="editor"&&!u?"articles":a)})});const t=document.getElementById("cmsLogout");t&&t.addEventListener("click",()=>kt())}function U(t){b=t,k()}function St(){const t=document.getElementById("cmsMain");t&&(b==="articles"?Ht(t):b==="editor"?Dt(t):b==="taxonomy"?_(t):b==="site-translations"&&Rt(t))}async function Ht(t){t.innerHTML='<div style="padding:40px;text-align:center;color:var(--text-muted)">Loading articles…</div>';try{I=await pt()}catch(a){t.innerHTML=`<div class="cms-empty"><h3>Could not load articles</h3><p>${g(a.message)}</p></div>`;return}const e={published:0,draft:0,scheduled:0};for(const a of I)e[a.status]!==void 0&&e[a.status]++;t.innerHTML=`
    <div class="cms-page-header">
      <div>
        <h1>Articles</h1>
        <p class="cms-subtitle">${I.length} articles · ${e.draft} drafts · ${e.scheduled} scheduled</p>
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
        ${D(I)}
      </div>
      <div class="cms-legend">
        <span class="cms-legend-swatch" style="background:var(--icf-cyan-100);border:1px solid var(--icf-cyan-300)"></span> AI-translated
        <span class="cms-legend-swatch cms-legend-gap" style="background:var(--neutral-100);border:1px solid var(--neutral-300)"></span> Pending
        <span class="cms-legend-swatch cms-legend-gap" style="background:var(--icf-indigo-600)"></span> Source language (EN)
      </div>
    </div>`,document.getElementById("newArticleBtn").addEventListener("click",ot),document.getElementById("articleSearch").addEventListener("input",a=>{const n=a.target.value.toLowerCase(),i=I.filter(l=>l.title.toLowerCase().includes(n)||(l.author||"").toLowerCase().includes(n));document.getElementById("articlesTable").innerHTML=D(i),N()}),document.querySelectorAll("[data-filter]").forEach(a=>{a.addEventListener("click",()=>{document.querySelectorAll("[data-filter]").forEach(l=>l.classList.remove("active")),a.classList.add("active");const n=a.getAttribute("data-filter"),i=n==="all"?I:I.filter(l=>l.status===n);document.getElementById("articlesTable").innerHTML=D(i),N()})}),N()}function D(t){if(t.length===0)return'<div class="cms-empty"><h3>No articles found</h3><p>Create your first article to get started.</p></div>';const e=`
    <div class="cms-table-head">
      <span>Article</span><span>Category</span><span>Status</span><span>Translations</span><span>Updated</span>
    </div>`,a=t.map(n=>{var d;const i=`cms-status-${n.status}`,l=n.status.charAt(0).toUpperCase()+n.status.slice(1),p=n.updated_at?zt(n.updated_at):"",o=((d=n.category)==null?void 0:d.name)||"—";return`
      <div class="cms-table-row" data-id="${n.id}">
        <span style="display:flex;flex-direction:column;gap:3px;min-width:0">
          <span class="cms-article-title">${g(n.title)}</span>
          <span class="cms-article-author">by ${g(n.author)}</span>
        </span>
        <span class="cms-article-cat">${g(o)}</span>
        <span><span class="cms-status-badge ${i}"><span class="dot"></span>${l}</span></span>
        <span class="cms-lang-row">
          <span class="cms-lang-pill cms-lang-translated" title="German">DE</span>
          <span class="cms-lang-pill cms-lang-translated" title="French">FR</span>
          <span class="cms-lang-pill cms-lang-translated" title="Italian">IT</span>
          <span class="cms-lang-pill cms-lang-source" title="English source">EN</span>
        </span>
        <span class="cms-updated">${p}</span>
      </div>`}).join("");return e+a}function N(){document.querySelectorAll(".cms-table-row[data-id]").forEach(t=>{t.addEventListener("click",()=>{u=t.getAttribute("data-id"),b="editor",k()})})}async function ot(){try{u=(await yt(C.id)).id,b="editor",k()}catch(t){alert("Could not create article: "+t.message)}}let s={title:"",slug:"",excerpt:"",body:"",author:"",status:"draft",category_id:null,featured_image_url:null,featured_image_alt:"",translations:{}},G=null,ct=!1,A=!1;async function Dt(t){if(!u){t.innerHTML=`
      <div class="cms-empty" style="padding:120px 20px">
        <h3>No article selected</h3>
        <p>Choose an article from the list or create a new one.</p>
        <button class="cms-new-btn" style="margin-top:20px" id="newArticleBtn2">New article</button>
      </div>`,document.getElementById("newArticleBtn2").addEventListener("click",ot);return}t.innerHTML='<div style="padding:40px;text-align:center;color:var(--text-muted)">Loading editor…</div>';try{const[e,a,n,i]=await Promise.all([wt(u),tt(),et(),xt(u)]);if(R=a,$=n,!e){t.innerHTML='<div class="cms-empty"><h3>Article not found</h3></div>';return}s={id:e.id,title:e.title||"",slug:e.slug||"",excerpt:e.excerpt||"",body:e.body||"",author:e.author||"ICF Switzerland",status:e.status||"draft",category_id:e.category_id||null,featured_image_url:e.featured_image_url||null,featured_image_alt:e.featured_image_alt||"",tagIds:i.map(l=>l.id),translations:{de:{title:e.title_de||null,excerpt:e.excerpt_de||null,body:e.body_de||null},fr:{title:e.title_fr||null,excerpt:e.excerpt_fr||null,body:e.body_fr||null},it:{title:e.title_it||null,excerpt:e.excerpt_it||null,body:e.body_it||null}}},w(t)}catch(e){t.innerHTML=`<div class="cms-empty"><h3>Could not load article</h3><p>${g(e.message)}</p></div>`}}function w(t){const e=s.status==="published"?'<span class="cms-status-badge cms-status-published"><span class="dot"></span>Published</span>':s.status==="scheduled"?'<span class="cms-status-badge cms-status-scheduled"><span class="dot"></span>Scheduled</span>':'<span class="cms-status-badge cms-status-draft"><span class="dot"></span>Draft</span>',a=s.status==="published"?"Unpublish":"Publish";t.innerHTML=`
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
            ${F("de")}
            ${F("fr")}
            ${F("it")}
            <span class="cms-lang-tabs-hint">Click “Translate now” in the panel to generate translations</span>
          </div>
          <input type="text" class="cms-title-input" id="titleInput" value="${T(s.title)}" placeholder="Article title">
          <textarea class="cms-excerpt-input" id="excerptInput" rows="2" placeholder="Lead paragraph — a short summary that appears under the headline and in article cards.">${g(s.excerpt)}</textarea>
          <div class="cms-featured-drop ${s.featured_image_url?"has-image":""}" id="featuredDrop">
            ${s.featured_image_url?`<img src="${T(s.featured_image_url)}" alt="">`:""}
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
      ${Nt()}
    </div>`,Ft()}function Nt(){const t=R.map(i=>`<option value="${i.id}" ${s.category_id===i.id?"selected":""}>${g(i.name)}</option>`).join(""),e=new Set(s.tagIds||[]),a=$.filter(i=>e.has(i.id)).map(i=>`<span class="cms-tag-chip">${g(i.name)} <button data-tag-remove="${i.id}">×</button></span>`).join(""),n=$.filter(i=>!e.has(i.id)).map(i=>`<span class="cms-tag-cloud-item" data-tag-add="${i.id}">${g(i.name)} +</span>`).join("");return`
    <aside class="cms-settings-panel">
      <section class="cms-panel-section">
        <h3>Translations</h3>
        <button class="cms-translate-btn" id="translateNowBtn">${A?"Translating…":"Translate now"}</button>
        ${P("de")}
        ${P("fr")}
        ${P("it")}
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
          <input type="text" id="authorInput" value="${T(s.author)}">
        </div>
        <div class="cms-field">
          <label>Permalink</label>
          <div class="cms-slug-field">
            <span class="cms-slug-prefix">article.html?slug=</span>
            <input type="text" id="slugInput" value="${T(s.slug)}">
          </div>
          <div class="cms-permalink-display">
            <a href="article.html?slug=${T(s.slug)}" target="_blank">View article →</a>
          </div>
        </div>
        <div class="cms-field">
          <label>Featured image alt text</label>
          <input type="text" id="altInput" value="${T(s.featured_image_alt)}" placeholder="Describe the image for accessibility">
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
    </aside>`}function Ft(){document.getElementById("backToArticles").addEventListener("click",()=>{u=null,b="articles",k()});const t=document.getElementById("titleInput"),e=document.getElementById("excerptInput"),a=document.getElementById("bodyEditor"),n=document.getElementById("authorInput"),i=document.getElementById("slugInput"),l=document.getElementById("categorySelect"),p=document.getElementById("altInput");t.addEventListener("input",()=>{s.title=t.value,f()}),e.addEventListener("input",()=>{s.excerpt=e.value,f()}),a.addEventListener("input",()=>{s.body=a.innerHTML,f()}),n.addEventListener("input",()=>{s.author=n.value,f()}),i.addEventListener("input",()=>{s.slug=i.value,f()}),l.addEventListener("change",()=>{s.category_id=l.value||null,f()}),p.addEventListener("input",()=>{s.featured_image_alt=p.value,f()}),document.querySelectorAll("[data-cmd]").forEach(r=>{r.addEventListener("click",c=>{c.preventDefault(),document.execCommand(r.getAttribute("data-cmd"),!1,null),a.focus(),s.body=a.innerHTML,f()})}),document.querySelectorAll("[data-block]").forEach(r=>{r.addEventListener("click",c=>{c.preventDefault();const m=r.getAttribute("data-block");m==="h2"||m==="h3"||m==="p"?document.execCommand("formatBlock",!1,m):m==="blockquote"?document.execCommand("formatBlock",!1,"blockquote"):m==="ul"?document.execCommand("insertUnorderedList",!1,null):m==="ol"&&document.execCommand("insertOrderedList",!1,null),a.focus(),s.body=a.innerHTML,f()})});const o=document.getElementById("featuredDrop"),d=document.getElementById("featuredFileInput"),h=document.getElementById("featuredRemove");o.addEventListener("click",r=>{r.target!==h&&d.click()}),o.addEventListener("dragover",r=>{r.preventDefault(),o.classList.add("dragging")}),o.addEventListener("dragleave",()=>o.classList.remove("dragging")),o.addEventListener("drop",r=>{r.preventDefault(),o.classList.remove("dragging");const c=r.dataTransfer.files[0];c&&c.type.startsWith("image/")&&V(c)}),d.addEventListener("change",()=>{const r=d.files[0];r&&V(r)}),h.addEventListener("click",r=>{r.stopPropagation(),s.featured_image_url=null,o.classList.remove("has-image");const c=o.querySelector("img");c&&c.remove(),f()}),document.querySelectorAll("[data-tag-add]").forEach(r=>{r.addEventListener("click",()=>{const c=r.getAttribute("data-tag-add");s.tagIds=[...s.tagIds||[],c],w(document.getElementById("cmsMain"))})}),document.querySelectorAll("[data-tag-remove]").forEach(r=>{r.addEventListener("click",c=>{c.stopPropagation();const m=r.getAttribute("data-tag-remove");s.tagIds=(s.tagIds||[]).filter(gt=>gt!==m),w(document.getElementById("cmsMain"))})});const v=document.getElementById("newTagInput");v&&v.addEventListener("keydown",async r=>{if(r.key==="Enter"){r.preventDefault();const c=v.value.trim();if(!c)return;try{const m=await at(c);$.push(m),s.tagIds=[...s.tagIds||[],m.id],w(document.getElementById("cmsMain"))}catch(m){alert("Could not create tag: "+m.message)}}}),document.getElementById("publishBtn").addEventListener("click",Pt),document.getElementById("deleteBtn").addEventListener("click",Ot);const y=document.getElementById("translateNowBtn");y&&y.addEventListener("click",K),E.forEach(r=>{const c=document.getElementById(`retranslate-${r}`);c&&c.addEventListener("click",()=>K(r))})}async function V(t){const e=document.getElementById("featuredDrop");e.innerHTML='<span style="color:var(--text-muted);font-size:14px">Uploading…</span>';try{const a=await Et(t);s.featured_image_url=a,e.classList.add("has-image"),e.innerHTML=`<img src="${T(a)}" alt=""><button class="cms-featured-remove" id="featuredRemove">Remove image</button><input type="file" id="featuredFileInput" accept="image/*" style="display:none">`,document.getElementById("featuredRemove").addEventListener("click",n=>{var i;n.stopPropagation(),s.featured_image_url=null,e.classList.remove("has-image"),(i=e.querySelector("img"))==null||i.remove(),f()}),f()}catch(a){alert("Upload failed: "+a.message),w(document.getElementById("cmsMain"))}}function f(){ct=!0;const t=document.getElementById("saveStatus");t&&(t.textContent="Saving…",t.className="cms-save-status dirty"),clearTimeout(G),G=setTimeout(H,1500)}async function H(){if(u)try{await S(u,{title:s.title,slug:s.slug,excerpt:s.excerpt,body:s.body,author:s.author,category_id:s.category_id,featured_image_url:s.featured_image_url,featured_image_alt:s.featured_image_alt}),s.tagIds&&await It(u,s.tagIds),ct=!1;const t=document.getElementById("saveStatus");t&&(t.textContent="All changes saved",t.className="cms-save-status saved")}catch(t){const e=document.getElementById("saveStatus");e&&(e.textContent="Save failed: "+t.message,e.className="cms-save-status dirty")}}async function Pt(){var e,a;if(!u)return;if((s.status==="published"?"draft":"published")==="published"){const n=s.title&&s.title.trim()&&s.title.trim()!=="Untitled article",i=s.body&&s.body.replace(/<[^>]*>/g,"").trim().length>0;if(!n||!i){W("warning","Article has no content","This article is missing a title or body text. It will be published without translations — visitors will see the English version in all languages. Continue?");return}W("translating");try{await H();const l=`${s.title}|${s.excerpt}|${s.body}`;if(!((a=(e=s.translations)==null?void 0:e.de)!=null&&a.title)||s._translationHash!==l){Z("Translating into German, French and Italian…");const d=[s.title||"",s.excerpt||"",s.body||""];for(const v of E){const[y,r,c]=await O(d,L,v);s.translations[v]={title:y,excerpt:r,body:c}}const h={};for(const v of E){const y=s.translations[v];y&&y.title!=null&&(h[`title_${v}`]=y.title,h[`excerpt_${v}`]=y.excerpt,h[`body_${v}`]=y.body)}await st(s.id,h,l),s._translationHash=l}else Z("Translations already up to date — publishing…");const o=await S(u,{status:"published",published_at:new Date().toISOString()});s.status="published",B(),w(document.getElementById("cmsMain")),j("Article published with translations.")}catch(l){B(),alert("Could not publish: "+l.message)}}else try{await H(),await S(u,{status:"draft",published_at:null}),s.status="draft",w(document.getElementById("cmsMain"))}catch(n){alert("Could not change publish status: "+n.message)}}function W(t,e,a){B();const n=document.createElement("div");n.className="cms-publish-overlay",n.id="publishOverlay",t==="translating"?n.innerHTML=`
      <div class="cms-publish-card">
        <div class="cms-publish-spinner"></div>
        <h3 id="publishOverlayTitle">Translating and publishing…</h3>
        <p id="publishOverlayMessage">Saving your article…</p>
        <p class="cms-publish-hint">The editor is locked while translations are generated. This usually takes 5–15 seconds.</p>
      </div>`:t==="warning"&&(n.innerHTML=`
      <div class="cms-publish-card">
        <div class="cms-publish-warning-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
        </div>
        <h3>${g(e)}</h3>
        <p>${g(a)}</p>
        <div class="cms-publish-actions">
          <button class="cms-topbar-btn" id="publishCancel">Cancel</button>
          <button class="cms-topbar-publish" id="publishForce">Publish anyway</button>
        </div>
      </div>`),document.body.appendChild(n),requestAnimationFrame(()=>n.classList.add("visible")),t==="warning"&&(document.getElementById("publishCancel").addEventListener("click",B),document.getElementById("publishForce").addEventListener("click",async()=>{B(),await qt()}))}function Z(t){const e=document.getElementById("publishOverlayMessage");e&&(e.textContent=t)}function B(){const t=document.getElementById("publishOverlay");t&&(t.classList.remove("visible"),setTimeout(()=>t.remove(),200))}async function qt(){try{await H(),await S(u,{status:"published",published_at:new Date().toISOString()}),s.status="published",w(document.getElementById("cmsMain")),j("Article published (no translations generated).")}catch(t){alert("Could not publish: "+t.message)}}async function Ot(){if(u&&confirm("Delete this article? This cannot be undone."))try{await Tt(u),u=null,b="articles",k()}catch(t){alert("Could not delete: "+t.message)}}async function _(t){t.innerHTML='<div style="padding:40px;text-align:center;color:var(--text-muted)">Loading…</div>';try{const[e,a,n,i]=await Promise.all([tt(),et(),mt(),ht()]);R=e,$=a,t.innerHTML=`
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
                  <span class="cms-tax-item-count">${n[l.id]||0} articles</span>
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
                ${g(l.name)} · ${i[l.id]||0}
                <button class="cms-tax-item-delete" data-tag-del="${l.id}" title="Delete" style="background:none;border:none;cursor:pointer;padding:0 0 0 4px">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"></path></svg>
                </button>
              </span>`).join("")||'<span style="font-size:13px;color:var(--text-muted)">No tags yet</span>'}
          </div>
        </div>
      </div>`,document.getElementById("addCatBtn").addEventListener("click",Q),document.getElementById("newCatInput").addEventListener("keydown",l=>{l.key==="Enter"&&Q()}),document.getElementById("addTagBtn").addEventListener("click",J),document.getElementById("newTagInput2").addEventListener("keydown",l=>{l.key==="Enter"&&J()}),document.querySelectorAll("[data-cat-del]").forEach(l=>{l.addEventListener("click",async()=>{const p=l.getAttribute("data-cat-del");try{await vt(p),_(t)}catch(o){alert("Could not delete category: "+o.message)}})}),document.querySelectorAll("[data-tag-del]").forEach(l=>{l.addEventListener("click",async()=>{const p=l.getAttribute("data-tag-del");try{await ft(p),_(t)}catch(o){alert("Could not delete tag: "+o.message)}})})}catch(e){t.innerHTML=`<div class="cms-empty"><h3>Could not load</h3><p>${g(e.message)}</p></div>`}}async function Q(){const t=document.getElementById("newCatInput"),e=t.value.trim();if(e)try{await bt(e),t.value="",_(document.getElementById("cmsMain"))}catch(a){alert("Could not add category: "+a.message)}}async function J(){const t=document.getElementById("newTagInput2"),e=t.value.trim();if(e)try{await at(e),t.value="",_(document.getElementById("cmsMain"))}catch(a){alert("Could not add tag: "+a.message)}}async function Rt(t){t.innerHTML='<div style="padding:40px;text-align:center;color:var(--text-muted)">Loading…</div>';try{const e=await ut();t.innerHTML=`
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
          ${dt(e)}
        </div>

        <div class="cms-site-trans-card">
          <div class="cms-site-trans-card-header">
            <h2>Run pre-translation</h2>
          </div>
          <p class="cms-site-trans-explain">Translates ${M.length} static strings into German, French and Italian. Only missing strings are translated — existing ones are skipped.</p>
          <button class="cms-translate-btn" id="siteTransRunBtn">Translate site text now</button>
          <div class="cms-site-trans-result" id="siteTransResult"></div>
        </div>
      </div>`;const a=document.getElementById("siteTransRunBtn");a&&a.addEventListener("click",jt)}catch(e){t.innerHTML=`<div class="cms-empty"><h3>Could not load</h3><p>${g(e.message)}</p></div>`}}function dt(t){const e={de:"Deutsch",fr:"Français",it:"Italiano"};return E.map(a=>{const n=t[a]||{total:0,translated:0},i=n.total>0?Math.round(n.translated/n.total*100):0,l=i===100;return`
      <div class="cms-site-trans-row">
        <span class="cms-site-trans-lang">${e[a]}</span>
        <div class="cms-site-trans-bar-wrap">
          <div class="cms-site-trans-bar" style="width:${i}%"></div>
        </div>
        <span class="cms-site-trans-count ${l?"cms-site-trans-count-done":""}">${n.translated}/${n.total} ${l?"✓":""}</span>
      </div>`}).join("")}async function ut(){const t={},e=M.length;for(const a of E){const{data:n,error:i}=await x.from("translations").select("source_text").eq("source_lang",L).eq("target_lang",a).in("source_text",M);if(i)throw i;const l=(n||[]).length;t[a]={total:e,translated:l}}return t}async function jt(){const t=document.getElementById("siteTransRunBtn"),e=document.getElementById("siteTransResult");if(!(!t||!e)){t.disabled=!0,t.textContent="Translating…",e.innerHTML='<p class="cms-site-trans-explain">Translating site text into German, French and Italian…</p>';try{let a=0;for(const i of E){const l=new Set,{data:p}=await x.from("translations").select("source_text").eq("source_lang",L).eq("target_lang",i).in("source_text",M);(p||[]).forEach(h=>l.add(h.source_text));const o=M.filter(h=>!l.has(h));if(o.length===0){e.innerHTML=`<p class="cms-site-trans-explain">${i.toUpperCase()}: already fully translated.</p>`;continue}const d=await O(o,L,i);a+=d.length}e.innerHTML=`<div class="cms-site-trans-success">✓ Translated ${a} strings across all languages. Language switching is now instant on every page.</div>`,t.textContent="Re-run pre-translation",t.disabled=!1;const n=await ut();document.querySelector(".cms-site-trans-card:nth-child(2)").innerHTML='<div class="cms-site-trans-card-header"><h2>Translation status</h2></div>'+dt(n)}catch(a){e.innerHTML=`<div class="cms-site-trans-error">Translation failed: ${g(a.message)}</div>`,t.textContent="Translate site text now",t.disabled=!1}}}function F(t){const e=s.translations[t]||{},a=e.title!=null,n=e.body!=null,i=a&&n;return`<span class="cms-lang-tab ${i?"cms-lang-tab-done":"cms-lang-tab-pending"}">${t.toUpperCase()} ${i?'<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>':'<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v6"></path><circle cx="12" cy="16.5" r="0.5" fill="currentColor"></circle></svg>'}</span>`}function P(t){const e=s.translations[t]||{},a=e.title!=null&&e.body!=null,n=a?"Translated":"Pending",i=a?"cms-tag-status-done":"cms-tag-status-pending";return`<div class="cms-tag-row">
    <span>${Lt[t]}</span>
    <span class="cms-tag-status ${i}">${n}</span>
    <button class="cms-retranslate-btn" id="retranslate-${t}" style="margin-left:auto;padding:2px 10px;font-size:11px;border-radius:999px;border:1px solid var(--border-default);background:transparent;color:var(--text-muted);cursor:pointer">${a?"Re-translate":"Translate"}</button>
  </div>`}async function K(t){if(A||!s.id)return;const a=typeof t=="string"?[t]:E;if(!s.title||s.title.trim()==="Untitled article"){alert("Please add a title before translating.");return}A=!0,X(!0),Y(!0);const n=[s.title||"",s.excerpt||"",s.body||""];try{for(const o of a){const[d,h,v]=await O(n,L,o);s.translations[o]={title:d,excerpt:h,body:v}}const i={};let l="";const p=`${s.title}|${s.excerpt}|${s.body}`;for(const o of E){const d=s.translations[o];d&&d.title!=null&&(i[`title_${o}`]=d.title,i[`excerpt_${o}`]=d.excerpt,i[`body_${o}`]=d.body,l=p)}await st(s.id,i,l),w(document.getElementById("cmsMain")),j("Translations saved.")}catch(i){alert("Translation failed: "+(i.message||i))}finally{A=!1,X(!1),Y(!1)}}function X(t){const e=document.getElementById("translateNowBtn");e&&(e.textContent=t?"Translating…":"Translate now",e.disabled=t,e.classList.toggle("cms-translate-btn-busy",t))}function Y(t){document.querySelectorAll(".cms-retranslate-btn").forEach(e=>{e.disabled=t})}function j(t){const e=document.querySelector(".cms-panel-toast");e&&e.remove();const a=document.createElement("div");a.className="cms-panel-toast",a.textContent=t,document.body.appendChild(a),requestAnimationFrame(()=>a.classList.add("visible")),setTimeout(()=>{a.classList.remove("visible"),setTimeout(()=>a.remove(),300)},2400)}function g(t){return t?String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):""}function T(t){return t?String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function zt(t){const e=new Date(t),n=(new Date-e)/1e3;return n<60?"just now":n<3600?Math.floor(n/60)+" min ago":n<86400?Math.floor(n/3600)+" h ago":n<172800?"yesterday":e.toLocaleDateString("en-GB",{day:"numeric",month:"short"})}Mt();
