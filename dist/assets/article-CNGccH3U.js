import{g as w,a as u,S as _}from"./i18n-CLQBegKv.js";import{f as L,l as h,a as A,b as B}from"./cms-data-TbRm3rQQ.js";import{m as I}from"./layout-D8U7-DMP.js";let d=null;async function S(){I("Insights");const t=new URLSearchParams(window.location.search).get("slug");if(!t){f();return}try{const e=await L(t);if(!e){f();return}d=e,await p(w())}catch{k()}document.addEventListener("icf:langchange",e=>{d&&p(e.detail.lang)})}async function p(a){var g,m;const t=h(d,a);document.title=`${t.title} — ICF Switzerland Insights`;const e=document.querySelector('meta[name="description"]');e&&e.setAttribute("content",t.excerpt||t.title);const c=await A(t.id),r=(await B(t.id,t.category_id,3)).map(s=>h(s,a)),v=a!==_,y=t.featured_image_url?`<div class="article-hero-img"><img src="${n(t.featured_image_url)}" alt="${n(t.featured_image_alt||"")}"></div>`:"",b=c.length>0?`<div class="article-tags">${c.map(s=>`<span class="article-tag">${i(s.name)}</span>`).join("")}</div>`:"",$=t.published_at?new Date(t.published_at).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"}):"",l=document.getElementById("article-content");l.innerHTML=`
    <article class="article-detail">
      <div class="article-breadcrumb">
        <a href="insights.html" data-i18n>Insights</a>
        <span class="article-breadcrumb-sep">/</span>
        <span>${i(((g=t.category)==null?void 0:g.name)||"Article")}</span>
      </div>
      <span class="icf-overline article-category-label">${i(((m=t.category)==null?void 0:m.name)||"")}</span>
      <h1 class="article-title">${i(t.title)}</h1>
      <p class="article-excerpt">${i(t.excerpt)}</p>
      <div class="article-meta">
        <span class="article-author"><span data-i18n>By</span> ${i(t.author)}</span>
        <span class="article-date">${$}</span>
      </div>
      ${y}
      <div class="article-body">${t.body||""}</div>
      ${b}
      <div class="article-back">
        <a href="insights.html" class="btn btn-secondary btn-md" data-i18n>&larr; Back to Insights</a>
      </div>
    </article>
    ${r.length>0?x(r):""}`,v?await u(a,l):await u(a,l)}function x(a){return`
    <section class="article-related">
      <h2 data-i18n>Related articles</h2>
      <div class="related-grid">${a.map(e=>{var r;const c=e.featured_image_url?`<div class="related-card-img"><img src="${n(e.featured_image_url)}" alt="${n(e.featured_image_alt||"")}" loading="lazy"></div>`:'<div class="related-card-img related-card-placeholder"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--text-subtle)" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/></svg></div>',o=e.published_at?new Date(e.published_at).toLocaleDateString("en-GB",{day:"numeric",month:"short"}):"";return`
      <a href="article.html?slug=${n(e.slug)}" class="related-card">
        ${c}
        <div class="related-card-body">
          <span class="icf-overline">${i(((r=e.category)==null?void 0:r.name)||"")}</span>
          <span class="related-card-title">${i(e.title)}</span>
          <span class="related-card-date">${o}</span>
        </div>
      </a>`}).join("")}</div>
    </section>`}function f(){document.getElementById("article-content").innerHTML=`
    <div class="article-not-found">
      <h1 data-i18n>Article not found</h1>
      <p data-i18n>The article you are looking for may have been moved or is no longer available.</p>
      <a href="insights.html" class="btn btn-primary btn-md" data-i18n>Back to Insights</a>
    </div>`}function k(){document.getElementById("article-content").innerHTML=`
    <div class="article-not-found">
      <h1 data-i18n>Something went wrong</h1>
      <p data-i18n>We could not load this article. Please try again later.</p>
      <a href="insights.html" class="btn btn-primary btn-md" data-i18n>Back to Insights</a>
    </div>`}function i(a){return a?String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):""}function n(a){return a?String(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}S();
