import"./supabase-client-Bm3kDcaW.js";import{q as h,d as m}from"./cms-data-Ci2-emH-.js";import{m as f,g as b,S as g,a as v,t as y}from"./layout-gl-hdcOQ.js";let u=[],p=[],s="all",i="";async function x(){f("Insights");const e=document.getElementById("blog-content");try{const[a,t]=await Promise.all([h(),m()]);u=a,p=t,L(e),await C()}catch{e.innerHTML=`
      <div class="blog-empty">
        <h3>Could not load articles</h3>
        <p>Please try again later.</p>
      </div>`}}function L(e){e.innerHTML=`
    <div class="blog-hero">
      <p class="icf-overline" style="margin:0 0 14px" data-i18n>Insights</p>
      <h1 data-i18n>Coaching in action.</h1>
      <p data-i18n>Ideas, research and perspectives on the future of coaching, leadership, AI and diversity from ICF Switzerland.</p>
    </div>
    <div class="blog-toolbar" id="blogToolbar"></div>
    <div class="blog-grid" id="blogGrid"></div>`,w(),d()}function w(){const e=document.getElementById("blogToolbar");if(!e)return;const a=['<button class="blog-filter-chip active" data-cat="all" data-i18n>All</button>',...p.map(t=>`<button class="blog-filter-chip" data-cat="${o(t.id)}" data-i18n>${n(t.name)}</button>`)].join("");e.innerHTML=`
    <div class="blog-search">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--neutral-400)" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-3.5-3.5"></path></svg>
      <input type="text" id="blogSearch" placeholder="Search articles…" data-i18n>
    </div>
    ${a}`,document.getElementById("blogSearch").addEventListener("input",t=>{i=t.target.value.toLowerCase(),d()}),document.querySelectorAll("[data-cat]").forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll("[data-cat]").forEach(r=>r.classList.remove("active")),t.classList.add("active"),s=t.getAttribute("data-cat"),d()})})}function d(){const e=document.getElementById("blogGrid");if(!e)return;let a=u;if(s!=="all"&&(a=a.filter(t=>t.category_id===s)),i&&(a=a.filter(t=>t.title.toLowerCase().includes(i)||(t.excerpt||"").toLowerCase().includes(i)||(t.author||"").toLowerCase().includes(i))),a.length===0){e.innerHTML=`
      <div class="blog-empty">
        <h3>No articles found</h3>
        <p>Try a different search or category filter.</p>
      </div>`;return}e.innerHTML=a.map(t=>{var c;const r=t.featured_image_url?`<div class="blog-card-img"><img src="${o(t.featured_image_url)}" alt="${o(t.featured_image_alt||"")}" loading="lazy"></div>`:'<div class="blog-card-placeholder"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--text-subtle)" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/></svg></div>',l=t.published_at?new Date(t.published_at).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}):"";return`
      <a href="article.html?slug=${o(t.slug)}" class="blog-card">
        ${r}
        <div class="blog-card-body">
          <span class="blog-card-category" data-i18n>${n(((c=t.category)==null?void 0:c.name)||"")}</span>
          <span class="blog-card-title" data-i18n>${n(t.title)}</span>
          <span class="blog-card-excerpt" data-i18n>${n(t.excerpt||"")}</span>
          <div class="blog-card-meta">
            <span data-i18n>${n(t.author)}</span>
            <span class="dot"></span>
            <span>${l}</span>
          </div>
        </div>
      </a>`}).join("")}async function C(){const e=b();if(e===g)return;await v(e,document.getElementById("blog-content"));const a=[];if(document.querySelectorAll(".blog-card-title, .blog-card-excerpt, .blog-card-category").forEach(r=>{const l=r.textContent.trim();l&&a.push({el:r,text:l})}),a.length===0)return;const t=a.map(r=>r.text);try{const r=await y(t,g,e);a.forEach(({el:l},c)=>{l.textContent=r[c]})}catch{}}function n(e){return e?String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):""}function o(e){return e?String(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}x();
