import"./supabase-client-Bm3kDcaW.js";import{f as y,a as v,b}from"./cms-data-Ci2-emH-.js";import{m as $,g as x,a as w,S as p,t as _}from"./layout-gl-hdcOQ.js";let S=null;async function C(){$("Insights");const n=new URLSearchParams(window.location.search).get("slug");if(!n){h();return}try{const e=await y(n);if(!e){h();return}S=e,await L(e)}catch{E()}}async function L(t){var m,g;document.title=`${t.title} — ICF Switzerland Insights`;const n=document.querySelector('meta[name="description"]');n&&n.setAttribute("content",t.excerpt||t.title);const e=await v(t.id),r=await b(t.id,t.category_id,3),a=x(),i=a!==p,s=t.featured_image_url?`<div class="article-hero-img"><img src="${d(t.featured_image_url)}" alt="${d(t.featured_image_alt||"")}"></div>`:"",l=e.length>0?`<div class="article-tags">${e.map(f=>`<span class="article-tag">${c(f.name)}</span>`).join("")}</div>`:"",o=t.published_at?new Date(t.published_at).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"}):"",u=document.getElementById("article-content");u.innerHTML=`
    <article class="article-detail">
      <div class="article-breadcrumb">
        <a href="insights.html" data-i18n>Insights</a>
        <span class="article-breadcrumb-sep">/</span>
        <span>${c(((m=t.category)==null?void 0:m.name)||"Article")}</span>
      </div>
      <span class="icf-overline article-category-label" data-i18n>${c(((g=t.category)==null?void 0:g.name)||"")}</span>
      <h1 class="article-title" data-i18n>${c(t.title)}</h1>
      <p class="article-excerpt" data-i18n>${c(t.excerpt)}</p>
      <div class="article-meta">
        <span class="article-author" data-i18n>By ${c(t.author)}</span>
        <span class="article-date">${o}</span>
      </div>
      ${s}
      <div class="article-body">${t.body||""}</div>
      ${l}
      <div class="article-back">
        <a href="insights.html" class="btn btn-secondary btn-md" data-i18n>&larr; Back to Insights</a>
      </div>
    </article>
    ${r.length>0?B(r):""}`,i&&await A(a),i&&w(a,u)}async function A(t){const n=document.querySelector(".article-title"),e=document.querySelector(".article-excerpt"),r=document.querySelector(".article-body"),a=document.querySelector(".article-category-label"),i=document.querySelector(".article-author"),s=[];if(n&&s.push(n.textContent.trim()),e&&s.push(e.textContent.trim()),a&&a.textContent.trim()&&s.push(a.textContent.trim()),i&&s.push(i.textContent.trim()),r&&r.innerHTML.trim()&&s.push(r.innerHTML.trim()),s.length!==0)try{const l=await _(s,p,t);let o=0;n&&(n.textContent=l[o++]),e&&(e.textContent=l[o++]),a&&a.textContent.trim()&&(a.textContent=l[o++]),i&&(i.textContent=l[o++]),r&&r.innerHTML.trim()&&(r.innerHTML=l[o++])}catch{}}function B(t){return`
    <section class="article-related">
      <h2 data-i18n>Related articles</h2>
      <div class="related-grid">${t.map(e=>{var i;const r=e.featured_image_url?`<div class="related-card-img"><img src="${d(e.featured_image_url)}" alt="${d(e.featured_image_alt||"")}" loading="lazy"></div>`:'<div class="related-card-img related-card-placeholder"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--text-subtle)" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/></svg></div>',a=e.published_at?new Date(e.published_at).toLocaleDateString("en-GB",{day:"numeric",month:"short"}):"";return`
      <a href="article.html?slug=${d(e.slug)}" class="related-card">
        ${r}
        <div class="related-card-body">
          <span class="icf-overline" data-i18n>${c(((i=e.category)==null?void 0:i.name)||"")}</span>
          <span class="related-card-title" data-i18n>${c(e.title)}</span>
          <span class="related-card-date">${a}</span>
        </div>
      </a>`}).join("")}</div>
    </section>`}function h(){document.getElementById("article-content").innerHTML=`
    <div class="article-not-found">
      <h1>Article not found</h1>
      <p>The article you are looking for may have been moved or is no longer available.</p>
      <a href="insights.html" class="btn btn-primary btn-md">Back to Insights</a>
    </div>`}function E(t){document.getElementById("article-content").innerHTML=`
    <div class="article-not-found">
      <h1>Something went wrong</h1>
      <p>We could not load this article. Please try again later.</p>
      <a href="insights.html" class="btn btn-primary btn-md">Back to Insights</a>
    </div>`}function c(t){return t?String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):""}function d(t){return t?String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}C();
