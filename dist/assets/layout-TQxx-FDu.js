import{d as l,L as n,e as r}from"./i18n-BFKUt1vx.js";const o=[{label:"Find a Coach",href:"find-a-coach.html"},{label:"For Organisations",href:"for-organisations.html"},{label:"For Coaches",href:"for-coaches.html"},{label:"Insights",href:"insights.html"},{label:"Events",href:"events.html"},{label:"About",href:"about.html"}];function s(i){const a=o.map(e=>`<a href="${e.href}" class="nav-link${e.label===i?" active":""}" data-i18n>${e.label}</a>`).join(""),t=n.map(e=>`<a href="#" data-lang-switch="${e}" class="${e==="en"?"active":""}">${r[e]}</a>`).join("");return`
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
          ${t}
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
  </header>`}function h(){return`
  <footer class="site-footer">
    <div class="footer-grid">
      <div>
        <img src="assets/logos/ICF_SwitzerlandCharterChapter_Vertical_RGB_White.png" alt="ICF Switzerland Charter Chapter" style="height:100px;margin-bottom:18px">
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
  </footer>`}function d(){const i=document.getElementById("mobileNavToggle"),a=document.getElementById("siteNav");i&&a&&i.addEventListener("click",()=>{a.classList.toggle("mobile-open")})}function f(i){const a=document.getElementById("header-slot"),t=document.getElementById("footer-slot");a&&(a.innerHTML=s(i)),t&&(t.innerHTML=h()),d(),l()}export{f as m};
