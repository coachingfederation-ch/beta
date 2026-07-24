import{g as y,a as b,S as $}from"./i18n-BbZBq89F.js";import{f as _,l as u,a as w,b as A}from"./cms-data-De5lQQyV.js";import{m as B}from"./layout-CN1KT62u.js";let I=null;async function L(){B("Insights");const n=new URLSearchParams(window.location.search).get("slug");if(!n){m();return}try{const e=await _(n);if(!e){m();return}I=e;const r=y(),l=u(e,r);await S(l,r)}catch{k()}}async function S(t,n){var o,g;document.title=`${t.title} — ICF Switzerland Insights`;const e=document.querySelector('meta[name="description"]');e&&e.setAttribute("content",t.excerpt||t.title);const r=await w(t.id),i=(await A(t.id,t.category_id,3)).map(c=>u(c,n)),h=n!==$,p=t.featured_image_url?`<div class="article-hero-img"><img src="${s(t.featured_image_url)}" alt="${s(t.featured_image_alt||"")}"></div>`:"",f=r.length>0?`<div class="article-tags">${r.map(c=>`<span class="article-tag">${a(c.name)}</span>`).join("")}</div>`:"",v=t.published_at?new Date(t.published_at).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"}):"",d=document.getElementById("article-content");d.innerHTML=`
    <article class="article-detail">
      <div class="article-breadcrumb">
        <a href="insights.html" data-i18n>Insights</a>
        <span class="article-breadcrumb-sep">/</span>
        <span>${a(((o=t.category)==null?void 0:o.name)||"Article")}</span>
      </div>
      <span class="icf-overline article-category-label" data-i18n>${a(((g=t.category)==null?void 0:g.name)||"")}</span>
      <h1 class="article-title" data-i18n>${a(t.title)}</h1>
      <p class="article-excerpt" data-i18n>${a(t.excerpt)}</p>
      <div class="article-meta">
        <span class="article-author" data-i18n>By ${a(t.author)}</span>
        <span class="article-date">${v}</span>
      </div>
      ${p}
      <div class="article-body">${t.body||""}</div>
      ${f}
      <div class="article-back">
        <a href="insights.html" class="btn btn-secondary btn-md" data-i18n>&larr; Back to Insights</a>
      </div>
    </article>
    ${i.length>0?x(i):""}`,h&&b(n,d)}function x(t){return`
    <section class="article-related">
      <h2 data-i18n>Related articles</h2>
      <div class="related-grid">${t.map(e=>{var i;const r=e.featured_image_url?`<div class="related-card-img"><img src="${s(e.featured_image_url)}" alt="${s(e.featured_image_alt||"")}" loading="lazy"></div>`:'<div class="related-card-img related-card-placeholder"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--text-subtle)" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/></svg></div>',l=e.published_at?new Date(e.published_at).toLocaleDateString("en-GB",{day:"numeric",month:"short"}):"";return`
      <a href="article.html?slug=${s(e.slug)}" class="related-card">
        ${r}
        <div class="related-card-body">
          <span class="icf-overline" data-i18n>${a(((i=e.category)==null?void 0:i.name)||"")}</span>
          <span class="related-card-title" data-i18n>${a(e.title)}</span>
          <span class="related-card-date">${l}</span>
        </div>
      </a>`}).join("")}</div>
    </section>`}function m(){document.getElementById("article-content").innerHTML=`
    <div class="article-not-found">
      <h1>Article not found</h1>
      <p>The article you are looking for may have been moved or is no longer available.</p>
      <a href="insights.html" class="btn btn-primary btn-md">Back to Insights</a>
    </div>`}function k(t){document.getElementById("article-content").innerHTML=`
    <div class="article-not-found">
      <h1>Something went wrong</h1>
      <p>We could not load this article. Please try again later.</p>
      <a href="insights.html" class="btn btn-primary btn-md">Back to Insights</a>
    </div>`}function a(t){return t?String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):""}function s(t){return t?String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}L();
