import{g as b,a as $}from"./i18n-DhmHtJmC.js";import{f as w,l as u,a as _,b as B}from"./cms-data-BFiXKvjS.js";import{m as I}from"./layout-B9y2-MiL.js";let s=null;async function L(){I("Insights");const t=new URLSearchParams(window.location.search).get("slug");if(!t){p();return}try{const e=await w(t);if(!e){p();return}s=e,await h(b())}catch{S()}document.addEventListener("icf:langchange",e=>{s&&h(e.detail.lang)})}async function h(a){var g,m;const t=u(s,a);document.title=`${t.title} — ICF Switzerland Insights`;const e=document.querySelector('meta[name="description"]');e&&e.setAttribute("content",t.excerpt||t.title);const c=await _(t.id),i=(await B(t.id,t.category_id,3)).map(l=>u(l,a)),f=t.featured_image_url?`<div class="article-hero-img"><img src="${n(t.featured_image_url)}" alt="${n(t.featured_image_alt||"")}"></div>`:"",v=c.length>0?`<div class="article-tags">${c.map(l=>`<span class="article-tag">${r(l.name)}</span>`).join("")}</div>`:"",y=t.published_at?new Date(t.published_at).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"}):"",o=document.getElementById("article-content");o.innerHTML=`
    <article class="article-detail">
      <div class="article-breadcrumb">
        <a href="insights.html" data-i18n>Insights</a>
        <span class="article-breadcrumb-sep">/</span>
        <span>${r(((g=t.category)==null?void 0:g.name)||"Article")}</span>
      </div>
      <span class="icf-overline article-category-label">${r(((m=t.category)==null?void 0:m.name)||"")}</span>
      <h1 class="article-title">${r(t.title)}</h1>
      <p class="article-excerpt">${r(t.excerpt)}</p>
      <div class="article-meta">
        <span class="article-author"><span data-i18n>By</span> ${r(t.author)}</span>
        <span class="article-date">${y}</span>
      </div>
      ${f}
      <div class="article-body">${t.body||""}</div>
      ${v}
      <div class="article-back">
        <a href="insights.html" class="btn btn-secondary btn-md" data-i18n>&larr; Back to Insights</a>
      </div>
    </article>
    ${i.length>0?A(i):""}`,await $(a,o)}function A(a){return`
    <section class="article-related">
      <h2 data-i18n>Related articles</h2>
      <div class="related-grid">${a.map(e=>{var i;const c=e.featured_image_url?`<div class="related-card-img"><img src="${n(e.featured_image_url)}" alt="${n(e.featured_image_alt||"")}" loading="lazy"></div>`:'<div class="related-card-img related-card-placeholder"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--text-subtle)" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/></svg></div>',d=e.published_at?new Date(e.published_at).toLocaleDateString("en-GB",{day:"numeric",month:"short"}):"";return`
      <a href="article.html?slug=${n(e.slug)}" class="related-card">
        ${c}
        <div class="related-card-body">
          <span class="icf-overline">${r(((i=e.category)==null?void 0:i.name)||"")}</span>
          <span class="related-card-title">${r(e.title)}</span>
          <span class="related-card-date">${d}</span>
        </div>
      </a>`}).join("")}</div>
    </section>`}function p(){document.getElementById("article-content").innerHTML=`
    <div class="article-not-found">
      <h1 data-i18n>Article not found</h1>
      <p data-i18n>The article you are looking for may have been moved or is no longer available.</p>
      <a href="insights.html" class="btn btn-primary btn-md" data-i18n>Back to Insights</a>
    </div>`}function S(){document.getElementById("article-content").innerHTML=`
    <div class="article-not-found">
      <h1 data-i18n>Something went wrong</h1>
      <p data-i18n>We could not load this article. Please try again later.</p>
      <a href="insights.html" class="btn btn-primary btn-md" data-i18n>Back to Insights</a>
    </div>`}function r(a){return a?String(a).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):""}function n(a){return a?String(a).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}L();
