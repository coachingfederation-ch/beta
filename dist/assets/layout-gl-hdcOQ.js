import"./supabase-client-Bm3kDcaW.js";const m=["en","de","fr","it"],N={en:"EN",de:"DE",fr:"FR",it:"IT"},g="en",C="icf-lang",w="icf-i18n-",F="https://ebsyhiznjvrnsdbzqrjl.supabase.co/functions/v1/translate",B={Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVic3loaXpuanZybnNkYnpxcmpsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ4MzQ5NTcsImV4cCI6MjEwMDQxMDk1N30.ajMMKWI7ZNO9tmoWz2QZSvATzxjrAa_AaNBFkIdVmNo","Content-Type":"application/json"},p=30;function T(){const t=localStorage.getItem(C);return t&&m.includes(t)?t:g}function z(t){localStorage.setItem(C,t)}function E(t){const a=w+t;try{const e=sessionStorage.getItem(a);return e?new Map(JSON.parse(e)):new Map}catch{return new Map}}function O(t,a){try{sessionStorage.setItem(w+t,JSON.stringify([...a]))}catch{}}async function $(t,a,e){if(!t||t.length===0)return[];if(a===e)return[...t];const i=E(e),n=new Array(t.length),o=[],s=[];if(t.forEach((r,c)=>{typeof r=="string"&&r.length>0&&i.has(r)?n[c]=i.get(r):typeof r=="string"&&r.length>0?(n[c]=r,o.push(c),s.push(r)):n[c]=r}),s.length===0)return n;try{const r=await fetch(F,{method:"POST",headers:B,body:JSON.stringify({source_lang:a,target_lang:e,texts:s})});if(!r.ok)throw new Error(`translate failed (${r.status})`);const c=await r.json();if(!Array.isArray(c.translations)||c.translations.length!==s.length)throw new Error("translate response shape mismatch");return o.forEach((f,l)=>{n[f]=c.translations[l],i.set(s[l],c.translations[l])}),O(e,i),n}catch(r){return console.warn("i18n: translation fell back to source text",r),[...t]}}function q(t){const e=(t||document).querySelectorAll("[data-i18n], [data-i18n-attr]"),i=[],n=new Set;return e.forEach(o=>{if(o.hasAttribute("data-i18n")){const s=o.getAttribute("data-i18n-original")||o.textContent.trim();o.hasAttribute("data-i18n-original")||o.setAttribute("data-i18n-original",s),s&&!n.has(s)?(i.push({el:o,kind:"text",original:s}),n.add(s)):s&&i.push({el:o,kind:"text-ref",original:s})}o.hasAttribute("data-i18n-attr")&&o.getAttribute("data-i18n-attr").split(",").map(r=>r.trim()).filter(Boolean).forEach(r=>{const c=o.getAttribute(`data-i18n-${r}-original`)||o.getAttribute(r)||"";o.hasAttribute(`data-i18n-${r}-original`)||o.setAttribute(`data-i18n-${r}-original`,c),c&&!n.has(c)?(i.push({el:o,kind:"attr",attr:r,original:c}),n.add(c)):c&&i.push({el:o,kind:"attr-ref",attr:r,original:c})})}),i}let d=null;function L(){d||(d=document.createElement("div"),d.id="i18n-indicator",d.setAttribute("aria-live","polite"),d.textContent="Translating…",document.body.appendChild(d),requestAnimationFrame(()=>d==null?void 0:d.classList.add("visible")))}function b(){if(!d)return;d.classList.remove("visible");const t=d;d=null,setTimeout(()=>t.remove(),300)}function v(t,a){t.forEach(e=>{const i=a.get(e.original)||e.original;e.kind==="text"||e.kind==="text-ref"?e.el.textContent=i:(e.kind==="attr"||e.kind==="attr-ref")&&e.el.setAttribute(e.attr,i)})}async function S(t,a){if(t===g){_(a),document.documentElement.setAttribute("lang",g);return}const e=q(a),i=document.querySelector("title");i&&!i.hasAttribute("data-i18n-original")&&i.setAttribute("data-i18n-original",i.textContent.trim());const n=document.querySelector('meta[name="description"]');n&&!n.hasAttribute("data-i18n-original")&&n.setAttribute("data-i18n-original",n.getAttribute("content")||"");const o=[];i&&o.push(i.getAttribute("data-i18n-original")),n&&o.push(n.getAttribute("data-i18n-original"));const s=[...o.filter(Boolean),...e.filter(l=>l.kind==="text"||l.kind==="attr").map(l=>l.original)];if(s.length===0){document.documentElement.setAttribute("lang",t);return}L();const r=E(t);if(s.every(l=>r.has(l))){const l=new Map;s.forEach(u=>l.set(u,r.get(u))),y(i,n,o,l),v(e,l),document.documentElement.setAttribute("lang",t),b();return}const f=new Map;for(let l=0;l<s.length;l+=p){const u=s.slice(l,l+p),I=await $(u,g,t);u.forEach((h,M)=>f.set(h,I[M])),l===0&&y(i,n,o,f);const k=e.filter(h=>f.has(h.original));v(k,f);for(let h=e.length-1;h>=0;h--)f.has(e[h].original)&&e.splice(h,1)}document.documentElement.setAttribute("lang",t),b()}function y(t,a,e,i){let n=0;t&&e[0]&&(t.textContent=i.get(e[0])||e[0],n=1),a&&e[n]&&a.setAttribute("content",i.get(e[n])||e[n])}function _(t){const a=t||document;a.querySelectorAll("[data-i18n]").forEach(n=>{const o=n.getAttribute("data-i18n-original");o!=null&&(n.textContent=o)}),a.querySelectorAll("[data-i18n-attr]").forEach(n=>{n.getAttribute("data-i18n-attr").split(",").map(s=>s.trim()).filter(Boolean).forEach(s=>{const r=n.getAttribute(`data-i18n-${s}-original`);r!=null&&n.setAttribute(s,r)})});const e=document.querySelector("title");e&&e.hasAttribute("data-i18n-original")&&(e.textContent=e.getAttribute("data-i18n-original"));const i=document.querySelector('meta[name="description"]');i&&i.hasAttribute("data-i18n-original")&&i.setAttribute("content",i.getAttribute("data-i18n-original"))}function x(t){document.querySelectorAll("[data-lang-switch]").forEach(a=>{a.classList.toggle("active",a.getAttribute("data-lang-switch")===t)}),document.querySelectorAll("[data-lang-footer]").forEach(a=>{const e=a.getAttribute("data-lang-footer")===t;a.style.color=e?"#fff":"",a.style.fontWeight=e?"600":""})}async function A(t){m.includes(t)&&(z(t),x(t),await S(t),document.dispatchEvent(new CustomEvent("icf:langchange",{detail:{lang:t}})))}function J(){const t=T();document.querySelectorAll("[data-lang-switch]").forEach(a=>{a.addEventListener("click",e=>{e.preventDefault(),A(a.getAttribute("data-lang-switch"))})}),document.querySelectorAll("[data-lang-footer]").forEach(a=>{a.addEventListener("click",e=>{e.preventDefault(),A(a.getAttribute("data-lang-footer"))})}),x(t),t!==g&&S(t)}const Z=[{label:"Find a Coach",href:"find-a-coach.html"},{label:"For Organisations",href:"for-organisations.html"},{label:"For Coaches",href:"for-coaches.html"},{label:"Insights",href:"insights.html"},{label:"Events",href:"events.html"},{label:"About",href:"about.html"}];function H(t){const a=Z.map(i=>`<a href="${i.href}" class="nav-link${i.label===t?" active":""}" data-i18n>${i.label}</a>`).join(""),e=m.map(i=>`<a href="#" data-lang-switch="${i}" class="${i==="en"?"active":""}">${N[i]}</a>`).join("");return`
  <header class="site-header">
    <div class="site-header-inner">
      <a href="index.html" style="display:flex;align-items:center;flex:none" aria-label="ICF Switzerland home">
        <img src="assets/logos/ICF_SwitzerlandCharterChapter_Horizontal_RGB_Positive.png" alt="ICF Switzerland Charter Chapter" style="height:40px">
      </a>
      <nav class="site-nav" id="siteNav">
        ${a}
      </nav>
      <div class="header-actions">
        <span class="lang-switcher">
          ${e}
        </span>
        <a href="#" class="icon-btn" aria-label="Search" data-i18n-attr="aria-label">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-3.5-3.5"></path></svg>
        </a>
        <a href="#" class="member-login" data-i18n>Member Login</a>
        <a href="about.html" class="btn btn-primary btn-sm" data-i18n>Join</a>
        <button class="mobile-nav-toggle" id="mobileNavToggle" aria-label="Toggle menu" data-i18n-attr="aria-label">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>
    </div>
  </header>`}function V(){return`
  <footer class="site-footer">
    <div class="footer-grid">
      <div>
        <img src="assets/logos/icf-switzerland-vertical-white.png" alt="ICF Switzerland" style="height:90px;margin-bottom:18px">
        <p style="font-size:14px;line-height:1.7;max-width:280px;margin:0 0 20px;color:var(--icf-indigo-200)" data-i18n>Building a more human future through professional coaching.</p>
        <div style="display:flex;gap:10px">
          <a href="#" class="social-link" aria-label="LinkedIn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5ZM.2 8h4.6v14.5H.2V8Zm7.4 0h4.4v2h.06c.6-1.15 2.1-2.36 4.34-2.36 4.64 0 5.5 3.06 5.5 7.04v7.82h-4.6v-6.94c0-1.66-.03-3.8-2.3-3.8-2.3 0-2.66 1.8-2.66 3.67v7.07H7.6V8Z"></path></svg>
          </a>
          <a href="#" class="social-link" aria-label="Instagram">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2.5" y="2.5" width="19" height="19" rx="5"></rect><circle cx="12" cy="12" r="4.5"></circle><circle cx="17.6" cy="6.4" r="1.2" fill="currentColor" stroke="none"></circle></svg>
          </a>
          <a href="#" class="social-link" aria-label="YouTube">
            <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.2s-.22-1.56-.9-2.24c-.86-.9-1.82-.9-2.26-.96C16.7 3.78 12 3.78 12 3.78h-.01s-4.7 0-7.84.22c-.44.06-1.4.06-2.26.96C1.21 5.64 1 7.2 1 7.2S.78 9.03.78 10.87v1.7C.78 14.4 1 16.24 1 16.24s.21 1.56.89 2.24c.86.9 2 .87 2.5.97 1.8.17 7.61.22 7.61.22s4.71-.01 7.85-.23c.44-.05 1.4-.06 2.26-.96.68-.68.9-2.24.9-2.24s.21-1.83.21-3.67v-1.7C23.21 9.03 23 7.2 23 7.2ZM9.68 14.85V8.5l6.06 3.19-6.06 3.16Z"></path></svg>
          </a>
        </div>
      </div>
      <div>
        <h4 data-i18n>Find a Coach</h4>
        <ul>
          <li><a href="find-a-coach.html" data-i18n>Coach Directory</a></li>
          <li><a href="#" data-i18n>Why an ICF Coach?</a></li>
          <li><a href="#" data-i18n>What is Coaching?</a></li>
          <li><a href="#" data-i18n>FAQs</a></li>
        </ul>
      </div>
      <div>
        <h4 data-i18n>Organisations</h4>
        <ul>
          <li><a href="for-organisations.html" data-i18n>Why Coaching?</a></li>
          <li><a href="#" data-i18n>Executive Coaching</a></li>
          <li><a href="#" data-i18n>Team Coaching</a></li>
          <li><a href="#" data-i18n>Case Studies</a></li>
        </ul>
      </div>
      <div>
        <h4 data-i18n>For Coaches</h4>
        <ul>
          <li><a href="for-coaches.html" data-i18n>Membership</a></li>
          <li><a href="#" data-i18n>Credentials</a></li>
          <li><a href="#" data-i18n>Communities</a></li>
          <li><a href="#" data-i18n>Mentoring &amp; Supervision</a></li>
        </ul>
      </div>
      <div>
        <h4 data-i18n>About</h4>
        <ul>
          <li><a href="about.html" data-i18n>Our Vision</a></li>
          <li><a href="#" data-i18n>Board</a></li>
          <li><a href="#" data-i18n>Partnerships</a></li>
          <li><a href="#" data-i18n>Contact</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-bottom-inner">
        <span data-i18n>&copy; 2026 ICF Switzerland Charter Chapter</span>
        <span style="display:flex;gap:14px;align-items:center">
          <a href="#" data-lang-footer="de">Deutsch</a>
          <a href="#" data-lang-footer="fr">Français</a>
          <a href="#" data-lang-footer="it">Italiano</a>
          <a href="#" data-lang-footer="en" style="color:#fff">English</a>
        </span>
        <span style="display:flex;gap:22px">
          <a href="#" data-i18n>Privacy</a>
          <a href="#" data-i18n>Code of Ethics</a>
          <a href="#" data-i18n>Imprint</a>
        </span>
      </div>
    </div>
  </footer>`}function j(){const t=document.getElementById("mobileNavToggle"),a=document.getElementById("siteNav");t&&a&&t.addEventListener("click",()=>{a.classList.toggle("mobile-open")})}function R(t){const a=document.getElementById("header-slot"),e=document.getElementById("footer-slot");a&&(a.innerHTML=H(t)),e&&(e.innerHTML=V()),j(),J()}export{g as S,S as a,T as g,R as m,$ as t};
