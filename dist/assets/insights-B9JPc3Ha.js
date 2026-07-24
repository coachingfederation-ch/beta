import{S as s,g as L,a as w}from"./i18n-DhmHtJmC.js";import{t as x,d as $}from"./cms-data-BFiXKvjS.js";import{m as C}from"./layout-B9y2-MiL.js";let h=[],m=[],d="all",l="",c=s;async function E(){C("Insights");const t=document.getElementById("blog-content");try{const[a,e]=await Promise.all([x(),$()]);m=e,c=L(),h=a,u(t),await o()}catch{t.innerHTML=`
      <div class="blog-empty">
        <h3 data-i18n>Could not load articles</h3>
        <p data-i18n>Please try again later.</p>
      </div>`,await o()}document.addEventListener("icf:langchange",a=>{c=a.detail.lang,u(document.getElementById("blog-content")),o()})}async function o(){await w(c,document.getElementById("blog-content"))}function u(t){t.innerHTML=`
    <div class="blog-hero">
      <p class="icf-overline" style="margin:0 0 14px" data-i18n>Insights</p>
      <h1 data-i18n>Coaching in action.</h1>
      <p data-i18n>Ideas, research and perspectives on the future of coaching, leadership, AI and diversity from ICF Switzerland.</p>
    </div>
    <div class="blog-toolbar" id="blogToolbar"></div>
    <div class="blog-grid" id="blogGrid"></div>`,S(),g()}function S(){const t=document.getElementById("blogToolbar");if(!t)return;const a=['<button class="blog-filter-chip active" data-cat="all" data-i18n>All</button>',...m.map(e=>`<button class="blog-filter-chip" data-cat="${n(e.id)}">${i(e.name)}</button>`)].join("");t.innerHTML=`
    <div class="blog-search">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--neutral-400)" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-3.5-3.5"></path></svg>
      <input type="text" id="blogSearch" placeholder="Search articles…" data-i18n-attr="placeholder">
    </div>
    ${a}`,document.getElementById("blogSearch").addEventListener("input",e=>{l=e.target.value.toLowerCase(),g()}),document.querySelectorAll("[data-cat]").forEach(e=>{e.addEventListener("click",()=>{document.querySelectorAll("[data-cat]").forEach(r=>r.classList.remove("active")),e.classList.add("active"),d=e.getAttribute("data-cat"),g()})})}function g(){const t=document.getElementById("blogGrid");if(!t)return;let a=h;if(d!=="all"&&(a=a.filter(e=>e.category_id===d)),l&&(a=a.filter(e=>e.title.toLowerCase().includes(l)||(e.excerpt||"").toLowerCase().includes(l)||(e.author||"").toLowerCase().includes(l))),a.length===0){t.innerHTML=`
      <div class="blog-empty">
        <h3 data-i18n>No articles found</h3>
        <p data-i18n>Try a different search or category filter.</p>
      </div>`;return}t.innerHTML=a.map(e=>{var p;const r=c,f=r===s?e.title:e[`title_${r}`]||e.title,b=r===s?e.excerpt:e[`excerpt_${r}`]||e.excerpt,v=e.featured_image_url?`<div class="blog-card-img"><img src="${n(e.featured_image_url)}" alt="${n(e.featured_image_alt||"")}" loading="lazy"></div>`:'<div class="blog-card-placeholder"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--text-subtle)" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/></svg></div>',y=e.published_at?new Date(e.published_at).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}):"";return`
      <a href="article.html?slug=${n(e.slug)}" class="blog-card">
        ${v}
        <div class="blog-card-body">
          <span class="blog-card-category">${i(((p=e.category)==null?void 0:p.name)||"")}</span>
          <span class="blog-card-title">${i(f)}</span>
          <span class="blog-card-excerpt">${i(b||"")}</span>
          <div class="blog-card-meta">
            <span>${i(e.author)}</span>
            <span class="dot"></span>
            <span>${y}</span>
          </div>
        </div>
      </a>`}).join("")}function i(t){return t?String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):""}function n(t){return t?String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}E();
