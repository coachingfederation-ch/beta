import{s as k,t as ne,S as G}from"./i18n-DhmHtJmC.js";import{c as be,d as se,e as ie,g as we,h as Ce,i as xe,j as Ie,k as Ee,m as ke,n as re,o as Te,a as Se,u as Le,p as $,s as Be,q as oe,r as Me}from"./cms-data-Dv1XtWfd.js";const le="coachingfederation.ch";async function Ae(){const e=`${window.location.origin}${window.location.pathname}`;await k.auth.signInWithOAuth({provider:"google",options:{redirectTo:e,queryParams:{hd:le}}})}async function $e(){await k.auth.signOut()}function ce(e){return e?e.toLowerCase().endsWith(`@${le}`):!1}async function de(){var o,r;const{data:{session:e}}=await k.auth.getSession();if(!e)return null;const a=e.user,t=(a==null?void 0:a.email)||"";if(!ce(t))return await k.auth.signOut(),null;const n=((o=a==null?void 0:a.user_metadata)==null?void 0:o.full_name)||((r=a==null?void 0:a.user_metadata)==null?void 0:r.name)||t.split("@")[0],i=n.split(" ").filter(Boolean).slice(0,2).map(l=>l[0].toUpperCase()).join("");return{email:t,name:n,initials:i||"ED",id:a.id}}function _e(e){return k.auth.onAuthStateChange((a,t)=>{(async()=>{var o;if(!t){e(null);return}const n=((o=t.user)==null?void 0:o.email)||"";if(!ce(n)){await k.auth.signOut(),e(null);return}const i=await de();e(i)})()})}const B=["ICF Switzerland — Building a More Human Future Through Professional Coaching","ICF Switzerland connects individuals, leaders and organisations with credentialed professional coaches across Switzerland. Find a coach, explore coaching, and join our community.","Building a more human future through professional coaching.","Professional coaching helps individuals, leaders and organisations navigate complexity with greater clarity, confidence and purpose.","Find a Coach","Explore Coaching","I'm looking for","A Coach","Find a trusted ICF credentialed coach.","Find a Coach →","I represent","An Organisation","Discover how coaching develops leaders and organisations.","For Organisations →","I am","Grow your practice through community, learning and professional standards.","For Coaches →","I'm curious","About Coaching","Learn what coaching is and why it matters.","Discover Coaching →","Why choose an ICF credentialed coach?","Trust matters.","Choosing a coach is an important decision. ICF credentialed coaches commit to internationally recognised standards, ethics and continuous professional development.","Ethics","Bound by the ICF Code of Ethics in every engagement.","Credentials","ACC, PCC and MCC — earned, assessed and renewed.","Experience","Documented coaching hours behind every credential.","Continuous Learning","Ongoing professional development to stay credentialed.","Why Credentials Matter","For Organisations","Coaching transforms organisations.","Support leaders. Strengthen teams. Build coaching cultures that make healthier, more adaptive workplaces possible.","Organisation Services","Case Studies","Communities","A coaching community across Switzerland.","Across regions and languages, ICF Switzerland brings coaches together to learn, collaborate and contribute to the future of our profession.","German-speaking Switzerland","Events, mentoring & volunteering","Find your Community","Upcoming Events","Connect. Learn. Grow.","View all Events","Thu 17 Sep 2026 · Zürich","Coaching Perspectives Conference 2026","Leadership","Tue 6 Oct 2026 · Online","AI & Coaching: What Stays Human?","Webinar","Thu 12 Nov 2026 · Lausanne","Soirée Coaching: Bâtir une culture de coaching","Networking","Why Coaching?","Better conversations create better futures.","Professional coaching empowers people to think more clearly, lead more effectively and navigate change with confidence.","Think differently","Lead better","Unlock potential","Learn about Coaching","Research & Partnerships","Connecting research, practice and leadership.","We work alongside universities, professional bodies, researchers and corporate partners to strengthen coaching across Switzerland.","Partner logo","Our Partnerships","Join Switzerland's professional coaching community.","Whether you are beginning your coaching journey or have decades of experience, ICF Switzerland offers a professional home built on excellence, ethics and belonging.","Learning","Belonging","Become a Member","Stay connected.","Ideas, research and events shaping the future of coaching — in your inbox.","Subscribe","Your email address","Find a Coach — ICF Switzerland Directory","Search ICF Switzerland's directory of credentialed coaches, mentors and supervisors. Filter by credential, language, region and specialty.","ICF Switzerland Directory","Find a coach","Find a mentor","Find a supervisor","Search","Credential","Language","Canton / Region","Specialty","Accepting new clients","Loading coaches…","Name, city, specialty…","For Organisations — ICF Switzerland","How ICF Switzerland helps organisations build coaching cultures, develop leaders and strengthen teams.","Embed professional coaching in your organisation.","ICF Switzerland connects HR and L&D teams with certified coaches and evidence-based coaching programmes — for organisations, NGOs and educational institutions across Switzerland.","Assess Your Coaching Culture","Member Coaches","ICF Credentialed","Languages Served","Credential Levels","Why ICF-Certified Coaching?","The global standard for coaching excellence.","When you work with ICF-certified coaches, you are choosing professionals held to the world's most rigorous coaching standards.","Verified Credentials","ACC, PCC and MCC coaches meet rigorous global standards — verified training, supervised hours and demonstrated competency.","Ethical & Inclusive Practice","The ICF Code of Ethics governs all member coaches. Inclusive practice is embedded — not an add-on.","Swiss Expertise","Coaches fluent in English, French, German and Italian — across all industries, sectors and regions of Switzerland.","Diverse Coach Pool","Match by background, language, sector and methodology. Find the right coach for your organisational context.","Pro-Bono Programmes","Pro-bono coaching available for NGOs and international organisations — making coaching accessible where it matters most.","Measurable Impact","Evidence-based approaches to integrating coaching culture, developing internal capability and measuring outcomes.","Coaching in Organisations","Build a coaching culture that lasts.","Supporting organisations to integrate coaching culture, develop internal coaching capability and measure impact. Partnership with ICF UK, Germany and Slovakia.","Led by Hartmuth Gieldanowski, President Elect","Get in Touch","Coaching in education.","A pan-European initiative led by ICF Switzerland. Bringing coaching into schools and universities — empowering teachers and students, with a particular focus on underprivileged communities and equitable access. Pilot underway with Swiss institutions.","Learn More","Coaching for international organisations & NGOs.","Pro-bono programmes for Geneva-based IOs and NGOs. Supporting resilience, leadership and wellbeing. Culturally aware coaching for high-pressure, diverse international environments.","Led by Saba Imru-Mathieu, PCC ICF","Contact us about Pro Bono Coaching","Coaching in organisations — a deeper dive.","Explore how coaching transforms organisations from within — the research, the frameworks and the Swiss context.","Coaching Culture Assessment","How mature is your organisation's coaching culture?","Answer eight quick questions across four dimensions. Get an instant snapshot of where your organisation stands — and where coaching can take it next.","← Back","Ready to find a certified coach?","Search our directory of ICF-credentialed coaches across Switzerland — matched to your language, region and coaching needs.","Search the Coach Directory","Events & Presence","Meet us at Swiss HR events.","See Upcoming Events","Mar 24/25","HR Festival Zurich","Switzerland's largest HR trade fair — meet the ICF Switzerland team.","Apr 23","Swiss Coaching Day","A national gathering focused on coaching practice and exchange.","May 11–17","International Coaching Week","Virtual and in-person events celebrating coaching's impact worldwide.","Sep 17","ZHAW Conference","Academic and professional dialogue on coaching research and practice.","For Coaches — ICF Switzerland","Grow your coaching practice through ICF Switzerland membership, credentials, communities, mentoring and professional development.","For Coaches","Grow your practice with ICF Switzerland.","Membership, credentials, communities, mentoring and professional development — everything you need to build a thriving coaching practice. Full content for this page is coming soon.","Back to Home","Insights — ICF Switzerland","Ideas, research and perspectives on the future of coaching, leadership, AI and diversity from ICF Switzerland.","Article — ICF Switzerland Insights","Read insights from ICF Switzerland on the future of coaching, leadership, and professional development.","Events — ICF Switzerland","Connect, learn and grow at ICF Switzerland events — conferences, webinars and networking across Swiss regions.","Events","Conferences, webinars and networking events across Switzerland's coaching community. Full event listings are coming soon.","About — ICF Switzerland","Learn about ICF Switzerland — our vision, board, partnerships and how we're building a more human future through professional coaching.","About","Building a more human future.","ICF Switzerland is a Charter Chapter of the International Coaching Federation, connecting coaches across Switzerland through excellence, ethics and belonging. Full content for this page is coming soon.","Member Login","Join","Coach Directory","Why an ICF Coach?","What is Coaching?","FAQs","Organisations","Executive Coaching","Team Coaching","Membership","Mentoring & Supervision","Our Vision","Board","Partnerships","Contact","© 2026 ICF Switzerland Charter Chapter","Privacy","Code of Ethics","Imprint","Toggle menu","Could not load articles","Please try again later.","Insights","Coaching in action.","All","No articles found","Try a different search or category filter.","Search articles…","By","← Back to Insights","Related articles","Article not found","The article you are looking for may have been moved or is no longer available.","Back to Insights","Something went wrong","We could not load this article. Please try again later.","Find a credentialed coach","Find a mentor for coaches","Find a supervisor for coaches","Every coach listed holds an active ICF credential and commits to the ICF Code of Ethics.","ICF-credentialed mentor coaches to help you develop your coaching skills and prepare for your credential.","Experienced supervisors supporting coaches through reflective practice, ethics and professional growth.","coaches","mentors","supervisors","Loading…","Could not load coaches","No coaches match your filters","Try widening your region, credential or specialty.","Waitlist only","View profile","Clear all filters","All cantons","Zürich","Genève","Basel","Bern","Ticino","Lausanne","Romandie","Other","Executive","Team coaching","Career & transition","Life & wellbeing","Systemic","Mentor coaching","Supervision","Leadership Engagement","How would you rate leadership’s active commitment to coaching in your organisation?","Consider visible sponsorship, resource allocation and personal participation","Do your senior leaders model coaching behaviours in their everyday interactions?","Listening, asking over telling, creating space for reflection","Coaching Capability","To what extent have managers and leaders been trained in coaching skills?","Formal programmes, certifications or structured development","How embedded is coaching in your internal development and talent processes?","Onboarding, leadership pipelines, performance conversations","Culture & Mindset","How would you describe the prevailing communication culture in your organisation?","Openness, feedback, psychological safety, curiosity","Is continuous learning and development visibly valued and practised?","Budget, time allocation, peer learning, knowledge sharing","Measurement & Impact","Does your organisation measure the impact of coaching initiatives?","Defined metrics, regular review, connecting coaching to outcomes","How well are coaching outcomes linked to your organisational goals?","Strategic alignment, leadership development, retention, wellbeing","Not yet present","Little to no evidence","Emerging","Early signs, ad hoc","Developing","Growing, partially structured","Established","Consistent and visible","Embedded","Deeply part of how we work","Starting Out","Your organisation is at the beginning of its coaching journey. This is an exciting place to be — small, intentional steps can create significant shifts. Focus on building leadership awareness and introducing basic coaching skills to managers.","Taking Shape","Coaching is emerging in your organisation. You have some foundational elements in place. The next step is to strengthen leadership sponsorship and begin structuring coaching capability more systematically.","Gaining Momentum","Coaching is developing real traction. Your organisation has visible coaching practices and growing capability. Focus now on embedding coaching into talent processes and starting to measure its impact.","Well Established","You have a strong coaching culture. Coaching is consistent, visible and valued across the organisation. The opportunity now is to deepen measurement, refine impact linkage, and ensure coaching reaches every level.","Coaching Maturity","Your organisation exemplifies coaching maturity. Coaching is deeply embedded in how people lead, communicate and grow. Continue to innovate, share your story and mentor other organisations on the journey.","Question {current} of {total}","Next →","See Results →","out of 40 possible points","What this means","Want a personalised follow-up?","Leave your details and the ICF Switzerland team will reach out to discuss how coaching can support your organisation.","Organisation name","Your name","Work email","Your role (e.g. HR Director)","Yes, I’d like ICF Switzerland to contact me about coaching in my organisation.","Submit & Share Results","No thanks","Please enter your email and tick the consent box to submit.","Submitting…","Something went wrong. Please try again.","Thank you! We’ll be in touch soon.","Retake Assessment","Loading articles…"],T=["de","fr","it"],ue={de:"Deutsch",fr:"Français",it:"Italiano"},H=3e3;function Fe(e){if(!e)return[];if(e.length<=H)return[e];const a=i=>{const o=[];let r="";for(const l of i)r&&r.length+l.length>H&&(o.push(r),r=""),r+=l;return r&&o.push(r),o},t=(i,o)=>i.length>H?a(i.split(o)):[i];let n=a(e.split(new RegExp("(?<=<\\/(?:p|h[1-6]|ul|ol|blockquote|figure|table|div)>)","gi")));return n=n.flatMap(i=>t(i,new RegExp("(?<=<br[^>]*>)","gi"))),n=n.flatMap(i=>t(i,new RegExp("(?<=>)","g"))),n}const He=4e3;async function ge(e){const a=Fe(s.body||"").map(l=>l.replace(/\n/g,"<br>")),t=[(s.title||"").replace(/\n/g," "),(s.excerpt||"").replace(/\n/g," "),...a],n=[];let i=[],o=0;const r=async()=>{if(i.length===0)return;const l=await ne(i,G,e,{strict:!0});for(let d=0;d<i.length;d++)if(i[d].length>200&&l[d].length<i[d].length*.3)throw new Error(`Incomplete ${e.toUpperCase()} translation — please try again.`);n.push(...l),i=[],o=0};for(const l of t)i.length>0&&o+l.length>He&&await r(),i.push(l),o+=l.length;return await r(),{title:n[0],excerpt:n[1],body:n.slice(2).join("")}}const O="coachingfederation.ch";let C=null,y="articles",g=null,x=[],q=[],M=[];const he=document.getElementById("cms-app");async function ze(){_e(a=>{C&&a&&C.id===a.id||(C=a,j())}),C=await de(),j()}function j(){C?S():Pe()}function Pe(){he.innerHTML=`
    <div class="cms-login">
      <div class="cms-login-card">
        <img src="assets/logos/ICF_SwitzerlandCharterChapter_Horizontal_RGB_Positive.png" alt="ICF Switzerland">
        <h1>Insights CMS</h1>
        <p>Sign in with your @${O} Google account to manage blog articles.</p>
        <button id="googleSignIn" class="cms-google-btn">
          <svg viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1Z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"/><path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38Z"/></svg>
          Continue with Google
        </button>
        <div class="cms-login-domain-hint">Only @${O} accounts can access this editor.</div>
      </div>
    </div>`,document.getElementById("googleSignIn").addEventListener("click",()=>{Ae()})}function S(){m++,he.innerHTML=`
    <div class="cms-shell">
      ${De()}
      <main class="cms-main" id="cmsMain"></main>
    </div>`,Ne(),Oe()}function De(){const a=[{id:"articles",label:"Articles",icon:'<path d="M4 4h13a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3V4Z"></path><path d="M8 9h8M8 13h8M8 17h5"></path>'},{id:"editor",label:"Editor",icon:'<path d="M12 20h9"></path><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"></path>'},{id:"taxonomy",label:"Categories & Tags",icon:'<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0l-7-7V3h10.6l7 7a2 2 0 0 1 0 2.8Z"></path><circle cx="7.5" cy="7.5" r="1.3" fill="currentColor" stroke="none"></circle>'},{id:"site-translations",label:"Site Translations",icon:'<path d="M4 5h16M4 12h16M4 19h16"></path><path d="M7 5v14M17 5v14"></path>'}].map(t=>`
    <button class="cms-nav-btn ${y===t.id?"active":""}" data-view="${t.id}">
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${t.icon}</svg>
      ${t.label}
    </button>`).join("");return`
    <aside class="cms-sidebar">
      <div class="cms-sidebar-header">
        <img src="assets/logos/ICF_SwitzerlandCharterChapter_Horizontal_RGB_Positive.png" alt="ICF Switzerland">
        <span style="display:flex;flex-direction:column">
          <span class="cms-title">Insights CMS</span>
          <span class="cms-sub">${O}</span>
        </span>
      </div>
      <nav class="cms-nav">
        ${a}
      </nav>
      <div class="cms-sidebar-footer">
        <span class="cms-avatar">${C.initials}</span>
        <span style="display:flex;flex-direction:column;min-width:0">
          <span class="cms-editor-name">${h(C.name)}</span>
          <span class="cms-editor-role">Chapter editor</span>
        </span>
        <button class="cms-logout-btn" id="cmsLogout" title="Sign out" aria-label="Sign out">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><path d="M16 17l5-5-5-5"></path><path d="M21 12H9"></path></svg>
        </button>
      </div>
    </aside>`}function Ne(){document.querySelectorAll("[data-view]").forEach(a=>{a.addEventListener("click",()=>{const t=a.getAttribute("data-view");V(t==="editor"&&!g?"articles":t)})});const e=document.getElementById("cmsLogout");e&&e.addEventListener("click",()=>$e())}function V(e){y=e,S()}function Oe(){const e=document.getElementById("cmsMain");e&&(y==="articles"?Re(e):y==="editor"?Ge(e):y==="taxonomy"?A(e):y==="site-translations"&&Ye(e))}async function Re(e){const a=m;e.innerHTML='<div style="padding:40px;text-align:center;color:var(--text-muted)">Loading articles…</div>';try{x=await be()}catch(n){if(a!==m)return;e.innerHTML=`<div class="cms-empty"><h3>Could not load articles</h3><p>${h(n.message)}</p></div>`;return}if(a!==m)return;const t={published:0,draft:0,scheduled:0};for(const n of x)t[n.status]!==void 0&&t[n.status]++;e.innerHTML=`
    <div class="cms-page-header">
      <div>
        <h1>Articles</h1>
        <p class="cms-subtitle">${x.length} articles · ${t.draft} drafts · ${t.scheduled} scheduled</p>
      </div>
      <button class="cms-new-btn" id="newArticleBtn">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.25" stroke-linecap="round"><path d="M12 5v14M5 12h14"></path></svg>
        New article
      </button>
    </div>
    <div class="cms-toolbar">
      <div class="cms-search">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--neutral-400)" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"></circle><path d="M20 20l-3.5-3.5"></path></svg>
        <input type="text" id="articleSearch" placeholder="Search articles…">
      </div>
      <button class="cms-filter-chip active" data-filter="all">All</button>
      <button class="cms-filter-chip" data-filter="published">Published</button>
      <button class="cms-filter-chip" data-filter="draft">Drafts</button>
      <button class="cms-filter-chip" data-filter="scheduled">Scheduled</button>
    </div>
    <div class="cms-table-wrap">
      <div class="cms-table" id="articlesTable">
        ${z(x)}
      </div>
      <div class="cms-legend">
        <span class="cms-legend-swatch" style="background:var(--icf-cyan-100);border:1px solid var(--icf-cyan-300)"></span> AI-translated
        <span class="cms-legend-swatch cms-legend-gap" style="background:var(--neutral-100);border:1px solid var(--neutral-300)"></span> Pending
        <span class="cms-legend-swatch cms-legend-gap" style="background:var(--icf-indigo-600)"></span> Source language (EN)
      </div>
    </div>`,document.getElementById("newArticleBtn").addEventListener("click",pe),document.getElementById("articleSearch").addEventListener("input",n=>{const i=n.target.value.toLowerCase(),o=x.filter(r=>r.title.toLowerCase().includes(i)||(r.author||"").toLowerCase().includes(i));document.getElementById("articlesTable").innerHTML=z(o),P()}),document.querySelectorAll("[data-filter]").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll("[data-filter]").forEach(r=>r.classList.remove("active")),n.classList.add("active");const i=n.getAttribute("data-filter"),o=i==="all"?x:x.filter(r=>r.status===i);document.getElementById("articlesTable").innerHTML=z(o),P()})}),P()}function z(e){if(e.length===0)return'<div class="cms-empty"><h3>No articles found</h3><p>Create your first article to get started.</p></div>';const a=`
    <div class="cms-table-head">
      <span>Article</span><span>Category</span><span>Status</span><span>Translations</span><span>Updated</span>
    </div>`,t=e.map(n=>{var d;const i=`cms-status-${n.status}`,o=n.status.charAt(0).toUpperCase()+n.status.slice(1),r=n.updated_at?Qe(n.updated_at):"",l=((d=n.category)==null?void 0:d.name)||"—";return`
      <div class="cms-table-row" data-id="${n.id}">
        <span style="display:flex;flex-direction:column;gap:3px;min-width:0">
          <span class="cms-article-title">${h(n.title)}</span>
          <span class="cms-article-author">by ${h(n.author)}</span>
        </span>
        <span class="cms-article-cat">${h(l)}</span>
        <span><span class="cms-status-badge ${i}"><span class="dot"></span>${o}</span></span>
        <span class="cms-lang-row">
          <span class="cms-lang-pill cms-lang-translated" title="German">DE</span>
          <span class="cms-lang-pill cms-lang-translated" title="French">FR</span>
          <span class="cms-lang-pill cms-lang-translated" title="Italian">IT</span>
          <span class="cms-lang-pill cms-lang-source" title="English source">EN</span>
        </span>
        <span class="cms-updated">${r}</span>
      </div>`}).join("");return a+t}function P(){document.querySelectorAll(".cms-table-row[data-id]").forEach(e=>{e.addEventListener("click",()=>{g=e.getAttribute("data-id"),y="editor",S()})})}async function pe(){try{g=(await Ee(C.id)).id,y="editor",S()}catch(e){alert("Could not create article: "+e.message)}}let s={title:"",slug:"",excerpt:"",body:"",author:"",status:"draft",category_id:null,featured_image_url:null,featured_image_alt:"",translations:{}},Y=null,me=!1,E=!1,m=0;async function Ge(e){const a=m;if(!g){e.innerHTML=`
      <div class="cms-empty" style="padding:120px 20px">
        <h3>No article selected</h3>
        <p>Choose an article from the list or create a new one.</p>
        <button class="cms-new-btn" style="margin-top:20px" id="newArticleBtn2">New article</button>
      </div>`,document.getElementById("newArticleBtn2").addEventListener("click",pe);return}e.innerHTML='<div style="padding:40px;text-align:center;color:var(--text-muted)">Loading editor…</div>';try{const[t,n,i,o]=await Promise.all([Te(g),se(),ie(),Se(g)]);if(a!==m)return;if(q=n,M=i,!t){e.innerHTML='<div class="cms-empty"><h3>Article not found</h3></div>';return}s={id:t.id,title:t.title||"",slug:t.slug||"",excerpt:t.excerpt||"",body:t.body||"",author:t.author||"ICF Switzerland",status:t.status||"draft",category_id:t.category_id||null,featured_image_url:t.featured_image_url||null,featured_image_alt:t.featured_image_alt||"",tagIds:o.map(r=>r.id),translations:{de:{title:t.title_de||null,excerpt:t.excerpt_de||null,body:t.body_de||null},fr:{title:t.title_fr||null,excerpt:t.excerpt_fr||null,body:t.body_fr||null},it:{title:t.title_it||null,excerpt:t.excerpt_it||null,body:t.body_it||null}},_translationHash:t.translation_hash||null},w(e)}catch(t){e.innerHTML=`<div class="cms-empty"><h3>Could not load article</h3><p>${h(t.message)}</p></div>`}}function w(e){const a=s.status==="published"?'<span class="cms-status-badge cms-status-published"><span class="dot"></span>Published</span>':s.status==="scheduled"?'<span class="cms-status-badge cms-status-scheduled"><span class="dot"></span>Scheduled</span>':'<span class="cms-status-badge cms-status-draft"><span class="dot"></span>Draft</span>',t=s.status==="published"?"Unpublish":"Publish";e.innerHTML=`
    <div class="cms-editor-topbar">
      <button class="cms-topbar-btn" id="backToArticles">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"></path></svg>
        Articles
      </button>
      ${a}
      <span class="cms-save-status" id="saveStatus">All changes saved</span>
      <div style="margin-left:auto;display:flex;align-items:center;gap:10px">
        <button class="cms-topbar-btn" id="deleteBtn" style="color:var(--red-600);border-color:var(--red-100)">Delete</button>
        <button class="cms-topbar-publish" id="publishBtn">${t}</button>
      </div>
    </div>
    <div class="cms-editor-body">
      <div class="cms-canvas">
        <div class="cms-canvas-inner">
          <div class="cms-lang-tabs">
            <span class="cms-lang-tab cms-lang-tab-source">EN · Source</span>
            ${D("de")}
            ${D("fr")}
            ${D("it")}
            <span class="cms-lang-tabs-hint">Click “Translate now” in the panel to generate translations</span>
          </div>
          <input type="text" class="cms-title-input" id="titleInput" value="${I(s.title)}" placeholder="Article title">
          <textarea class="cms-excerpt-input" id="excerptInput" rows="2" placeholder="Lead paragraph — a short summary that appears under the headline and in article cards.">${h(s.excerpt)}</textarea>
          <div class="cms-featured-drop ${s.featured_image_url?"has-image":""}" id="featuredDrop">
            ${s.featured_image_url?`<img src="${I(s.featured_image_url)}" alt="">`:""}
            <svg class="cms-featured-drop-icon" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="M17 8l-5-5-5 5"></path><path d="M12 3v12"></path></svg>
            <span class="cms-featured-drop-text">Featured image — drop or click to upload</span>
            <button class="cms-featured-remove" id="featuredRemove">Remove image</button>
            <input type="file" id="featuredFileInput" accept="image/*" style="display:none">
          </div>
          <p class="cms-featured-hint">Add alt text in the panel on the right for accessibility.</p>
          <div class="cms-toolbar-row" id="formatToolbar">
            <button class="cms-toolbar-btn" data-cmd="bold" title="Bold"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 4h8a4 4 0 0 1 0 8H6z"/><path d="M6 12h9a4 4 0 0 1 0 8H6z"/></svg></button>
            <button class="cms-toolbar-btn" data-cmd="italic" title="Italic"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="19" y1="4" x2="10" y2="4"/><line x1="14" y1="20" x2="5" y2="20"/><line x1="15" y1="4" x2="9" y2="20"/></svg></button>
            <div class="cms-toolbar-divider"></div>
            <button class="cms-toolbar-btn" data-block="h2" title="Heading"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 12h12M6 4v16M18 4v16"/></svg></button>
            <button class="cms-toolbar-btn" data-block="h3" title="Subheading"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16M4 18h16M10 6v12"/></svg></button>
            <button class="cms-toolbar-btn" data-block="blockquote" title="Quote"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21c3 0 7-1 7-8V5c0-1-1-2-2-2H4c-1 0-2 1-2 2v6c0 1 1 2 2 2h2"/><path d="M15 21c3 0 7-1 7-8V5c0-1-1-2-2-2h-4c-1 0-2 1-2 2v6c0 1 1 2 2 2h2"/></svg></button>
            <div class="cms-toolbar-divider"></div>
            <button class="cms-toolbar-btn" data-block="ul" title="Bullet list"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg></button>
            <button class="cms-toolbar-btn" data-block="ol" title="Numbered list"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="10" y1="6" x2="21" y2="6"/><line x1="10" y1="12" x2="21" y2="12"/><line x1="10" y1="18" x2="21" y2="18"/><path d="M4 6h1v4M4 10h2M6 18H4c0-1 2-2 2-3s-1-1.5-2-1"/></svg></button>
            <div class="cms-toolbar-divider"></div>
            <button class="cms-toolbar-btn" data-block="p" title="Paragraph"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 4v16M17 4v16M19 4H9a4 4 0 0 0 0 8h4"/></svg></button>
          </div>
          <div class="cms-body-editor" id="bodyEditor" contenteditable="true">${s.body||"<p>Start writing your article here…</p>"}</div>
        </div>
      </div>
      ${qe()}
    </div>`,Ue()}function qe(){const e=q.map(i=>`<option value="${i.id}" ${s.category_id===i.id?"selected":""}>${h(i.name)}</option>`).join(""),a=new Set(s.tagIds||[]),t=M.filter(i=>a.has(i.id)).map(i=>`<span class="cms-tag-chip">${h(i.name)} <button data-tag-remove="${i.id}">×</button></span>`).join(""),n=M.filter(i=>!a.has(i.id)).map(i=>`<span class="cms-tag-cloud-item" data-tag-add="${i.id}">${h(i.name)} +</span>`).join("");return`
    <aside class="cms-settings-panel">
      <section class="cms-panel-section">
        <h3>Translations</h3>
        <button class="cms-translate-btn" id="translateNowBtn">${E?"Translating…":"Translate now"}</button>
        ${N("de")}
        ${N("fr")}
        ${N("it")}
        <p style="font-size:12px;color:var(--text-muted);line-height:1.55;margin:10px 2px 0">Click “Translate now” to generate all three translations at once. Visitors see the stored version for their language — no live translation needed on page load.</p>
      </section>
      <section class="cms-panel-section">
        <h3>Publishing</h3>
        <div class="cms-field">
          <label>Category</label>
          <select id="categorySelect">
            <option value="">No category</option>
            ${e}
          </select>
        </div>
        <div class="cms-field">
          <label>Author</label>
          <input type="text" id="authorInput" value="${I(s.author)}">
        </div>
        <div class="cms-field">
          <label>Permalink</label>
          <div class="cms-slug-field">
            <span class="cms-slug-prefix">article.html?slug=</span>
            <input type="text" id="slugInput" value="${I(s.slug)}">
          </div>
          <div class="cms-permalink-display">
            <a href="article.html?slug=${I(s.slug)}" target="_blank">View article →</a>
          </div>
        </div>
        <div class="cms-field">
          <label>Featured image alt text</label>
          <input type="text" id="altInput" value="${I(s.featured_image_alt)}" placeholder="Describe the image for accessibility">
        </div>
      </section>
      <section class="cms-panel-section">
        <h3>Tags</h3>
        <div class="cms-tag-list" id="tagChips">${t||'<span style="font-size:12px;color:var(--text-muted)">No tags assigned</span>'}</div>
        <div class="cms-tag-cloud" id="tagCloud">${n||'<span style="font-size:12px;color:var(--text-muted)">All tags assigned</span>'}</div>
        <div style="margin-top:12px">
          <input type="text" class="cms-tag-add-input" id="newTagInput" placeholder="Add a new tag…">
        </div>
      </section>
    </aside>`}function Ue(){document.getElementById("backToArticles").addEventListener("click",()=>{g=null,y="articles",S()});const e=document.getElementById("titleInput"),a=document.getElementById("excerptInput"),t=document.getElementById("bodyEditor"),n=document.getElementById("authorInput"),i=document.getElementById("slugInput"),o=document.getElementById("categorySelect"),r=document.getElementById("altInput");e.addEventListener("input",()=>{s.title=e.value,f()}),a.addEventListener("input",()=>{s.excerpt=a.value,f()}),t.addEventListener("input",()=>{s.body=t.innerHTML,f()}),n.addEventListener("input",()=>{s.author=n.value,f()}),i.addEventListener("input",()=>{s.slug=i.value,f()}),o.addEventListener("change",()=>{s.category_id=o.value||null,f()}),r.addEventListener("input",()=>{s.featured_image_alt=r.value,f()}),document.querySelectorAll("[data-cmd]").forEach(c=>{c.addEventListener("click",u=>{u.preventDefault(),document.execCommand(c.getAttribute("data-cmd"),!1,null),t.focus(),s.body=t.innerHTML,f()})}),document.querySelectorAll("[data-block]").forEach(c=>{c.addEventListener("click",u=>{u.preventDefault();const p=c.getAttribute("data-block");p==="h2"||p==="h3"||p==="p"?document.execCommand("formatBlock",!1,p):p==="blockquote"?document.execCommand("formatBlock",!1,"blockquote"):p==="ul"?document.execCommand("insertUnorderedList",!1,null):p==="ol"&&document.execCommand("insertOrderedList",!1,null),t.focus(),s.body=t.innerHTML,f()})});const l=document.getElementById("featuredDrop"),d=document.getElementById("featuredFileInput"),b=document.getElementById("featuredRemove");l.addEventListener("click",c=>{c.target!==b&&d.click()}),l.addEventListener("dragover",c=>{c.preventDefault(),l.classList.add("dragging")}),l.addEventListener("dragleave",()=>l.classList.remove("dragging")),l.addEventListener("drop",c=>{c.preventDefault(),l.classList.remove("dragging");const u=c.dataTransfer.files[0];u&&u.type.startsWith("image/")&&Z(u)}),d.addEventListener("change",()=>{const c=d.files[0];c&&Z(c)}),b.addEventListener("click",c=>{c.stopPropagation(),s.featured_image_url=null,l.classList.remove("has-image");const u=l.querySelector("img");u&&u.remove(),f()}),document.querySelectorAll("[data-tag-add]").forEach(c=>{c.addEventListener("click",()=>{const u=c.getAttribute("data-tag-add");s.tagIds=[...s.tagIds||[],u],w(document.getElementById("cmsMain"))})}),document.querySelectorAll("[data-tag-remove]").forEach(c=>{c.addEventListener("click",u=>{u.stopPropagation();const p=c.getAttribute("data-tag-remove");s.tagIds=(s.tagIds||[]).filter(ye=>ye!==p),w(document.getElementById("cmsMain"))})});const v=document.getElementById("newTagInput");v&&v.addEventListener("keydown",async c=>{if(c.key==="Enter"){c.preventDefault();const u=v.value.trim();if(!u)return;try{const p=await re(u);M.push(p),s.tagIds=[...s.tagIds||[],p.id],w(document.getElementById("cmsMain"))}catch(p){alert("Could not create tag: "+p.message)}}}),document.getElementById("publishBtn").addEventListener("click",We),document.getElementById("deleteBtn").addEventListener("click",Ve);const W=document.getElementById("translateNowBtn");W&&W.addEventListener("click",ee),T.forEach(c=>{const u=document.getElementById(`retranslate-${c}`);u&&u.addEventListener("click",()=>ee(c))})}async function Z(e){const a=document.getElementById("featuredDrop");a.innerHTML='<span style="color:var(--text-muted);font-size:14px">Uploading…</span>';try{const t=await Le(e);s.featured_image_url=t,a.classList.add("has-image"),a.innerHTML=`<img src="${I(t)}" alt=""><button class="cms-featured-remove" id="featuredRemove">Remove image</button><input type="file" id="featuredFileInput" accept="image/*" style="display:none">`,document.getElementById("featuredRemove").addEventListener("click",n=>{var i;n.stopPropagation(),s.featured_image_url=null,a.classList.remove("has-image"),(i=a.querySelector("img"))==null||i.remove(),f()}),f()}catch(t){alert("Upload failed: "+t.message),w(document.getElementById("cmsMain"))}}function f(){me=!0;const e=document.getElementById("saveStatus");e&&(e.textContent="Saving…",e.className="cms-save-status dirty"),clearTimeout(Y),Y=setTimeout(_,1500)}async function _(){if(g)try{await $(g,{title:s.title,slug:s.slug,excerpt:s.excerpt,body:s.body,author:s.author,category_id:s.category_id,featured_image_url:s.featured_image_url,featured_image_alt:s.featured_image_alt}),s.tagIds&&await Be(g,s.tagIds),me=!1;const e=document.getElementById("saveStatus");e&&(e.textContent="All changes saved",e.className="cms-save-status saved")}catch(e){const a=document.getElementById("saveStatus");a&&(a.textContent="Save failed: "+e.message,a.className="cms-save-status dirty")}}async function We(){if(!g)return;if(E){alert("A translation is still running — please wait a moment, then publish.");return}if((s.status==="published"?"draft":"published")==="published"){const a=s.title&&s.title.trim()&&s.title.trim()!=="Untitled article",t=s.body&&s.body.replace(/<[^>]*>/g,"").trim().length>0;if(!a||!t){Q("warning","Article has no content","This article is missing a title or body text. It will be published without translations — visitors will see the English version in all languages. Continue?");return}Q("translating");try{await _();const n=`${s.title}|${s.excerpt}|${s.body}`,i=s._translationHash===n,o=T.filter(r=>{var b;const l=(b=s.translations)==null?void 0:b[r];return!(l&&l.title!=null&&l.body!=null)||!i});if(o.length>0){E=!0,K(`Translating into ${o.map(l=>ue[l]).join(", ")}…`);const r={};for(const l of o){const d=await ge(l);s.translations[l]=d,r[`title_${l}`]=d.title,r[`excerpt_${l}`]=d.excerpt,r[`body_${l}`]=d.body}await oe(s.id,r,n),s._translationHash=n}else K("Translations already up to date — publishing…");await $(g,{status:"published",published_at:new Date().toISOString()}),s.status="published",L(),w(document.getElementById("cmsMain")),U("Article published with translations.")}catch(n){L(),alert("Could not publish: "+n.message)}finally{E=!1}}else try{await _(),await $(g,{status:"draft",published_at:null}),s.status="draft",w(document.getElementById("cmsMain"))}catch(a){alert("Could not change publish status: "+a.message)}}function Q(e,a,t){L();const n=document.createElement("div");n.className="cms-publish-overlay",n.id="publishOverlay",e==="translating"?n.innerHTML=`
      <div class="cms-publish-card">
        <div class="cms-publish-spinner"></div>
        <h3 id="publishOverlayTitle">Translating and publishing…</h3>
        <p id="publishOverlayMessage">Saving your article…</p>
        <p class="cms-publish-hint">The editor is locked while translations are generated. This usually takes 5–15 seconds.</p>
      </div>`:e==="warning"&&(n.innerHTML=`
      <div class="cms-publish-card">
        <div class="cms-publish-warning-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
        </div>
        <h3>${h(a)}</h3>
        <p>${h(t)}</p>
        <div class="cms-publish-actions">
          <button class="cms-topbar-btn" id="publishCancel">Cancel</button>
          <button class="cms-topbar-publish" id="publishForce">Publish anyway</button>
        </div>
      </div>`),document.body.appendChild(n),requestAnimationFrame(()=>n.classList.add("visible")),e==="warning"&&(document.getElementById("publishCancel").addEventListener("click",L),document.getElementById("publishForce").addEventListener("click",async()=>{L(),await je()}))}function K(e){const a=document.getElementById("publishOverlayMessage");a&&(a.textContent=e)}function L(){const e=document.getElementById("publishOverlay");e&&(e.classList.remove("visible"),setTimeout(()=>e.remove(),200))}async function je(){try{await _(),await $(g,{status:"published",published_at:new Date().toISOString()}),s.status="published",w(document.getElementById("cmsMain")),U("Article published (no translations generated).")}catch(e){alert("Could not publish: "+e.message)}}async function Ve(){if(g&&confirm("Delete this article? This cannot be undone."))try{await Me(g),g=null,y="articles",S()}catch(e){alert("Could not delete: "+e.message)}}async function A(e){const a=m;e.innerHTML='<div style="padding:40px;text-align:center;color:var(--text-muted)">Loading…</div>';try{const[t,n,i,o]=await Promise.all([se(),ie(),we(),Ce()]);if(a!==m)return;q=t,M=n,e.innerHTML=`
      <div class="cms-page-header">
        <div>
          <h1>Categories & Tags</h1>
          <p class="cms-subtitle">Categories structure the blog; tags connect related articles.</p>
        </div>
      </div>
      <div class="cms-taxonomy-grid">
        <div class="cms-tax-card">
          <div class="cms-tax-card-header">
            <h2>Categories</h2>
          </div>
          <div class="cms-tax-add-row">
            <input type="text" class="cms-tax-add-input" id="newCatInput" placeholder="Add a category…">
            <button class="cms-tax-add-btn" id="addCatBtn">+ Add</button>
          </div>
          <div id="catList">
            ${t.map(r=>`
              <div class="cms-tax-item">
                <span class="cms-tax-item-name">${h(r.name)}</span>
                <div style="display:flex;align-items:center;gap:12px">
                  <span class="cms-tax-item-count">${i[r.id]||0} articles</span>
                  <button class="cms-tax-item-delete" data-cat-del="${r.id}" title="Delete">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"><path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path></svg>
                  </button>
                </div>
              </div>`).join("")}
          </div>
        </div>
        <div class="cms-tax-card">
          <div class="cms-tax-card-header">
            <h2>Tags</h2>
          </div>
          <div class="cms-tax-add-row">
            <input type="text" class="cms-tax-add-input" id="newTagInput2" placeholder="Add a tag…">
            <button class="cms-tax-add-btn" id="addTagBtn">+ Add</button>
          </div>
          <div class="cms-tag-cloud" id="tagList">
            ${n.map(r=>`
              <span class="cms-tag-cloud-item">
                ${h(r.name)} · ${o[r.id]||0}
                <button class="cms-tax-item-delete" data-tag-del="${r.id}" title="Delete" style="background:none;border:none;cursor:pointer;padding:0 0 0 4px">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"></path></svg>
                </button>
              </span>`).join("")||'<span style="font-size:13px;color:var(--text-muted)">No tags yet</span>'}
          </div>
        </div>
      </div>`,document.getElementById("addCatBtn").addEventListener("click",J),document.getElementById("newCatInput").addEventListener("keydown",r=>{r.key==="Enter"&&J()}),document.getElementById("addTagBtn").addEventListener("click",X),document.getElementById("newTagInput2").addEventListener("keydown",r=>{r.key==="Enter"&&X()}),document.querySelectorAll("[data-cat-del]").forEach(r=>{r.addEventListener("click",async()=>{const l=r.getAttribute("data-cat-del");try{await xe(l),A(e)}catch(d){alert("Could not delete category: "+d.message)}})}),document.querySelectorAll("[data-tag-del]").forEach(r=>{r.addEventListener("click",async()=>{const l=r.getAttribute("data-tag-del");try{await Ie(l),A(e)}catch(d){alert("Could not delete tag: "+d.message)}})})}catch(t){e.innerHTML=`<div class="cms-empty"><h3>Could not load</h3><p>${h(t.message)}</p></div>`}}async function J(){const e=document.getElementById("newCatInput"),a=e.value.trim();if(a)try{await ke(a),e.value="",A(document.getElementById("cmsMain"))}catch(t){alert("Could not add category: "+t.message)}}async function X(){const e=document.getElementById("newTagInput2"),a=e.value.trim();if(a)try{await re(a),e.value="",A(document.getElementById("cmsMain"))}catch(t){alert("Could not add tag: "+t.message)}}async function Ye(e){const a=m;e.innerHTML='<div style="padding:40px;text-align:center;color:var(--text-muted)">Loading…</div>';try{const t=await fe();if(a!==m)return;e.innerHTML=`
      <div class="cms-page-header">
        <div>
          <h1>Site Translations</h1>
          <p class="cms-subtitle">Pre-translate all static UI text so language switching is instant for visitors.</p>
        </div>
      </div>
      <div class="cms-site-trans-body">
        <div class="cms-site-trans-card">
          <div class="cms-site-trans-card-header">
            <h2>How it works</h2>
          </div>
          <p class="cms-site-trans-explain">Every piece of static text on the website — navigation, buttons, headings, labels, the coach directory and the coaching culture survey — is translated once and stored in the database. This also runs automatically every time the site is built and published. Anything still missing is translated live on first view and stored for everyone after that.</p>
          <p class="cms-site-trans-explain">Run this whenever you add new pages or change static text. It only translates strings that are not yet in the database — existing translations are kept.</p>
        </div>

        <div class="cms-site-trans-card">
          <div class="cms-site-trans-card-header">
            <h2>Translation status</h2>
          </div>
          ${ve(t)}
        </div>

        <div class="cms-site-trans-card">
          <div class="cms-site-trans-card-header">
            <h2>Run pre-translation</h2>
          </div>
          <p class="cms-site-trans-explain">Translates ${B.length} static strings into German, French and Italian. Only missing strings are translated — existing ones are skipped.</p>
          <button class="cms-translate-btn" id="siteTransRunBtn">Translate site text now</button>
          <div class="cms-site-trans-result" id="siteTransResult"></div>
        </div>
      </div>`;const n=document.getElementById("siteTransRunBtn");n&&n.addEventListener("click",Ze)}catch(t){e.innerHTML=`<div class="cms-empty"><h3>Could not load</h3><p>${h(t.message)}</p></div>`}}function ve(e){const a={de:"Deutsch",fr:"Français",it:"Italiano"};return T.map(t=>{const n=e[t]||{total:0,translated:0},i=n.total>0?Math.round(n.translated/n.total*100):0,o=i===100;return`
      <div class="cms-site-trans-row">
        <span class="cms-site-trans-lang">${a[t]}</span>
        <div class="cms-site-trans-bar-wrap">
          <div class="cms-site-trans-bar" style="width:${i}%"></div>
        </div>
        <span class="cms-site-trans-count ${o?"cms-site-trans-count-done":""}">${n.translated}/${n.total} ${o?"✓":""}</span>
      </div>`}).join("")}const F=40;async function R(e,a){const t=new Set;for(let n=0;n<a.length;n+=F){const i=a.slice(n,n+F),{data:o,error:r}=await k.from("translations").select("source_text").eq("source_lang",G).eq("target_lang",e).in("source_text",i);if(r)throw r;(o||[]).forEach(l=>t.add(l.source_text))}return t}async function fe(){const e={},a=B.length;for(const t of T){const n=await R(t,B);e[t]={total:a,translated:n.size}}return e}async function Ze(){const e=m,a=document.getElementById("siteTransRunBtn"),t=document.getElementById("siteTransResult");if(!(!a||!t)){a.disabled=!0,a.textContent="Translating…",t.innerHTML='<p class="cms-site-trans-explain">Translating site text into German, French and Italian…</p>';try{let n=0;for(const o of T){const r=await R(o,B),l=B.filter(v=>!r.has(v));if(l.length===0){t.innerHTML=`<p class="cms-site-trans-explain">${o.toUpperCase()}: already fully translated.</p>`;continue}t.innerHTML=`<p class="cms-site-trans-explain">${o.toUpperCase()}: translating ${l.length} strings…</p>`;for(let v=0;v<l.length;v+=F)await ne(l.slice(v,v+F),G,o);const d=await R(o,l),b=l.filter(v=>!d.has(v));n+=d.size,b.length>0&&console.warn(`Site translation: ${b.length} strings for ${o.toUpperCase()} were not persisted`,b)}if(e!==m)return;n===0?t.innerHTML='<div class="cms-site-trans-error">No strings were persisted. Check the browser console for details — the translation service may be unavailable.</div>':t.innerHTML=`<div class="cms-site-trans-success">✓ Translated ${n} strings across all languages. Language switching is now instant on every page.</div>`,a.textContent="Re-run pre-translation",a.disabled=!1;const i=await fe();if(e!==m)return;document.querySelector(".cms-site-trans-card:nth-child(2)").innerHTML='<div class="cms-site-trans-card-header"><h2>Translation status</h2></div>'+ve(i)}catch(n){t.innerHTML=`<div class="cms-site-trans-error">Translation failed: ${h(n.message)}</div>`,a.textContent="Translate site text now",a.disabled=!1}}}function D(e){const a=s.translations[e]||{},t=a.title!=null,n=a.body!=null,i=t&&n;return`<span class="cms-lang-tab ${i?"cms-lang-tab-done":"cms-lang-tab-pending"}">${e.toUpperCase()} ${i?'<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>':'<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v6"></path><circle cx="12" cy="16.5" r="0.5" fill="currentColor"></circle></svg>'}</span>`}function N(e){const a=s.translations[e]||{},t=a.title!=null&&a.body!=null,n=t?"Translated":"Pending",i=t?"cms-tag-status-done":"cms-tag-status-pending";return`<div class="cms-tag-row">
    <span>${ue[e]}</span>
    <span class="cms-tag-status ${i}">${n}</span>
    <button class="cms-retranslate-btn" id="retranslate-${e}" style="margin-left:auto;padding:2px 10px;font-size:11px;border-radius:999px;border:1px solid var(--border-default);background:transparent;color:var(--text-muted);cursor:pointer">${t?"Re-translate":"Translate"}</button>
  </div>`}async function ee(e){if(E||!s.id)return;const t=typeof e=="string"?[e]:T;if(!s.title||s.title.trim()==="Untitled article"){alert("Please add a title before translating.");return}E=!0,te(!0),ae(!0);try{for(const o of t)s.translations[o]=await ge(o);const n={},i=`${s.title}|${s.excerpt}|${s.body}`;for(const o of T){const r=s.translations[o];r&&r.title!=null&&(n[`title_${o}`]=r.title,n[`excerpt_${o}`]=r.excerpt,n[`body_${o}`]=r.body)}await oe(s.id,n,i),s._translationHash=i,w(document.getElementById("cmsMain")),U("Translations saved.")}catch(n){alert("Translation failed: "+(n.message||n))}finally{E=!1,te(!1),ae(!1)}}function te(e){const a=document.getElementById("translateNowBtn");a&&(a.textContent=e?"Translating…":"Translate now",a.disabled=e,a.classList.toggle("cms-translate-btn-busy",e))}function ae(e){document.querySelectorAll(".cms-retranslate-btn").forEach(a=>{a.disabled=e})}function U(e){const a=document.querySelector(".cms-panel-toast");a&&a.remove();const t=document.createElement("div");t.className="cms-panel-toast",t.textContent=e,document.body.appendChild(t),requestAnimationFrame(()=>t.classList.add("visible")),setTimeout(()=>{t.classList.remove("visible"),setTimeout(()=>t.remove(),300)},2400)}function h(e){return e?String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):""}function I(e){return e?String(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function Qe(e){const a=new Date(e),n=(new Date-a)/1e3;return n<60?"just now":n<3600?Math.floor(n/60)+" min ago":n<86400?Math.floor(n/3600)+" h ago":n<172800?"yesterday":a.toLocaleDateString("en-GB",{day:"numeric",month:"short"})}ze();
