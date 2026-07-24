(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(e){if(e.ep)return;e.ep=!0;const i=t(e);fetch(e.href,i)}})();const s=[{label:"Find a Coach",href:"find-a-coach.html"},{label:"For Organisations",href:"for-organisations.html"},{label:"For Coaches",href:"for-coaches.html"},{label:"Insights",href:"insights.html"},{label:"Events",href:"events.html"},{label:"About",href:"about.html"}];function n(r){return`
  <header class="site-header">
    <div class="site-header-inner">
      <a href="index.html" style="display:flex;align-items:center;flex:none" aria-label="ICF Switzerland home">
        <img src="assets/logos/icf-switzerland-vertical-positive.png" alt="ICF Switzerland" style="height:52px">
      </a>
      <nav class="site-nav" id="siteNav">
        ${s.map(t=>`<a href="${t.href}" class="nav-link${t.label===r?" active":""}">${t.label}</a>`).join("")}
      </nav>
      <div class="header-actions">
        <span class="lang-switcher">
          <a href="#" class="active">EN</a>
          <a href="#">DE</a>
          <a href="#">FR</a>
          <a href="#">IT</a>
        </span>
        <a href="#" class="icon-btn" aria-label="Search">
          <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-3.5-3.5"></path></svg>
        </a>
        <a href="#" class="member-login">Member Login</a>
        <a href="about.html" class="btn btn-primary btn-sm">Join</a>
        <button class="mobile-nav-toggle" id="mobileNavToggle" aria-label="Toggle menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>
    </div>
  </header>`}function h(){return`
  <footer class="site-footer">
    <div class="footer-grid">
      <div>
        <img src="assets/logos/icf-switzerland-vertical-white.png" alt="ICF Switzerland" style="height:90px;margin-bottom:18px">
        <p style="font-size:14px;line-height:1.7;max-width:280px;margin:0 0 20px;color:var(--icf-indigo-200)">Building a more human future through professional coaching.</p>
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
        <h4>Find a Coach</h4>
        <ul>
          <li><a href="find-a-coach.html">Coach Directory</a></li>
          <li><a href="#">Why an ICF Coach?</a></li>
          <li><a href="#">What is Coaching?</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
      </div>
      <div>
        <h4>Organisations</h4>
        <ul>
          <li><a href="for-organisations.html">Why Coaching?</a></li>
          <li><a href="#">Executive Coaching</a></li>
          <li><a href="#">Team Coaching</a></li>
          <li><a href="#">Case Studies</a></li>
        </ul>
      </div>
      <div>
        <h4>For Coaches</h4>
        <ul>
          <li><a href="for-coaches.html">Membership</a></li>
          <li><a href="#">Credentials</a></li>
          <li><a href="#">Communities</a></li>
          <li><a href="#">Mentoring &amp; Supervision</a></li>
        </ul>
      </div>
      <div>
        <h4>About</h4>
        <ul>
          <li><a href="about.html">Our Vision</a></li>
          <li><a href="#">Board</a></li>
          <li><a href="#">Partnerships</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="footer-bottom-inner">
        <span>&copy; 2026 ICF Switzerland Charter Chapter</span>
        <span style="display:flex;gap:14px;align-items:center">
          <a href="#">Deutsch</a>
          <a href="#">Français</a>
          <a href="#">Italiano</a>
          <a href="#" style="color:#fff">English</a>
        </span>
        <span style="display:flex;gap:22px">
          <a href="#">Privacy</a>
          <a href="#">Code of Ethics</a>
          <a href="#">Imprint</a>
        </span>
      </div>
    </div>
  </footer>`}function c(){const r=document.getElementById("mobileNavToggle"),a=document.getElementById("siteNav");r&&a&&r.addEventListener("click",()=>{a.classList.toggle("mobile-open")})}function f(r){const a=document.getElementById("header-slot"),t=document.getElementById("footer-slot");a&&(a.innerHTML=n(r)),t&&(t.innerHTML=h()),c()}export{f as m};
