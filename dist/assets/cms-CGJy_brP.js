import{s as E,S as M,t as R}from"./i18n-DTIVa0Cg.js";import{c as mt,d as et,e as at,g as ht,h as vt,i as ft,j as yt,k as bt,m as wt,n as st,o as xt,a as Tt,u as Et,p as H,s as It,q as nt,r as Ct}from"./cms-data-DhRMR_wT.js";const it="coachingfederation.ch";async function kt(){const t=`${window.location.origin}${window.location.pathname}`;await E.auth.signInWithOAuth({provider:"google",options:{redirectTo:t,queryParams:{hd:it}}})}async function Bt(){await E.auth.signOut()}function lt(t){return t?t.toLowerCase().endsWith(`@${it}`):!1}async function rt(){var r,l;const{data:{session:t}}=await E.auth.getSession();if(!t)return null;const a=t.user,e=(a==null?void 0:a.email)||"";if(!lt(e))return await E.auth.signOut(),null;const n=((r=a==null?void 0:a.user_metadata)==null?void 0:r.full_name)||((l=a==null?void 0:a.user_metadata)==null?void 0:l.name)||e.split("@")[0],i=n.split(" ").filter(Boolean).slice(0,2).map(c=>c[0].toUpperCase()).join("");return{email:e,name:n,initials:i||"ED",id:a.id}}function Lt(t){return E.auth.onAuthStateChange((a,e)=>{(async()=>{var r;if(!e){t(null);return}const n=((r=e.user)==null?void 0:r.email)||"";if(!lt(n)){await E.auth.signOut(),t(null);return}const i=await rt();t(i)})()})}const $=["Find a Coach","For Organisations","For Coaches","Insights","Events","About","Member Login","Join","Toggle menu","Search","Building a more human future through professional coaching.","Find a Coach","Coach Directory","Why an ICF Coach?","What is Coaching?","FAQs","Organisations","Why Coaching?","Executive Coaching","Team Coaching","Case Studies","For Coaches","Membership","Credentials","Communities","Mentoring & Supervision","About","Our Vision","Board","Partnerships","Contact","Privacy","Code of Ethics","Imprint","Coaching in action.","Ideas, research and perspectives on the future of coaching, leadership, AI and diversity from ICF Switzerland.","All","Search articles…","No articles found","Try a different search or category filter.","Insights","By","Related articles","Back to Insights","Article not found","The article you are looking for may have been moved or is no longer available.","Something went wrong","We could not load this article. Please try again later.","Back to Insights","Loading articles…","Could not load articles","Please try again later.","Deutsch","Français","Italiano","English"].filter((t,a,e)=>e.indexOf(t)===a),I=["de","fr","it"],Mt={de:"Deutsch",fr:"Français",it:"Italiano"},O="coachingfederation.ch";let T=null,w="articles",p=null,C=[],j=[],_=[];const ot=document.getElementById("cms-app");async function $t(){Lt(a=>{T&&a&&T.id===a.id||(T=a,U())}),T=await rt(),U()}function U(){T?B():_t()}function _t(){ot.innerHTML=`
    <div class="cms-login">
      <div class="cms-login-card">
        <img src="assets/logos/ICF_SwitzerlandCharterChapter_Horizontal_RGB_Positive.png" alt="ICF Switzerland">
        <h1>Insights CMS</h1>
        <p>Sign in with your @${O} Google account to manage blog articles.</p>
        <button id="googleSignIn" class="cms-google-btn">
          <svg viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1Z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"/><path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38Z"/></svg>
          Continue with Google
        </button>
        <div class="cms-login-domain-hint">Only @${O} accounts can access this editor.</div>
      </div>
    </div>`,document.getElementById("googleSignIn").addEventListener("click",()=>{kt()})}function B(){v++,ot.innerHTML=`
    <div class="cms-shell">
      ${At()}
      <main class="cms-main" id="cmsMain"></main>
    </div>`,St(),Ht()}function At(){const a=[{id:"articles",label:"Articles",icon:'<path d="M4 4h13a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3V4Z"></path><path d="M8 9h8M8 13h8M8 17h5"></path>'},{id:"editor",label:"Editor",icon:'<path d="M12 20h9"></path><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"></path>'},{id:"taxonomy",label:"Categories & Tags",icon:'<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0l-7-7V3h10.6l7 7a2 2 0 0 1 0 2.8Z"></path><circle cx="7.5" cy="7.5" r="1.3" fill="currentColor" stroke="none"></circle>'},{id:"site-translations",label:"Site Translations",icon:'<path d="M4 5h16M4 12h16M4 19h16"></path><path d="M7 5v14M17 5v14"></path>'}].map(e=>`
    <button class="cms-nav-btn ${w===e.id?"active":""}" data-view="${e.id}">
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${e.icon}</svg>
      ${e.label}
    </button>`).join("");return`
    <aside class="cms-sidebar">
      <div class="cms-sidebar-header">
        <img src="assets/logos/ICF_SwitzerlandCharterChapter_Horizontal_RGB_Positive.png" alt="ICF Switzerland">
        <span style="display:flex;flex-direction:column">
          <span class="cms-title">Insights CMS</span>
          <span class="cms-sub">${O}</span>
        </span>
      </div>
      <nav class="cms-nav">
        ${a}
      </nav>
      <div class="cms-sidebar-footer">
        <span class="cms-avatar">${T.initials}</span>
        <span style="display:flex;flex-direction:column;min-width:0">
          <span class="cms-editor-name">${m(T.name)}</span>
          <span class="cms-editor-role">Chapter editor</span>
        </span>
        <button class="cms-logout-btn" id="cmsLogout" title="Sign out" aria-label="Sign out">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><path d="M16 17l5-5-5-5"></path><path d="M21 12H9"></path></svg>
        </button>
      </div>
    </aside>`}function St(){document.querySelectorAll("[data-view]").forEach(a=>{a.addEventListener("click",()=>{const e=a.getAttribute("data-view");G(e==="editor"&&!p?"articles":e)})});const t=document.getElementById("cmsLogout");t&&t.addEventListener("click",()=>Bt())}function G(t){w=t,B()}function Ht(){const t=document.getElementById("cmsMain");t&&(w==="articles"?Dt(t):w==="editor"?Nt(t):w==="taxonomy"?A(t):w==="site-translations"&&jt(t))}async function Dt(t){const a=v;t.innerHTML='<div style="padding:40px;text-align:center;color:var(--text-muted)">Loading articles…</div>';try{C=await mt()}catch(n){if(a!==v)return;t.innerHTML=`<div class="cms-empty"><h3>Could not load articles</h3><p>${m(n.message)}</p></div>`;return}if(a!==v)return;const e={published:0,draft:0,scheduled:0};for(const n of C)e[n.status]!==void 0&&e[n.status]++;t.innerHTML=`
    <div class="cms-page-header">
      <div>
        <h1>Articles</h1>
        <p class="cms-subtitle">${C.length} articles · ${e.draft} drafts · ${e.scheduled} scheduled</p>
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
        ${N(C)}
      </div>
      <div class="cms-legend">
        <span class="cms-legend-swatch" style="background:var(--icf-cyan-100);border:1px solid var(--icf-cyan-300)"></span> AI-translated
        <span class="cms-legend-swatch cms-legend-gap" style="background:var(--neutral-100);border:1px solid var(--neutral-300)"></span> Pending
        <span class="cms-legend-swatch cms-legend-gap" style="background:var(--icf-indigo-600)"></span> Source language (EN)
      </div>
    </div>`,document.getElementById("newArticleBtn").addEventListener("click",ct),document.getElementById("articleSearch").addEventListener("input",n=>{const i=n.target.value.toLowerCase(),r=C.filter(l=>l.title.toLowerCase().includes(i)||(l.author||"").toLowerCase().includes(i));document.getElementById("articlesTable").innerHTML=N(r),F()}),document.querySelectorAll("[data-filter]").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll("[data-filter]").forEach(l=>l.classList.remove("active")),n.classList.add("active");const i=n.getAttribute("data-filter"),r=i==="all"?C:C.filter(l=>l.status===i);document.getElementById("articlesTable").innerHTML=N(r),F()})}),F()}function N(t){if(t.length===0)return'<div class="cms-empty"><h3>No articles found</h3><p>Create your first article to get started.</p></div>';const a=`
    <div class="cms-table-head">
      <span>Article</span><span>Category</span><span>Status</span><span>Translations</span><span>Updated</span>
    </div>`,e=t.map(n=>{var d;const i=`cms-status-${n.status}`,r=n.status.charAt(0).toUpperCase()+n.status.slice(1),l=n.updated_at?Ut(n.updated_at):"",c=((d=n.category)==null?void 0:d.name)||"—";return`
      <div class="cms-table-row" data-id="${n.id}">
        <span style="display:flex;flex-direction:column;gap:3px;min-width:0">
          <span class="cms-article-title">${m(n.title)}</span>
          <span class="cms-article-author">by ${m(n.author)}</span>
        </span>
        <span class="cms-article-cat">${m(c)}</span>
        <span><span class="cms-status-badge ${i}"><span class="dot"></span>${r}</span></span>
        <span class="cms-lang-row">
          <span class="cms-lang-pill cms-lang-translated" title="German">DE</span>
          <span class="cms-lang-pill cms-lang-translated" title="French">FR</span>
          <span class="cms-lang-pill cms-lang-translated" title="Italian">IT</span>
          <span class="cms-lang-pill cms-lang-source" title="English source">EN</span>
        </span>
        <span class="cms-updated">${l}</span>
      </div>`}).join("");return a+e}function F(){document.querySelectorAll(".cms-table-row[data-id]").forEach(t=>{t.addEventListener("click",()=>{p=t.getAttribute("data-id"),w="editor",B()})})}async function ct(){try{p=(await bt(T.id)).id,w="editor",B()}catch(t){alert("Could not create article: "+t.message)}}let s={title:"",slug:"",excerpt:"",body:"",author:"",status:"draft",category_id:null,featured_image_url:null,featured_image_alt:"",translations:{}},V=null,dt=!1,S=!1,v=0;async function Nt(t){const a=v;if(!p){t.innerHTML=`
      <div class="cms-empty" style="padding:120px 20px">
        <h3>No article selected</h3>
        <p>Choose an article from the list or create a new one.</p>
        <button class="cms-new-btn" style="margin-top:20px" id="newArticleBtn2">New article</button>
      </div>`,document.getElementById("newArticleBtn2").addEventListener("click",ct);return}t.innerHTML='<div style="padding:40px;text-align:center;color:var(--text-muted)">Loading editor…</div>';try{const[e,n,i,r]=await Promise.all([xt(p),et(),at(),Tt(p)]);if(a!==v)return;if(j=n,_=i,!e){t.innerHTML='<div class="cms-empty"><h3>Article not found</h3></div>';return}s={id:e.id,title:e.title||"",slug:e.slug||"",excerpt:e.excerpt||"",body:e.body||"",author:e.author||"ICF Switzerland",status:e.status||"draft",category_id:e.category_id||null,featured_image_url:e.featured_image_url||null,featured_image_alt:e.featured_image_alt||"",tagIds:r.map(l=>l.id),translations:{de:{title:e.title_de||null,excerpt:e.excerpt_de||null,body:e.body_de||null},fr:{title:e.title_fr||null,excerpt:e.excerpt_fr||null,body:e.body_fr||null},it:{title:e.title_it||null,excerpt:e.excerpt_it||null,body:e.body_it||null}}},x(t)}catch(e){t.innerHTML=`<div class="cms-empty"><h3>Could not load article</h3><p>${m(e.message)}</p></div>`}}function x(t){const a=s.status==="published"?'<span class="cms-status-badge cms-status-published"><span class="dot"></span>Published</span>':s.status==="scheduled"?'<span class="cms-status-badge cms-status-scheduled"><span class="dot"></span>Scheduled</span>':'<span class="cms-status-badge cms-status-draft"><span class="dot"></span>Draft</span>',e=s.status==="published"?"Unpublish":"Publish";t.innerHTML=`
    <div class="cms-editor-topbar">
      <button class="cms-topbar-btn" id="backToArticles">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"></path></svg>
        Articles
      </button>
      ${a}
      <span class="cms-save-status" id="saveStatus">All changes saved</span>
      <div style="margin-left:auto;display:flex;align-items:center;gap:10px">
        <button class="cms-topbar-btn" id="deleteBtn" style="color:var(--red-600);border-color:var(--red-100)">Delete</button>
        <button class="cms-topbar-publish" id="publishBtn">${e}</button>
      </div>
    </div>
    <div class="cms-editor-body">
      <div class="cms-canvas">
        <div class="cms-canvas-inner">
          <div class="cms-lang-tabs">
            <span class="cms-lang-tab cms-lang-tab-source">EN · Source</span>
            ${P("de")}
            ${P("fr")}
            ${P("it")}
            <span class="cms-lang-tabs-hint">Click “Translate now” in the panel to generate translations</span>
          </div>
          <input type="text" class="cms-title-input" id="titleInput" value="${k(s.title)}" placeholder="Article title">
          <textarea class="cms-excerpt-input" id="excerptInput" rows="2" placeholder="Lead paragraph — a short summary that appears under the headline and in article cards.">${m(s.excerpt)}</textarea>
          <div class="cms-featured-drop ${s.featured_image_url?"has-image":""}" id="featuredDrop">
            ${s.featured_image_url?`<img src="${k(s.featured_image_url)}" alt="">`:""}
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
      ${Ft()}
    </div>`,Pt()}function Ft(){const t=j.map(i=>`<option value="${i.id}" ${s.category_id===i.id?"selected":""}>${m(i.name)}</option>`).join(""),a=new Set(s.tagIds||[]),e=_.filter(i=>a.has(i.id)).map(i=>`<span class="cms-tag-chip">${m(i.name)} <button data-tag-remove="${i.id}">×</button></span>`).join(""),n=_.filter(i=>!a.has(i.id)).map(i=>`<span class="cms-tag-cloud-item" data-tag-add="${i.id}">${m(i.name)} +</span>`).join("");return`
    <aside class="cms-settings-panel">
      <section class="cms-panel-section">
        <h3>Translations</h3>
        <button class="cms-translate-btn" id="translateNowBtn">${S?"Translating…":"Translate now"}</button>
        ${q("de")}
        ${q("fr")}
        ${q("it")}
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
          <input type="text" id="authorInput" value="${k(s.author)}">
        </div>
        <div class="cms-field">
          <label>Permalink</label>
          <div class="cms-slug-field">
            <span class="cms-slug-prefix">article.html?slug=</span>
            <input type="text" id="slugInput" value="${k(s.slug)}">
          </div>
          <div class="cms-permalink-display">
            <a href="article.html?slug=${k(s.slug)}" target="_blank">View article →</a>
          </div>
        </div>
        <div class="cms-field">
          <label>Featured image alt text</label>
          <input type="text" id="altInput" value="${k(s.featured_image_alt)}" placeholder="Describe the image for accessibility">
        </div>
      </section>
      <section class="cms-panel-section">
        <h3>Tags</h3>
        <div class="cms-tag-list" id="tagChips">${e||'<span style="font-size:12px;color:var(--text-muted)">No tags assigned</span>'}</div>
        <div class="cms-tag-cloud" id="tagCloud">${n||'<span style="font-size:12px;color:var(--text-muted)">All tags assigned</span>'}</div>
        <div style="margin-top:12px">
          <input type="text" class="cms-tag-add-input" id="newTagInput" placeholder="Add a new tag…">
        </div>
      </section>
    </aside>`}function Pt(){document.getElementById("backToArticles").addEventListener("click",()=>{p=null,w="articles",B()});const t=document.getElementById("titleInput"),a=document.getElementById("excerptInput"),e=document.getElementById("bodyEditor"),n=document.getElementById("authorInput"),i=document.getElementById("slugInput"),r=document.getElementById("categorySelect"),l=document.getElementById("altInput");t.addEventListener("input",()=>{s.title=t.value,f()}),a.addEventListener("input",()=>{s.excerpt=a.value,f()}),e.addEventListener("input",()=>{s.body=e.innerHTML,f()}),n.addEventListener("input",()=>{s.author=n.value,f()}),i.addEventListener("input",()=>{s.slug=i.value,f()}),r.addEventListener("change",()=>{s.category_id=r.value||null,f()}),l.addEventListener("input",()=>{s.featured_image_alt=l.value,f()}),document.querySelectorAll("[data-cmd]").forEach(o=>{o.addEventListener("click",u=>{u.preventDefault(),document.execCommand(o.getAttribute("data-cmd"),!1,null),e.focus(),s.body=e.innerHTML,f()})}),document.querySelectorAll("[data-block]").forEach(o=>{o.addEventListener("click",u=>{u.preventDefault();const h=o.getAttribute("data-block");h==="h2"||h==="h3"||h==="p"?document.execCommand("formatBlock",!1,h):h==="blockquote"?document.execCommand("formatBlock",!1,"blockquote"):h==="ul"?document.execCommand("insertUnorderedList",!1,null):h==="ol"&&document.execCommand("insertOrderedList",!1,null),e.focus(),s.body=e.innerHTML,f()})});const c=document.getElementById("featuredDrop"),d=document.getElementById("featuredFileInput"),y=document.getElementById("featuredRemove");c.addEventListener("click",o=>{o.target!==y&&d.click()}),c.addEventListener("dragover",o=>{o.preventDefault(),c.classList.add("dragging")}),c.addEventListener("dragleave",()=>c.classList.remove("dragging")),c.addEventListener("drop",o=>{o.preventDefault(),c.classList.remove("dragging");const u=o.dataTransfer.files[0];u&&u.type.startsWith("image/")&&W(u)}),d.addEventListener("change",()=>{const o=d.files[0];o&&W(o)}),y.addEventListener("click",o=>{o.stopPropagation(),s.featured_image_url=null,c.classList.remove("has-image");const u=c.querySelector("img");u&&u.remove(),f()}),document.querySelectorAll("[data-tag-add]").forEach(o=>{o.addEventListener("click",()=>{const u=o.getAttribute("data-tag-add");s.tagIds=[...s.tagIds||[],u],x(document.getElementById("cmsMain"))})}),document.querySelectorAll("[data-tag-remove]").forEach(o=>{o.addEventListener("click",u=>{u.stopPropagation();const h=o.getAttribute("data-tag-remove");s.tagIds=(s.tagIds||[]).filter(pt=>pt!==h),x(document.getElementById("cmsMain"))})});const g=document.getElementById("newTagInput");g&&g.addEventListener("keydown",async o=>{if(o.key==="Enter"){o.preventDefault();const u=g.value.trim();if(!u)return;try{const h=await st(u);_.push(h),s.tagIds=[...s.tagIds||[],h.id],x(document.getElementById("cmsMain"))}catch(h){alert("Could not create tag: "+h.message)}}}),document.getElementById("publishBtn").addEventListener("click",qt),document.getElementById("deleteBtn").addEventListener("click",Rt);const b=document.getElementById("translateNowBtn");b&&b.addEventListener("click",X),I.forEach(o=>{const u=document.getElementById(`retranslate-${o}`);u&&u.addEventListener("click",()=>X(o))})}async function W(t){const a=document.getElementById("featuredDrop");a.innerHTML='<span style="color:var(--text-muted);font-size:14px">Uploading…</span>';try{const e=await Et(t);s.featured_image_url=e,a.classList.add("has-image"),a.innerHTML=`<img src="${k(e)}" alt=""><button class="cms-featured-remove" id="featuredRemove">Remove image</button><input type="file" id="featuredFileInput" accept="image/*" style="display:none">`,document.getElementById("featuredRemove").addEventListener("click",n=>{var i;n.stopPropagation(),s.featured_image_url=null,a.classList.remove("has-image"),(i=a.querySelector("img"))==null||i.remove(),f()}),f()}catch(e){alert("Upload failed: "+e.message),x(document.getElementById("cmsMain"))}}function f(){dt=!0;const t=document.getElementById("saveStatus");t&&(t.textContent="Saving…",t.className="cms-save-status dirty"),clearTimeout(V),V=setTimeout(D,1500)}async function D(){if(p)try{await H(p,{title:s.title,slug:s.slug,excerpt:s.excerpt,body:s.body,author:s.author,category_id:s.category_id,featured_image_url:s.featured_image_url,featured_image_alt:s.featured_image_alt}),s.tagIds&&await It(p,s.tagIds),dt=!1;const t=document.getElementById("saveStatus");t&&(t.textContent="All changes saved",t.className="cms-save-status saved")}catch(t){const a=document.getElementById("saveStatus");a&&(a.textContent="Save failed: "+t.message,a.className="cms-save-status dirty")}}async function qt(){var a,e;if(!p)return;if((s.status==="published"?"draft":"published")==="published"){const n=s.title&&s.title.trim()&&s.title.trim()!=="Untitled article",i=s.body&&s.body.replace(/<[^>]*>/g,"").trim().length>0;if(!n||!i){Z("warning","Article has no content","This article is missing a title or body text. It will be published without translations — visitors will see the English version in all languages. Continue?");return}Z("translating");try{await D();const r=`${s.title}|${s.excerpt}|${s.body}`;if(!((e=(a=s.translations)==null?void 0:a.de)!=null&&e.title)||s._translationHash!==r){Q("Translating into German, French and Italian…");const d=[s.title||"",s.excerpt||"",s.body||""];for(const g of I){const[b,o,u]=await R(d,M,g);s.translations[g]={title:b,excerpt:o,body:u}}const y={};for(const g of I){const b=s.translations[g];b&&b.title!=null&&(y[`title_${g}`]=b.title,y[`excerpt_${g}`]=b.excerpt,y[`body_${g}`]=b.body)}await nt(s.id,y,r),s._translationHash=r}else Q("Translations already up to date — publishing…");const c=await H(p,{status:"published",published_at:new Date().toISOString()});s.status="published",L(),x(document.getElementById("cmsMain")),z("Article published with translations.")}catch(r){L(),alert("Could not publish: "+r.message)}}else try{await D(),await H(p,{status:"draft",published_at:null}),s.status="draft",x(document.getElementById("cmsMain"))}catch(n){alert("Could not change publish status: "+n.message)}}function Z(t,a,e){L();const n=document.createElement("div");n.className="cms-publish-overlay",n.id="publishOverlay",t==="translating"?n.innerHTML=`
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
        <h3>${m(a)}</h3>
        <p>${m(e)}</p>
        <div class="cms-publish-actions">
          <button class="cms-topbar-btn" id="publishCancel">Cancel</button>
          <button class="cms-topbar-publish" id="publishForce">Publish anyway</button>
        </div>
      </div>`),document.body.appendChild(n),requestAnimationFrame(()=>n.classList.add("visible")),t==="warning"&&(document.getElementById("publishCancel").addEventListener("click",L),document.getElementById("publishForce").addEventListener("click",async()=>{L(),await Ot()}))}function Q(t){const a=document.getElementById("publishOverlayMessage");a&&(a.textContent=t)}function L(){const t=document.getElementById("publishOverlay");t&&(t.classList.remove("visible"),setTimeout(()=>t.remove(),200))}async function Ot(){try{await D(),await H(p,{status:"published",published_at:new Date().toISOString()}),s.status="published",x(document.getElementById("cmsMain")),z("Article published (no translations generated).")}catch(t){alert("Could not publish: "+t.message)}}async function Rt(){if(p&&confirm("Delete this article? This cannot be undone."))try{await Ct(p),p=null,w="articles",B()}catch(t){alert("Could not delete: "+t.message)}}async function A(t){const a=v;t.innerHTML='<div style="padding:40px;text-align:center;color:var(--text-muted)">Loading…</div>';try{const[e,n,i,r]=await Promise.all([et(),at(),ht(),vt()]);if(a!==v)return;j=e,_=n,t.innerHTML=`
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
                <span class="cms-tax-item-name">${m(l.name)}</span>
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
            ${n.map(l=>`
              <span class="cms-tag-cloud-item">
                ${m(l.name)} · ${r[l.id]||0}
                <button class="cms-tax-item-delete" data-tag-del="${l.id}" title="Delete" style="background:none;border:none;cursor:pointer;padding:0 0 0 4px">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"></path></svg>
                </button>
              </span>`).join("")||'<span style="font-size:13px;color:var(--text-muted)">No tags yet</span>'}
          </div>
        </div>
      </div>`,document.getElementById("addCatBtn").addEventListener("click",J),document.getElementById("newCatInput").addEventListener("keydown",l=>{l.key==="Enter"&&J()}),document.getElementById("addTagBtn").addEventListener("click",K),document.getElementById("newTagInput2").addEventListener("keydown",l=>{l.key==="Enter"&&K()}),document.querySelectorAll("[data-cat-del]").forEach(l=>{l.addEventListener("click",async()=>{const c=l.getAttribute("data-cat-del");try{await ft(c),A(t)}catch(d){alert("Could not delete category: "+d.message)}})}),document.querySelectorAll("[data-tag-del]").forEach(l=>{l.addEventListener("click",async()=>{const c=l.getAttribute("data-tag-del");try{await yt(c),A(t)}catch(d){alert("Could not delete tag: "+d.message)}})})}catch(e){t.innerHTML=`<div class="cms-empty"><h3>Could not load</h3><p>${m(e.message)}</p></div>`}}async function J(){const t=document.getElementById("newCatInput"),a=t.value.trim();if(a)try{await wt(a),t.value="",A(document.getElementById("cmsMain"))}catch(e){alert("Could not add category: "+e.message)}}async function K(){const t=document.getElementById("newTagInput2"),a=t.value.trim();if(a)try{await st(a),t.value="",A(document.getElementById("cmsMain"))}catch(e){alert("Could not add tag: "+e.message)}}async function jt(t){const a=v;t.innerHTML='<div style="padding:40px;text-align:center;color:var(--text-muted)">Loading…</div>';try{const e=await gt();if(a!==v)return;t.innerHTML=`
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
          ${ut(e)}
        </div>

        <div class="cms-site-trans-card">
          <div class="cms-site-trans-card-header">
            <h2>Run pre-translation</h2>
          </div>
          <p class="cms-site-trans-explain">Translates ${$.length} static strings into German, French and Italian. Only missing strings are translated — existing ones are skipped.</p>
          <button class="cms-translate-btn" id="siteTransRunBtn">Translate site text now</button>
          <div class="cms-site-trans-result" id="siteTransResult"></div>
        </div>
      </div>`;const n=document.getElementById("siteTransRunBtn");n&&n.addEventListener("click",zt)}catch(e){t.innerHTML=`<div class="cms-empty"><h3>Could not load</h3><p>${m(e.message)}</p></div>`}}function ut(t){const a={de:"Deutsch",fr:"Français",it:"Italiano"};return I.map(e=>{const n=t[e]||{total:0,translated:0},i=n.total>0?Math.round(n.translated/n.total*100):0,r=i===100;return`
      <div class="cms-site-trans-row">
        <span class="cms-site-trans-lang">${a[e]}</span>
        <div class="cms-site-trans-bar-wrap">
          <div class="cms-site-trans-bar" style="width:${i}%"></div>
        </div>
        <span class="cms-site-trans-count ${r?"cms-site-trans-count-done":""}">${n.translated}/${n.total} ${r?"✓":""}</span>
      </div>`}).join("")}async function gt(){const t={},a=$.length;for(const e of I){const{data:n,error:i}=await E.from("translations").select("source_text").eq("source_lang",M).eq("target_lang",e).in("source_text",$);if(i)throw i;const r=(n||[]).length;t[e]={total:a,translated:r}}return t}async function zt(){const t=v,a=document.getElementById("siteTransRunBtn"),e=document.getElementById("siteTransResult");if(!(!a||!e)){a.disabled=!0,a.textContent="Translating…",e.innerHTML='<p class="cms-site-trans-explain">Translating site text into German, French and Italian…</p>';try{let n=0;for(const r of I){const l=new Set,{data:c}=await E.from("translations").select("source_text").eq("source_lang",M).eq("target_lang",r).in("source_text",$);(c||[]).forEach(g=>l.add(g.source_text));const d=$.filter(g=>!l.has(g));if(d.length===0){e.innerHTML=`<p class="cms-site-trans-explain">${r.toUpperCase()}: already fully translated.</p>`;continue}const y=await R(d,M,r);n+=y.length}if(t!==v)return;e.innerHTML=`<div class="cms-site-trans-success">✓ Translated ${n} strings across all languages. Language switching is now instant on every page.</div>`,a.textContent="Re-run pre-translation",a.disabled=!1;const i=await gt();if(t!==v)return;document.querySelector(".cms-site-trans-card:nth-child(2)").innerHTML='<div class="cms-site-trans-card-header"><h2>Translation status</h2></div>'+ut(i)}catch(n){e.innerHTML=`<div class="cms-site-trans-error">Translation failed: ${m(n.message)}</div>`,a.textContent="Translate site text now",a.disabled=!1}}}function P(t){const a=s.translations[t]||{},e=a.title!=null,n=a.body!=null,i=e&&n;return`<span class="cms-lang-tab ${i?"cms-lang-tab-done":"cms-lang-tab-pending"}">${t.toUpperCase()} ${i?'<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>':'<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v6"></path><circle cx="12" cy="16.5" r="0.5" fill="currentColor"></circle></svg>'}</span>`}function q(t){const a=s.translations[t]||{},e=a.title!=null&&a.body!=null,n=e?"Translated":"Pending",i=e?"cms-tag-status-done":"cms-tag-status-pending";return`<div class="cms-tag-row">
    <span>${Mt[t]}</span>
    <span class="cms-tag-status ${i}">${n}</span>
    <button class="cms-retranslate-btn" id="retranslate-${t}" style="margin-left:auto;padding:2px 10px;font-size:11px;border-radius:999px;border:1px solid var(--border-default);background:transparent;color:var(--text-muted);cursor:pointer">${e?"Re-translate":"Translate"}</button>
  </div>`}async function X(t){if(S||!s.id)return;const e=typeof t=="string"?[t]:I;if(!s.title||s.title.trim()==="Untitled article"){alert("Please add a title before translating.");return}S=!0,Y(!0),tt(!0);const n=[s.title||"",s.excerpt||"",s.body||""];try{for(const c of e){const[d,y,g]=await R(n,M,c);s.translations[c]={title:d,excerpt:y,body:g}}const i={};let r="";const l=`${s.title}|${s.excerpt}|${s.body}`;for(const c of I){const d=s.translations[c];d&&d.title!=null&&(i[`title_${c}`]=d.title,i[`excerpt_${c}`]=d.excerpt,i[`body_${c}`]=d.body,r=l)}await nt(s.id,i,r),x(document.getElementById("cmsMain")),z("Translations saved.")}catch(i){alert("Translation failed: "+(i.message||i))}finally{S=!1,Y(!1),tt(!1)}}function Y(t){const a=document.getElementById("translateNowBtn");a&&(a.textContent=t?"Translating…":"Translate now",a.disabled=t,a.classList.toggle("cms-translate-btn-busy",t))}function tt(t){document.querySelectorAll(".cms-retranslate-btn").forEach(a=>{a.disabled=t})}function z(t){const a=document.querySelector(".cms-panel-toast");a&&a.remove();const e=document.createElement("div");e.className="cms-panel-toast",e.textContent=t,document.body.appendChild(e),requestAnimationFrame(()=>e.classList.add("visible")),setTimeout(()=>{e.classList.remove("visible"),setTimeout(()=>e.remove(),300)},2400)}function m(t){return t?String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):""}function k(t){return t?String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function Ut(t){const a=new Date(t),n=(new Date-a)/1e3;return n<60?"just now":n<3600?Math.floor(n/60)+" min ago":n<86400?Math.floor(n/3600)+" h ago":n<172800?"yesterday":a.toLocaleDateString("en-GB",{day:"numeric",month:"short"})}$t();
