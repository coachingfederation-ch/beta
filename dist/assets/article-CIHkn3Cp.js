import"./supabase-client-BRH4RlQG.js";import{f as y,a as b,b as v}from"./cms-data-DZNgpiV_.js";import{m as x,g as $,a as w,S as p}from"./layout-ChKH-CxM.js";let S=null;async function _(){x("Insights");const r=new URLSearchParams(window.location.search).get("slug");if(!r){h();return}try{const e=await y(r);if(!e){h();return}S=e,await C(e)}catch{B()}}async function C(t){var i,g;document.title=`${t.title} — ICF Switzerland Insights`;const r=document.querySelector('meta[name="description"]');r&&r.setAttribute("content",t.excerpt||t.title);const e=await b(t.id),l=await v(t.id,t.category_id,3),n=$(),s=n!==p,o=t.featured_image_url?`<div class="article-hero-img"><img src="${u(t.featured_image_url)}" alt="${u(t.featured_image_alt||"")}"></div>`:"",d=e.length>0?`<div class="article-tags">${e.map(f=>`<span class="article-tag">${c(f.name)}</span>`).join("")}</div>`:"",m=t.published_at?new Date(t.published_at).toLocaleDateString("en-GB",{day:"numeric",month:"long",year:"numeric"}):"",a=document.getElementById("article-content");a.innerHTML=`
    <article class="article-detail">
      <div class="article-breadcrumb">
        <a href="insights.html">Insights</a>
        <span class="article-breadcrumb-sep">/</span>
        <span>${c(((i=t.category)==null?void 0:i.name)||"Article")}</span>
      </div>
      <span class="icf-overline article-category-label" data-i18n>${c(((g=t.category)==null?void 0:g.name)||"")}</span>
      <h1 class="article-title" data-i18n>${c(t.title)}</h1>
      <p class="article-excerpt" data-i18n>${c(t.excerpt)}</p>
      <div class="article-meta">
        <span class="article-author" data-i18n>By ${c(t.author)}</span>
        <span class="article-date">${m}</span>
      </div>
      ${o}
      <div class="article-body" data-i18n-body>${t.body||""}</div>
      ${d}
    </article>
    ${l.length>0?A(l):""}
    <div class="article-back">
      <a href="insights.html" class="btn btn-secondary btn-md" data-i18n>&larr; Back to Insights</a>
    </div>`,s&&await E(n),s&&w(n,a)}async function E(t){const r=document.querySelector(".article-title"),e=document.querySelector(".article-excerpt"),l=document.querySelector(".article-body"),n=document.querySelector(".article-category-label"),s=document.querySelector(".article-author"),o=[];r&&o.push(r.textContent.trim()),e&&o.push(e.textContent.trim()),n&&n.textContent.trim()&&o.push(n.textContent.trim()),s&&o.push(s.textContent.trim());const d=[];l&&l.querySelectorAll("p, h2, h3, li, blockquote").forEach(a=>{const i=a.textContent.trim();i&&d.push({el:a,text:i})});const m=[...o,...d.map(a=>a.text)];if(m.length!==0)try{const a=await translateStrings(m,p,t);let i=0;r&&(r.textContent=a[i++]),e&&(e.textContent=a[i++]),n&&n.textContent.trim()&&(n.textContent=a[i++]),s&&(s.textContent=a[i++]),d.forEach(({el:g})=>{g.textContent=a[i++]})}catch{}}function A(t){return`
    <section class="article-related">
      <h2 data-i18n>Related articles</h2>
      <div class="related-grid">${t.map(e=>{var s;const l=e.featured_image_url?`<div class="related-card-img"><img src="${u(e.featured_image_url)}" alt="${u(e.featured_image_alt||"")}" loading="lazy"></div>`:'<div class="related-card-img related-card-placeholder"><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--text-subtle)" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="M21 15l-5-5L5 21"/></svg></div>',n=e.published_at?new Date(e.published_at).toLocaleDateString("en-GB",{day:"numeric",month:"short"}):"";return`
      <a href="article.html?slug=${u(e.slug)}" class="related-card">
        ${l}
        <div class="related-card-body">
          <span class="icf-overline" data-i18n>${c(((s=e.category)==null?void 0:s.name)||"")}</span>
          <span class="related-card-title" data-i18n>${c(e.title)}</span>
          <span class="related-card-date">${n}</span>
        </div>
      </a>`}).join("")}</div>
    </section>`}function h(){document.getElementById("article-content").innerHTML=`
    <div class="article-not-found">
      <h1>Article not found</h1>
      <p>The article you are looking for may have been moved or is no longer available.</p>
      <a href="insights.html" class="btn btn-primary btn-md">Back to Insights</a>
    </div>`}function B(t){document.getElementById("article-content").innerHTML=`
    <div class="article-not-found">
      <h1>Something went wrong</h1>
      <p>We could not load this article. Please try again later.</p>
      <a href="insights.html" class="btn btn-primary btn-md">Back to Insights</a>
    </div>`}function c(t){return t?String(t).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):""}function u(t){return t?String(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}_();
