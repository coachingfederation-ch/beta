import{g as h,S as g,a as m}from"./i18n-BbZBq89F.js";import{t as f,d as b}from"./cms-data-De5lQQyV.js";import{m as v}from"./layout-CN1KT62u.js";let p=[],u=[],o="all",i="";async function y(){v("Insights");const t=document.getElementById("blog-content");try{const[a,e]=await Promise.all([f(),b()]),r=h();p=a.map(l=>r===g?l:{...l,title:l[`title_${r}`]||l.title,excerpt:l[`excerpt_${r}`]||l.excerpt}),u=e,L(t),r!==g&&await m(r,document.getElementById("blog-content"))}catch{t.innerHTML=`
      <div class="blog-empty">
        <h3>Could not load articles</h3>
        <p>Please try again later.</p>
      </div>`}}function L(t){t.innerHTML=`
    <div class="blog-hero">
      <p class="icf-overline" style="margin:0 0 14px" data-i18n>Insights</p>
      <h1 data-i18n>Coaching in action.</h1>
      <p data-i18n>Ideas, research and perspectives on the future of coaching, leadership, AI and diversity from ICF Switzerland.</p>
    </div>
    <div class="blog-toolbar" id="blogToolbar"></div>
    <div class="blog-grid" id="blogGrid"></div>`,w(),s()}function w(){const t=document.getElementById("blogToolbar");if(!t)return;const a=['<button class="blog-filter-chip active" data-cat="all" data-i18n>All</button>',...u.map(e=>`<button class="blog-filter-chip" data-cat="${c(e.id)}" data-i18n>${n(e.name)}</button>`)].join("");t.innerHTML=`
    <div class="blog-search">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--neutral-400)" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-3.5-3.5"></path></svg>
      <input type="text" id="blogSearch" placeholder="Search articles…" data-i18n>
    </div>
    ${a}`,document.getElementById("blogSearch").addEventListener("input",e=>{i=e.target.value.toLowerCase(),s()}),document.querySelectorAll("[data-cat]").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll("[data-cat]").forEach(r=>r.classList.remove("active")),e.classList.add("active"),o=e.getAttribute("data-cat"),s()})})}function s(){const t=document.getElementById("blogGrid");if(!t)return;let a=p;if(o!=="all"&&(a=a.filter(e=>e.category_id===o)),i&&(a=a.filter(e=>e.title.toLowerCase().includes(i)||(e.excerpt||"").toLowerCase().includes(i)||(e.author||"").toLowerCase().includes(i))),a.length===0){t.innerHTML=`
      <div class="blog-empty">
        <h3>No articles found</h3>
        <p>Try a different search or category filter.</p>
      </div>`;return}t.innerHTML=a.map(e=>{var d;const r=e.featured_image_url?`<div class="blog-card-img"><img src="${c(e.featured_image_url)}" alt="${c(e.featured_image_alt||"")}" loading="lazy"></div>`:'<div class="blog-card-placeholder"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--text-subtle)" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/></svg></div>',l=e.published_at?new Date(e.published_at).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}):"";return`
      <a href="article.html?slug=${c(e.slug)}" class="blog-card">
        ${r}
        <div class="blog-card-body">
          <span class="blog-card-category" data-i18n>${n(((d=e.category)==null?void 0:d.name)||"")}</span>
          <span class="blog-card-title" data-i18n>${n(e.title)}</span>
          <span class="blog-card-excerpt" data-i18n>${n(e.excerpt||"")}</span>
          <div class="blog-card-meta">
            <span data-i18n>${n(e.author)}</span>
            <span class="dot"></span>
            <span>${l}</span>
          </div>
        </div>
      </a>`}).join("")}function n(t){return t?String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):""}function c(t){return t?String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}y();
