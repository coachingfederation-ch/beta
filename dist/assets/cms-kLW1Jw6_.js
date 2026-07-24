import{s as T,t as q,S as z}from"./i18n-BFKUt1vx.js";import{c as ve,d as ne,e as se,g as fe,h as ye,i as be,j as we,k as Ce,m as xe,n as ie,o as Ie,a as Ee,u as ke,p as F,s as Te,q as oe,r as Se}from"./cms-data-Biy4Ywpj.js";const re="coachingfederation.ch";async function Le(){const e=`${window.location.origin}${window.location.pathname}`;await T.auth.signInWithOAuth({provider:"google",options:{redirectTo:e,queryParams:{hd:re}}})}async function Be(){await T.auth.signOut()}function le(e){return e?e.toLowerCase().endsWith(`@${re}`):!1}async function ce(){var r,o;const{data:{session:e}}=await T.auth.getSession();if(!e)return null;const a=e.user,t=(a==null?void 0:a.email)||"";if(!le(t))return await T.auth.signOut(),null;const n=((r=a==null?void 0:a.user_metadata)==null?void 0:r.full_name)||((o=a==null?void 0:a.user_metadata)==null?void 0:o.name)||t.split("@")[0],i=n.split(" ").filter(Boolean).slice(0,2).map(l=>l[0].toUpperCase()).join("");return{email:t,name:n,initials:i||"ED",id:a.id}}function Me(e){return T.auth.onAuthStateChange((a,t)=>{(async()=>{var r;if(!t){e(null);return}const n=((r=t.user)==null?void 0:r.email)||"";if(!le(n)){await T.auth.signOut(),e(null);return}const i=await ce();e(i)})()})}const B=["ICF Switzerland — Building a More Human Future Through Professional Coaching","ICF Switzerland connects individuals, leaders and organisations with credentialed professional coaches across Switzerland. Find a coach, explore coaching, and join our community.","Building a more human future through professional coaching.","Professional coaching helps individuals, leaders and organisations navigate complexity with greater clarity, confidence and purpose.","Find a Coach","Explore Coaching","I'm looking for","A Coach","Find a trusted ICF credentialed coach.","Find a Coach →","I represent","An Organisation","Discover how coaching develops leaders and organisations.","For Organisations →","I am","Grow your practice through community, learning and professional standards.","For Coaches →","I'm curious","About Coaching","Learn what coaching is and why it matters.","Discover Coaching →","Why choose an ICF credentialed coach?","Trust matters.","Choosing a coach is an important decision. ICF credentialed coaches commit to internationally recognised standards, ethics and continuous professional development.","Ethics","Bound by the ICF Code of Ethics in every engagement.","Credentials","ACC, PCC and MCC — earned, assessed and renewed.","Experience","Documented coaching hours behind every credential.","Continuous Learning","Ongoing professional development to stay credentialed.","Why Credentials Matter","Coaching in Action","Building a more human future","Explore Insights","Future of Work","How coaching prepares people for what work becomes next","Leadership","Better conversations create better leaders","AI & Coaching","Why trusted human conversations matter more than ever","Diversity & Inclusion","Coaching that welcomes every perspective","For Organisations","Coaching transforms organisations.","Support leaders. Strengthen teams. Build coaching cultures that make healthier, more adaptive workplaces possible.","Organisation Services","Case Studies","Communities","A coaching community across Switzerland.","Across regions and languages, ICF Switzerland brings coaches together to learn, collaborate and contribute to the future of our profession.","German-speaking Switzerland","Events, mentoring & volunteering","Find your Community","Upcoming Events","Connect. Learn. Grow.","View all Events","Thu 17 Sep 2026 · Zürich","Coaching Perspectives Conference 2026","Tue 6 Oct 2026 · Online","AI & Coaching: What Stays Human?","Webinar","Thu 12 Nov 2026 · Lausanne","Soirée Coaching: Bâtir une culture de coaching","Networking","Why Coaching?","Better conversations create better futures.","Professional coaching empowers people to think more clearly, lead more effectively and navigate change with confidence.","Think differently","Lead better","Unlock potential","Learn about Coaching","Research & Partnerships","Connecting research, practice and leadership.","We work alongside universities, professional bodies, researchers and corporate partners to strengthen coaching across Switzerland.","Partner logo","Our Partnerships","Join Switzerland's professional coaching community.","Whether you are beginning your coaching journey or have decades of experience, ICF Switzerland offers a professional home built on excellence, ethics and belonging.","Learning","Belonging","Become a Member","Stay connected.","Ideas, research and events shaping the future of coaching — in your inbox.","Subscribe","Your email address","Find a Coach — ICF Switzerland Directory","Search ICF Switzerland's directory of credentialed coaches, mentors and supervisors. Filter by credential, language, region and specialty.","ICF Switzerland Directory","Find a coach","Find a mentor","Find a supervisor","Search","Credential","Language","Canton / Region","Specialty","Accepting new clients","Loading coaches…","Name, city, specialty…","For Organisations — ICF Switzerland","How ICF Switzerland helps organisations build coaching cultures, develop leaders and strengthen teams.","Embed professional coaching in your organisation.","ICF Switzerland connects HR and L&D teams with certified coaches and evidence-based coaching programmes — for organisations, NGOs and educational institutions across Switzerland.","Assess Your Coaching Culture","Member Coaches","ICF Credentialed","Languages Served","Credential Levels","Why ICF-Certified Coaching?","The global standard for coaching excellence.","When you work with ICF-certified coaches, you are choosing professionals held to the world's most rigorous coaching standards.","Verified Credentials","ACC, PCC and MCC coaches meet rigorous global standards — verified training, supervised hours and demonstrated competency.","Ethical & Inclusive Practice","The ICF Code of Ethics governs all member coaches. Inclusive practice is embedded — not an add-on.","Swiss Expertise","Coaches fluent in English, French, German and Italian — across all industries, sectors and regions of Switzerland.","Diverse Coach Pool","Match by background, language, sector and methodology. Find the right coach for your organisational context.","Pro-Bono Programmes","Pro-bono coaching available for NGOs and international organisations — making coaching accessible where it matters most.","Measurable Impact","Evidence-based approaches to integrating coaching culture, developing internal capability and measuring outcomes.","Coaching in Organisations","Build a coaching culture that lasts.","Supporting organisations to integrate coaching culture, develop internal coaching capability and measure impact. Partnership with ICF UK, Germany and Slovakia.","Led by Hartmuth Gieldanowski, President Elect","Get in Touch","Coaching in education.","A pan-European initiative led by ICF Switzerland. Bringing coaching into schools and universities — empowering teachers and students, with a particular focus on underprivileged communities and equitable access. Pilot underway with Swiss institutions.","Learn More","Coaching for international organisations & NGOs.","Pro-bono programmes for Geneva-based IOs and NGOs. Supporting resilience, leadership and wellbeing. Culturally aware coaching for high-pressure, diverse international environments.","Led by Saba Imru-Mathieu, PCC ICF","Contact us about Pro Bono Coaching","Coaching in organisations — a deeper dive.","Explore how coaching transforms organisations from within — the research, the frameworks and the Swiss context.","Webslide coming soon","An interactive presentation with more content on coaching in organisations will be embedded here. You will be able to build it with Bolt and drop the embed link in.","Coaching Culture Assessment","How mature is your organisation's coaching culture?","Answer eight quick questions across four dimensions. Get an instant snapshot of where your organisation stands — and where coaching can take it next.","← Back","Ready to find a certified coach?","Search our directory of ICF-credentialed coaches across Switzerland — matched to your language, region and coaching needs.","Search the Coach Directory","Events & Presence","Meet us at Swiss HR events.","See Upcoming Events","Mar 24/25","HR Festival Zurich","Switzerland's largest HR trade fair — meet the ICF Switzerland team.","Apr 23","Swiss Coaching Day","A national gathering focused on coaching practice and exchange.","May 11–17","International Coaching Week","Virtual and in-person events celebrating coaching's impact worldwide.","Sep 17","ZHAW Conference","Academic and professional dialogue on coaching research and practice.","For Coaches — ICF Switzerland","Grow your coaching practice through ICF Switzerland membership, credentials, communities, mentoring and professional development.","For Coaches","Grow your practice with ICF Switzerland.","Membership, credentials, communities, mentoring and professional development — everything you need to build a thriving coaching practice. Full content for this page is coming soon.","Back to Home","Insights — ICF Switzerland","Ideas, research and perspectives on the future of coaching, leadership, AI and diversity from ICF Switzerland.","Article — ICF Switzerland Insights","Read insights from ICF Switzerland on the future of coaching, leadership, and professional development.","Events — ICF Switzerland","Connect, learn and grow at ICF Switzerland events — conferences, webinars and networking across Swiss regions.","Events","Conferences, webinars and networking events across Switzerland's coaching community. Full event listings are coming soon.","About — ICF Switzerland","Learn about ICF Switzerland — our vision, board, partnerships and how we're building a more human future through professional coaching.","About","Building a more human future.","ICF Switzerland is a Charter Chapter of the International Coaching Federation, connecting coaches across Switzerland through excellence, ethics and belonging. Full content for this page is coming soon.","Member Login","Join","Coach Directory","Why an ICF Coach?","What is Coaching?","FAQs","Organisations","Executive Coaching","Team Coaching","Membership","Mentoring & Supervision","Our Vision","Board","Partnerships","Contact","© 2026 ICF Switzerland Charter Chapter","Privacy","Code of Ethics","Imprint","Toggle menu","Could not load articles","Please try again later.","Insights","Coaching in action.","All","No articles found","Try a different search or category filter.","Search articles…","By","← Back to Insights","Related articles","Article not found","The article you are looking for may have been moved or is no longer available.","Back to Insights","Something went wrong","We could not load this article. Please try again later.","Find a credentialed coach","Find a mentor for coaches","Find a supervisor for coaches","Every coach listed holds an active ICF credential and commits to the ICF Code of Ethics.","ICF-credentialed mentor coaches to help you develop your coaching skills and prepare for your credential.","Experienced supervisors supporting coaches through reflective practice, ethics and professional growth.","coaches","mentors","supervisors","Loading…","Could not load coaches","No coaches match your filters","Try widening your region, credential or specialty.","Waitlist only","View profile","Clear all filters","All cantons","Zürich","Genève","Basel","Bern","Ticino","Lausanne","Romandie","Other","Executive","Team coaching","Career & transition","Life & wellbeing","Systemic","Mentor coaching","Supervision","Leadership Engagement","How would you rate leadership’s active commitment to coaching in your organisation?","Consider visible sponsorship, resource allocation and personal participation","Do your senior leaders model coaching behaviours in their everyday interactions?","Listening, asking over telling, creating space for reflection","Coaching Capability","To what extent have managers and leaders been trained in coaching skills?","Formal programmes, certifications or structured development","How embedded is coaching in your internal development and talent processes?","Onboarding, leadership pipelines, performance conversations","Culture & Mindset","How would you describe the prevailing communication culture in your organisation?","Openness, feedback, psychological safety, curiosity","Is continuous learning and development visibly valued and practised?","Budget, time allocation, peer learning, knowledge sharing","Measurement & Impact","Does your organisation measure the impact of coaching initiatives?","Defined metrics, regular review, connecting coaching to outcomes","How well are coaching outcomes linked to your organisational goals?","Strategic alignment, leadership development, retention, wellbeing","Not yet present","Little to no evidence","Emerging","Early signs, ad hoc","Developing","Growing, partially structured","Established","Consistent and visible","Embedded","Deeply part of how we work","Starting Out","Your organisation is at the beginning of its coaching journey. This is an exciting place to be — small, intentional steps can create significant shifts. Focus on building leadership awareness and introducing basic coaching skills to managers.","Taking Shape","Coaching is emerging in your organisation. You have some foundational elements in place. The next step is to strengthen leadership sponsorship and begin structuring coaching capability more systematically.","Gaining Momentum","Coaching is developing real traction. Your organisation has visible coaching practices and growing capability. Focus now on embedding coaching into talent processes and starting to measure its impact.","Well Established","You have a strong coaching culture. Coaching is consistent, visible and valued across the organisation. The opportunity now is to deepen measurement, refine impact linkage, and ensure coaching reaches every level.","Coaching Maturity","Your organisation exemplifies coaching maturity. Coaching is deeply embedded in how people lead, communicate and grow. Continue to innovate, share your story and mentor other organisations on the journey.","Question {current} of {total}","Next →","See Results →","out of 40 possible points","What this means","Want a personalised follow-up?","Leave your details and the ICF Switzerland team will reach out to discuss how coaching can support your organisation.","Organisation name","Your name","Work email","Your role (e.g. HR Director)","Yes, I’d like ICF Switzerland to contact me about coaching in my organisation.","Submit & Share Results","No thanks","Please enter your email and tick the consent box to submit.","Submitting…","Something went wrong. Please try again.","Thank you! We’ll be in touch soon.","Retake Assessment","Loading articles…"],I=["de","fr","it"],Ae={de:"Deutsch",fr:"Français",it:"Italiano"},R="coachingfederation.ch";let x=null,w="articles",h=null,E=[],W=[],M=[];const de=document.getElementById("cms-app");async function $e(){Me(a=>{x&&a&&x.id===a.id||(x=a,j())}),x=await ce(),j()}function j(){x?S():Fe()}function Fe(){de.innerHTML=`
    <div class="cms-login">
      <div class="cms-login-card">
        <img src="assets/logos/ICF_SwitzerlandCharterChapter_Horizontal_RGB_Positive.png" alt="ICF Switzerland">
        <h1>Insights CMS</h1>
        <p>Sign in with your @${R} Google account to manage blog articles.</p>
        <button id="googleSignIn" class="cms-google-btn">
          <svg viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1Z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23Z"/><path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84Z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38Z"/></svg>
          Continue with Google
        </button>
        <div class="cms-login-domain-hint">Only @${R} accounts can access this editor.</div>
      </div>
    </div>`,document.getElementById("googleSignIn").addEventListener("click",()=>{Le()})}function S(){f++,de.innerHTML=`
    <div class="cms-shell">
      ${_e()}
      <main class="cms-main" id="cmsMain"></main>
    </div>`,He(),ze()}function _e(){const a=[{id:"articles",label:"Articles",icon:'<path d="M4 4h13a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3V4Z"></path><path d="M8 9h8M8 13h8M8 17h5"></path>'},{id:"editor",label:"Editor",icon:'<path d="M12 20h9"></path><path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4Z"></path>'},{id:"taxonomy",label:"Categories & Tags",icon:'<path d="M20.6 13.4 13.4 20.6a2 2 0 0 1-2.8 0l-7-7V3h10.6l7 7a2 2 0 0 1 0 2.8Z"></path><circle cx="7.5" cy="7.5" r="1.3" fill="currentColor" stroke="none"></circle>'},{id:"site-translations",label:"Site Translations",icon:'<path d="M4 5h16M4 12h16M4 19h16"></path><path d="M7 5v14M17 5v14"></path>'}].map(t=>`
    <button class="cms-nav-btn ${w===t.id?"active":""}" data-view="${t.id}">
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round">${t.icon}</svg>
      ${t.label}
    </button>`).join("");return`
    <aside class="cms-sidebar">
      <div class="cms-sidebar-header">
        <img src="assets/logos/ICF_SwitzerlandCharterChapter_Horizontal_RGB_Positive.png" alt="ICF Switzerland">
        <span style="display:flex;flex-direction:column">
          <span class="cms-title">Insights CMS</span>
          <span class="cms-sub">${R}</span>
        </span>
      </div>
      <nav class="cms-nav">
        ${a}
      </nav>
      <div class="cms-sidebar-footer">
        <span class="cms-avatar">${x.initials}</span>
        <span style="display:flex;flex-direction:column;min-width:0">
          <span class="cms-editor-name">${p(x.name)}</span>
          <span class="cms-editor-role">Chapter editor</span>
        </span>
        <button class="cms-logout-btn" id="cmsLogout" title="Sign out" aria-label="Sign out">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><path d="M16 17l5-5-5-5"></path><path d="M21 12H9"></path></svg>
        </button>
      </div>
    </aside>`}function He(){document.querySelectorAll("[data-view]").forEach(a=>{a.addEventListener("click",()=>{const t=a.getAttribute("data-view");V(t==="editor"&&!h?"articles":t)})});const e=document.getElementById("cmsLogout");e&&e.addEventListener("click",()=>Be())}function V(e){w=e,S()}function ze(){const e=document.getElementById("cmsMain");e&&(w==="articles"?Pe(e):w==="editor"?De(e):w==="taxonomy"?A(e):w==="site-translations"&&We(e))}async function Pe(e){const a=f;e.innerHTML='<div style="padding:40px;text-align:center;color:var(--text-muted)">Loading articles…</div>';try{E=await ve()}catch(n){if(a!==f)return;e.innerHTML=`<div class="cms-empty"><h3>Could not load articles</h3><p>${p(n.message)}</p></div>`;return}if(a!==f)return;const t={published:0,draft:0,scheduled:0};for(const n of E)t[n.status]!==void 0&&t[n.status]++;e.innerHTML=`
    <div class="cms-page-header">
      <div>
        <h1>Articles</h1>
        <p class="cms-subtitle">${E.length} articles · ${t.draft} drafts · ${t.scheduled} scheduled</p>
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
        ${P(E)}
      </div>
      <div class="cms-legend">
        <span class="cms-legend-swatch" style="background:var(--icf-cyan-100);border:1px solid var(--icf-cyan-300)"></span> AI-translated
        <span class="cms-legend-swatch cms-legend-gap" style="background:var(--neutral-100);border:1px solid var(--neutral-300)"></span> Pending
        <span class="cms-legend-swatch cms-legend-gap" style="background:var(--icf-indigo-600)"></span> Source language (EN)
      </div>
    </div>`,document.getElementById("newArticleBtn").addEventListener("click",ue),document.getElementById("articleSearch").addEventListener("input",n=>{const i=n.target.value.toLowerCase(),r=E.filter(o=>o.title.toLowerCase().includes(i)||(o.author||"").toLowerCase().includes(i));document.getElementById("articlesTable").innerHTML=P(r),D()}),document.querySelectorAll("[data-filter]").forEach(n=>{n.addEventListener("click",()=>{document.querySelectorAll("[data-filter]").forEach(o=>o.classList.remove("active")),n.classList.add("active");const i=n.getAttribute("data-filter"),r=i==="all"?E:E.filter(o=>o.status===i);document.getElementById("articlesTable").innerHTML=P(r),D()})}),D()}function P(e){if(e.length===0)return'<div class="cms-empty"><h3>No articles found</h3><p>Create your first article to get started.</p></div>';const a=`
    <div class="cms-table-head">
      <span>Article</span><span>Category</span><span>Status</span><span>Translations</span><span>Updated</span>
    </div>`,t=e.map(n=>{var d;const i=`cms-status-${n.status}`,r=n.status.charAt(0).toUpperCase()+n.status.slice(1),o=n.updated_at?je(n.updated_at):"",l=((d=n.category)==null?void 0:d.name)||"—";return`
      <div class="cms-table-row" data-id="${n.id}">
        <span style="display:flex;flex-direction:column;gap:3px;min-width:0">
          <span class="cms-article-title">${p(n.title)}</span>
          <span class="cms-article-author">by ${p(n.author)}</span>
        </span>
        <span class="cms-article-cat">${p(l)}</span>
        <span><span class="cms-status-badge ${i}"><span class="dot"></span>${r}</span></span>
        <span class="cms-lang-row">
          <span class="cms-lang-pill cms-lang-translated" title="German">DE</span>
          <span class="cms-lang-pill cms-lang-translated" title="French">FR</span>
          <span class="cms-lang-pill cms-lang-translated" title="Italian">IT</span>
          <span class="cms-lang-pill cms-lang-source" title="English source">EN</span>
        </span>
        <span class="cms-updated">${o}</span>
      </div>`}).join("");return a+t}function D(){document.querySelectorAll(".cms-table-row[data-id]").forEach(e=>{e.addEventListener("click",()=>{h=e.getAttribute("data-id"),w="editor",S()})})}async function ue(){try{h=(await Ce(x.id)).id,w="editor",S()}catch(e){alert("Could not create article: "+e.message)}}let s={title:"",slug:"",excerpt:"",body:"",author:"",status:"draft",category_id:null,featured_image_url:null,featured_image_alt:"",translations:{}},Y=null,ge=!1,$=!1,f=0;async function De(e){const a=f;if(!h){e.innerHTML=`
      <div class="cms-empty" style="padding:120px 20px">
        <h3>No article selected</h3>
        <p>Choose an article from the list or create a new one.</p>
        <button class="cms-new-btn" style="margin-top:20px" id="newArticleBtn2">New article</button>
      </div>`,document.getElementById("newArticleBtn2").addEventListener("click",ue);return}e.innerHTML='<div style="padding:40px;text-align:center;color:var(--text-muted)">Loading editor…</div>';try{const[t,n,i,r]=await Promise.all([Ie(h),ne(),se(),Ee(h)]);if(a!==f)return;if(W=n,M=i,!t){e.innerHTML='<div class="cms-empty"><h3>Article not found</h3></div>';return}s={id:t.id,title:t.title||"",slug:t.slug||"",excerpt:t.excerpt||"",body:t.body||"",author:t.author||"ICF Switzerland",status:t.status||"draft",category_id:t.category_id||null,featured_image_url:t.featured_image_url||null,featured_image_alt:t.featured_image_alt||"",tagIds:r.map(o=>o.id),translations:{de:{title:t.title_de||null,excerpt:t.excerpt_de||null,body:t.body_de||null},fr:{title:t.title_fr||null,excerpt:t.excerpt_fr||null,body:t.body_fr||null},it:{title:t.title_it||null,excerpt:t.excerpt_it||null,body:t.body_it||null}}},C(e)}catch(t){e.innerHTML=`<div class="cms-empty"><h3>Could not load article</h3><p>${p(t.message)}</p></div>`}}function C(e){const a=s.status==="published"?'<span class="cms-status-badge cms-status-published"><span class="dot"></span>Published</span>':s.status==="scheduled"?'<span class="cms-status-badge cms-status-scheduled"><span class="dot"></span>Scheduled</span>':'<span class="cms-status-badge cms-status-draft"><span class="dot"></span>Draft</span>',t=s.status==="published"?"Unpublish":"Publish";e.innerHTML=`
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
            ${N("de")}
            ${N("fr")}
            ${N("it")}
            <span class="cms-lang-tabs-hint">Click “Translate now” in the panel to generate translations</span>
          </div>
          <input type="text" class="cms-title-input" id="titleInput" value="${k(s.title)}" placeholder="Article title">
          <textarea class="cms-excerpt-input" id="excerptInput" rows="2" placeholder="Lead paragraph — a short summary that appears under the headline and in article cards.">${p(s.excerpt)}</textarea>
          <div class="cms-featured-drop ${s.featured_image_url?"has-image":""}" id="featuredDrop">
            ${s.featured_image_url?`<img src="${k(s.featured_image_url)}" alt="">`:""}
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
      ${Ne()}
    </div>`,Oe()}function Ne(){const e=W.map(i=>`<option value="${i.id}" ${s.category_id===i.id?"selected":""}>${p(i.name)}</option>`).join(""),a=new Set(s.tagIds||[]),t=M.filter(i=>a.has(i.id)).map(i=>`<span class="cms-tag-chip">${p(i.name)} <button data-tag-remove="${i.id}">×</button></span>`).join(""),n=M.filter(i=>!a.has(i.id)).map(i=>`<span class="cms-tag-cloud-item" data-tag-add="${i.id}">${p(i.name)} +</span>`).join("");return`
    <aside class="cms-settings-panel">
      <section class="cms-panel-section">
        <h3>Translations</h3>
        <button class="cms-translate-btn" id="translateNowBtn">${$?"Translating…":"Translate now"}</button>
        ${O("de")}
        ${O("fr")}
        ${O("it")}
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
          <input type="text" id="authorInput" value="${k(s.author)}">
        </div>
        <div class="cms-field">
          <label>Permalink</label>
          <div class="cms-slug-field">
            <span class="cms-slug-prefix">article.html?slug=</span>
            <input type="text" id="slugInput" value="${k(s.slug)}">
          </div>
          <div class="cms-permalink-display">
            <a href="article.html?slug=${k(s.slug)}" target="_blank">View article →</a>
          </div>
        </div>
        <div class="cms-field">
          <label>Featured image alt text</label>
          <input type="text" id="altInput" value="${k(s.featured_image_alt)}" placeholder="Describe the image for accessibility">
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
    </aside>`}function Oe(){document.getElementById("backToArticles").addEventListener("click",()=>{h=null,w="articles",S()});const e=document.getElementById("titleInput"),a=document.getElementById("excerptInput"),t=document.getElementById("bodyEditor"),n=document.getElementById("authorInput"),i=document.getElementById("slugInput"),r=document.getElementById("categorySelect"),o=document.getElementById("altInput");e.addEventListener("input",()=>{s.title=e.value,y()}),a.addEventListener("input",()=>{s.excerpt=a.value,y()}),t.addEventListener("input",()=>{s.body=t.innerHTML,y()}),n.addEventListener("input",()=>{s.author=n.value,y()}),i.addEventListener("input",()=>{s.slug=i.value,y()}),r.addEventListener("change",()=>{s.category_id=r.value||null,y()}),o.addEventListener("input",()=>{s.featured_image_alt=o.value,y()}),document.querySelectorAll("[data-cmd]").forEach(c=>{c.addEventListener("click",g=>{g.preventDefault(),document.execCommand(c.getAttribute("data-cmd"),!1,null),t.focus(),s.body=t.innerHTML,y()})}),document.querySelectorAll("[data-block]").forEach(c=>{c.addEventListener("click",g=>{g.preventDefault();const m=c.getAttribute("data-block");m==="h2"||m==="h3"||m==="p"?document.execCommand("formatBlock",!1,m):m==="blockquote"?document.execCommand("formatBlock",!1,"blockquote"):m==="ul"?document.execCommand("insertUnorderedList",!1,null):m==="ol"&&document.execCommand("insertOrderedList",!1,null),t.focus(),s.body=t.innerHTML,y()})});const l=document.getElementById("featuredDrop"),d=document.getElementById("featuredFileInput"),v=document.getElementById("featuredRemove");l.addEventListener("click",c=>{c.target!==v&&d.click()}),l.addEventListener("dragover",c=>{c.preventDefault(),l.classList.add("dragging")}),l.addEventListener("dragleave",()=>l.classList.remove("dragging")),l.addEventListener("drop",c=>{c.preventDefault(),l.classList.remove("dragging");const g=c.dataTransfer.files[0];g&&g.type.startsWith("image/")&&Z(g)}),d.addEventListener("change",()=>{const c=d.files[0];c&&Z(c)}),v.addEventListener("click",c=>{c.stopPropagation(),s.featured_image_url=null,l.classList.remove("has-image");const g=l.querySelector("img");g&&g.remove(),y()}),document.querySelectorAll("[data-tag-add]").forEach(c=>{c.addEventListener("click",()=>{const g=c.getAttribute("data-tag-add");s.tagIds=[...s.tagIds||[],g],C(document.getElementById("cmsMain"))})}),document.querySelectorAll("[data-tag-remove]").forEach(c=>{c.addEventListener("click",g=>{g.stopPropagation();const m=c.getAttribute("data-tag-remove");s.tagIds=(s.tagIds||[]).filter(me=>me!==m),C(document.getElementById("cmsMain"))})});const u=document.getElementById("newTagInput");u&&u.addEventListener("keydown",async c=>{if(c.key==="Enter"){c.preventDefault();const g=u.value.trim();if(!g)return;try{const m=await ie(g);M.push(m),s.tagIds=[...s.tagIds||[],m.id],C(document.getElementById("cmsMain"))}catch(m){alert("Could not create tag: "+m.message)}}}),document.getElementById("publishBtn").addEventListener("click",Re),document.getElementById("deleteBtn").addEventListener("click",qe);const b=document.getElementById("translateNowBtn");b&&b.addEventListener("click",ee),I.forEach(c=>{const g=document.getElementById(`retranslate-${c}`);g&&g.addEventListener("click",()=>ee(c))})}async function Z(e){const a=document.getElementById("featuredDrop");a.innerHTML='<span style="color:var(--text-muted);font-size:14px">Uploading…</span>';try{const t=await ke(e);s.featured_image_url=t,a.classList.add("has-image"),a.innerHTML=`<img src="${k(t)}" alt=""><button class="cms-featured-remove" id="featuredRemove">Remove image</button><input type="file" id="featuredFileInput" accept="image/*" style="display:none">`,document.getElementById("featuredRemove").addEventListener("click",n=>{var i;n.stopPropagation(),s.featured_image_url=null,a.classList.remove("has-image"),(i=a.querySelector("img"))==null||i.remove(),y()}),y()}catch(t){alert("Upload failed: "+t.message),C(document.getElementById("cmsMain"))}}function y(){ge=!0;const e=document.getElementById("saveStatus");e&&(e.textContent="Saving…",e.className="cms-save-status dirty"),clearTimeout(Y),Y=setTimeout(_,1500)}async function _(){if(h)try{await F(h,{title:s.title,slug:s.slug,excerpt:s.excerpt,body:s.body,author:s.author,category_id:s.category_id,featured_image_url:s.featured_image_url,featured_image_alt:s.featured_image_alt}),s.tagIds&&await Te(h,s.tagIds),ge=!1;const e=document.getElementById("saveStatus");e&&(e.textContent="All changes saved",e.className="cms-save-status saved")}catch(e){const a=document.getElementById("saveStatus");a&&(a.textContent="Save failed: "+e.message,a.className="cms-save-status dirty")}}async function Re(){var a,t;if(!h)return;if((s.status==="published"?"draft":"published")==="published"){const n=s.title&&s.title.trim()&&s.title.trim()!=="Untitled article",i=s.body&&s.body.replace(/<[^>]*>/g,"").trim().length>0;if(!n||!i){Q("warning","Article has no content","This article is missing a title or body text. It will be published without translations — visitors will see the English version in all languages. Continue?");return}Q("translating");try{await _();const r=`${s.title}|${s.excerpt}|${s.body}`;if(!((t=(a=s.translations)==null?void 0:a.de)!=null&&t.title)||s._translationHash!==r){J("Translating into German, French and Italian…");const d=[s.title||"",s.excerpt||"",s.body||""];for(const u of I){const[b,c,g]=await q(d,z,u);s.translations[u]={title:b,excerpt:c,body:g}}const v={};for(const u of I){const b=s.translations[u];b&&b.title!=null&&(v[`title_${u}`]=b.title,v[`excerpt_${u}`]=b.excerpt,v[`body_${u}`]=b.body)}await oe(s.id,v,r),s._translationHash=r}else J("Translations already up to date — publishing…");const l=await F(h,{status:"published",published_at:new Date().toISOString()});s.status="published",L(),C(document.getElementById("cmsMain")),U("Article published with translations.")}catch(r){L(),alert("Could not publish: "+r.message)}}else try{await _(),await F(h,{status:"draft",published_at:null}),s.status="draft",C(document.getElementById("cmsMain"))}catch(n){alert("Could not change publish status: "+n.message)}}function Q(e,a,t){L();const n=document.createElement("div");n.className="cms-publish-overlay",n.id="publishOverlay",e==="translating"?n.innerHTML=`
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
        <h3>${p(a)}</h3>
        <p>${p(t)}</p>
        <div class="cms-publish-actions">
          <button class="cms-topbar-btn" id="publishCancel">Cancel</button>
          <button class="cms-topbar-publish" id="publishForce">Publish anyway</button>
        </div>
      </div>`),document.body.appendChild(n),requestAnimationFrame(()=>n.classList.add("visible")),e==="warning"&&(document.getElementById("publishCancel").addEventListener("click",L),document.getElementById("publishForce").addEventListener("click",async()=>{L(),await Ge()}))}function J(e){const a=document.getElementById("publishOverlayMessage");a&&(a.textContent=e)}function L(){const e=document.getElementById("publishOverlay");e&&(e.classList.remove("visible"),setTimeout(()=>e.remove(),200))}async function Ge(){try{await _(),await F(h,{status:"published",published_at:new Date().toISOString()}),s.status="published",C(document.getElementById("cmsMain")),U("Article published (no translations generated).")}catch(e){alert("Could not publish: "+e.message)}}async function qe(){if(h&&confirm("Delete this article? This cannot be undone."))try{await Se(h),h=null,w="articles",S()}catch(e){alert("Could not delete: "+e.message)}}async function A(e){const a=f;e.innerHTML='<div style="padding:40px;text-align:center;color:var(--text-muted)">Loading…</div>';try{const[t,n,i,r]=await Promise.all([ne(),se(),fe(),ye()]);if(a!==f)return;W=t,M=n,e.innerHTML=`
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
            ${t.map(o=>`
              <div class="cms-tax-item">
                <span class="cms-tax-item-name">${p(o.name)}</span>
                <div style="display:flex;align-items:center;gap:12px">
                  <span class="cms-tax-item-count">${i[o.id]||0} articles</span>
                  <button class="cms-tax-item-delete" data-cat-del="${o.id}" title="Delete">
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
            ${n.map(o=>`
              <span class="cms-tag-cloud-item">
                ${p(o.name)} · ${r[o.id]||0}
                <button class="cms-tax-item-delete" data-tag-del="${o.id}" title="Delete" style="background:none;border:none;cursor:pointer;padding:0 0 0 4px">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round"><path d="M18 6L6 18M6 6l12 12"></path></svg>
                </button>
              </span>`).join("")||'<span style="font-size:13px;color:var(--text-muted)">No tags yet</span>'}
          </div>
        </div>
      </div>`,document.getElementById("addCatBtn").addEventListener("click",K),document.getElementById("newCatInput").addEventListener("keydown",o=>{o.key==="Enter"&&K()}),document.getElementById("addTagBtn").addEventListener("click",X),document.getElementById("newTagInput2").addEventListener("keydown",o=>{o.key==="Enter"&&X()}),document.querySelectorAll("[data-cat-del]").forEach(o=>{o.addEventListener("click",async()=>{const l=o.getAttribute("data-cat-del");try{await be(l),A(e)}catch(d){alert("Could not delete category: "+d.message)}})}),document.querySelectorAll("[data-tag-del]").forEach(o=>{o.addEventListener("click",async()=>{const l=o.getAttribute("data-tag-del");try{await we(l),A(e)}catch(d){alert("Could not delete tag: "+d.message)}})})}catch(t){e.innerHTML=`<div class="cms-empty"><h3>Could not load</h3><p>${p(t.message)}</p></div>`}}async function K(){const e=document.getElementById("newCatInput"),a=e.value.trim();if(a)try{await xe(a),e.value="",A(document.getElementById("cmsMain"))}catch(t){alert("Could not add category: "+t.message)}}async function X(){const e=document.getElementById("newTagInput2"),a=e.value.trim();if(a)try{await ie(a),e.value="",A(document.getElementById("cmsMain"))}catch(t){alert("Could not add tag: "+t.message)}}async function We(e){const a=f;e.innerHTML='<div style="padding:40px;text-align:center;color:var(--text-muted)">Loading…</div>';try{const t=await pe();if(a!==f)return;e.innerHTML=`
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
          ${he(t)}
        </div>

        <div class="cms-site-trans-card">
          <div class="cms-site-trans-card-header">
            <h2>Run pre-translation</h2>
          </div>
          <p class="cms-site-trans-explain">Translates ${B.length} static strings into German, French and Italian. Only missing strings are translated — existing ones are skipped.</p>
          <button class="cms-translate-btn" id="siteTransRunBtn">Translate site text now</button>
          <div class="cms-site-trans-result" id="siteTransResult"></div>
        </div>
      </div>`;const n=document.getElementById("siteTransRunBtn");n&&n.addEventListener("click",Ue)}catch(t){e.innerHTML=`<div class="cms-empty"><h3>Could not load</h3><p>${p(t.message)}</p></div>`}}function he(e){const a={de:"Deutsch",fr:"Français",it:"Italiano"};return I.map(t=>{const n=e[t]||{total:0,translated:0},i=n.total>0?Math.round(n.translated/n.total*100):0,r=i===100;return`
      <div class="cms-site-trans-row">
        <span class="cms-site-trans-lang">${a[t]}</span>
        <div class="cms-site-trans-bar-wrap">
          <div class="cms-site-trans-bar" style="width:${i}%"></div>
        </div>
        <span class="cms-site-trans-count ${r?"cms-site-trans-count-done":""}">${n.translated}/${n.total} ${r?"✓":""}</span>
      </div>`}).join("")}const H=40;async function G(e,a){const t=new Set;for(let n=0;n<a.length;n+=H){const i=a.slice(n,n+H),{data:r,error:o}=await T.from("translations").select("source_text").eq("source_lang",z).eq("target_lang",e).in("source_text",i);if(o)throw o;(r||[]).forEach(l=>t.add(l.source_text))}return t}async function pe(){const e={},a=B.length;for(const t of I){const n=await G(t,B);e[t]={total:a,translated:n.size}}return e}async function Ue(){const e=f,a=document.getElementById("siteTransRunBtn"),t=document.getElementById("siteTransResult");if(!(!a||!t)){a.disabled=!0,a.textContent="Translating…",t.innerHTML='<p class="cms-site-trans-explain">Translating site text into German, French and Italian…</p>';try{let n=0;for(const r of I){const o=await G(r,B),l=B.filter(u=>!o.has(u));if(l.length===0){t.innerHTML=`<p class="cms-site-trans-explain">${r.toUpperCase()}: already fully translated.</p>`;continue}t.innerHTML=`<p class="cms-site-trans-explain">${r.toUpperCase()}: translating ${l.length} strings…</p>`;for(let u=0;u<l.length;u+=H)await q(l.slice(u,u+H),z,r);const d=await G(r,l),v=l.filter(u=>!d.has(u));n+=d.size,v.length>0&&console.warn(`Site translation: ${v.length} strings for ${r.toUpperCase()} were not persisted`,v)}if(e!==f)return;n===0?t.innerHTML='<div class="cms-site-trans-error">No strings were persisted. Check the browser console for details — the translation service may be unavailable.</div>':t.innerHTML=`<div class="cms-site-trans-success">✓ Translated ${n} strings across all languages. Language switching is now instant on every page.</div>`,a.textContent="Re-run pre-translation",a.disabled=!1;const i=await pe();if(e!==f)return;document.querySelector(".cms-site-trans-card:nth-child(2)").innerHTML='<div class="cms-site-trans-card-header"><h2>Translation status</h2></div>'+he(i)}catch(n){t.innerHTML=`<div class="cms-site-trans-error">Translation failed: ${p(n.message)}</div>`,a.textContent="Translate site text now",a.disabled=!1}}}function N(e){const a=s.translations[e]||{},t=a.title!=null,n=a.body!=null,i=t&&n;return`<span class="cms-lang-tab ${i?"cms-lang-tab-done":"cms-lang-tab-pending"}">${e.toUpperCase()} ${i?'<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6L9 17l-5-5"></path></svg>':'<svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 7v6"></path><circle cx="12" cy="16.5" r="0.5" fill="currentColor"></circle></svg>'}</span>`}function O(e){const a=s.translations[e]||{},t=a.title!=null&&a.body!=null,n=t?"Translated":"Pending",i=t?"cms-tag-status-done":"cms-tag-status-pending";return`<div class="cms-tag-row">
    <span>${Ae[e]}</span>
    <span class="cms-tag-status ${i}">${n}</span>
    <button class="cms-retranslate-btn" id="retranslate-${e}" style="margin-left:auto;padding:2px 10px;font-size:11px;border-radius:999px;border:1px solid var(--border-default);background:transparent;color:var(--text-muted);cursor:pointer">${t?"Re-translate":"Translate"}</button>
  </div>`}async function ee(e){if($||!s.id)return;const t=typeof e=="string"?[e]:I;if(!s.title||s.title.trim()==="Untitled article"){alert("Please add a title before translating.");return}$=!0,te(!0),ae(!0);const n=[s.title||"",s.excerpt||"",s.body||""];try{for(const l of t){const[d,v,u]=await q(n,z,l);s.translations[l]={title:d,excerpt:v,body:u}}const i={};let r="";const o=`${s.title}|${s.excerpt}|${s.body}`;for(const l of I){const d=s.translations[l];d&&d.title!=null&&(i[`title_${l}`]=d.title,i[`excerpt_${l}`]=d.excerpt,i[`body_${l}`]=d.body,r=o)}await oe(s.id,i,r),C(document.getElementById("cmsMain")),U("Translations saved.")}catch(i){alert("Translation failed: "+(i.message||i))}finally{$=!1,te(!1),ae(!1)}}function te(e){const a=document.getElementById("translateNowBtn");a&&(a.textContent=e?"Translating…":"Translate now",a.disabled=e,a.classList.toggle("cms-translate-btn-busy",e))}function ae(e){document.querySelectorAll(".cms-retranslate-btn").forEach(a=>{a.disabled=e})}function U(e){const a=document.querySelector(".cms-panel-toast");a&&a.remove();const t=document.createElement("div");t.className="cms-panel-toast",t.textContent=e,document.body.appendChild(t),requestAnimationFrame(()=>t.classList.add("visible")),setTimeout(()=>{t.classList.remove("visible"),setTimeout(()=>t.remove(),300)},2400)}function p(e){return e?String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"):""}function k(e){return e?String(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;"):""}function je(e){const a=new Date(e),n=(new Date-a)/1e3;return n<60?"just now":n<3600?Math.floor(n/60)+" min ago":n<86400?Math.floor(n/3600)+" h ago":n<172800?"yesterday":a.toLocaleDateString("en-GB",{day:"numeric",month:"short"})}$e();
