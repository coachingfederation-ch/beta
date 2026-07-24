import{S as u,g as L,a as S}from"./i18n-DhmHtJmC.js";import{t as w,d as x}from"./cms-data-Dv1XtWfd.js";import{m as E}from"./layout-B9y2-MiL.js";let f=[],v=[],o="all",i="",s=u;async function $(){E("Insights");const e=document.getElementById("blog-content");try{const[a,t]=await Promise.all([w(),x()]);v=t,s=L(),f=a,h(e),await g()}catch{e.innerHTML=`
      <div class="blog-empty">
        <h3 data-i18n>Could not load articles</h3>
        <p data-i18n>Please try again later.</p>
      </div>`,await g()}document.addEventListener("icf:langchange",a=>{s=a.detail.lang,h(document.getElementById("blog-content")),g()})}async function g(){await S(s,document.getElementById("blog-content"))}function h(e){e.innerHTML=`
    <div class="blog-hero">
      <p class="icf-overline" style="margin:0 0 14px" data-i18n>Insights</p>
      <h1 data-i18n>Coaching in action.</h1>
      <p data-i18n>Ideas, research and perspectives on the future of coaching, leadership, AI and diversity from ICF Switzerland.</p>
    </div>
    <div class="blog-toolbar" id="blogToolbar"></div>
    <div class="blog-grid" id="blogGrid"></div>`,C(),p()}function C(){const e=document.getElementById("blogToolbar");if(!e)return;const a=['<button class="blog-filter-chip active" data-cat="all" data-i18n>All</button>',...v.map(t=>`<button class="blog-filter-chip" data-cat="${c(t.id)}">${n(t.name)}</button>`)].join("");e.innerHTML=`
    <div class="blog-search">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--neutral-400)" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-3.5-3.5"></path></svg>
      <input type="text" id="blogSearch" placeholder="Search articles…" data-i18n-attr="placeholder">
    </div>
    ${a}`,document.getElementById("blogSearch").addEventListener("input",t=>{if(i=t.target.value.toLowerCase().trim(),i){o="all",document.querySelectorAll("[data-cat]").forEach(l=>l.classList.remove("active"));const r=document.querySelector('[data-cat="all"]');r&&r.classList.add("active")}p()}),document.querySelectorAll("[data-cat]").forEach(t=>{t.addEventListener("click",()=>{document.querySelectorAll("[data-cat]").forEach(l=>l.classList.remove("active")),t.classList.add("active"),o=t.getAttribute("data-cat"),i="";const r=document.getElementById("blogSearch");r&&(r.value=""),p()})})}function p(){const e=document.getElementById("blogGrid");if(!e)return;let a=f;if(o!=="all"&&(a=a.filter(t=>String(t.category_id||"").trim()===String(o).trim())),i&&(a=a.filter(t=>{const r=String(t.title||"").toLowerCase().trim(),l=String(t.excerpt||"").toLowerCase().trim(),d=String(t.body||"").toLowerCase().trim();return r.includes(i)||l.includes(i)||d.includes(i)})),a.length===0){e.innerHTML=`
      <div class="blog-empty">
        <h3 data-i18n>No articles found</h3>
        <p data-i18n>Try a different search or category filter.</p>
      </div>`;return}e.innerHTML=a.map(t=>{var m;const r=s,l=r===u?t.title:t[`title_${r}`]||t.title,d=r===u?t.excerpt:t[`excerpt_${r}`]||t.excerpt,b=t.featured_image_url?`<div class="blog-card-img"><img src="${c(t.featured_image_url)}" alt="${c(t.featured_image_alt||"")}" loading="lazy"></div>`:'<div class="blog-card-placeholder"><svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--text-subtle)" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/></svg></div>',y=t.published_at?new Date(t.published_at).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}):"";return`
      <a href="article.html?slug=${c(t.slug)}" class="blog-card">
        ${b}
        <div class="blog-card-body">
          <span class="blog-card-category">${n(((m=t.category)==null?void 0:m.name)||"")}</span>
          <span class="blog-card-title">${n(l)}</span>
          <span class="blog-card-excerpt">${n(d||"")}</span>
          <div class="blog-card-meta">
            <span>${n(t.author)}</span>
            <span class="dot"></span>
            <span>${y}</span>
          </div>
        </div>
      </a>`}).join("")}function n(e){return e?String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):""}function c(e){return e?String(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}$();
