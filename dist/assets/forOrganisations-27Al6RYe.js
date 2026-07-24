import{s as C}from"./i18n-CLQBegKv.js";import{m as N}from"./layout-D8U7-DMP.js";N("For Organisations");const o=[{category:"Leadership Engagement",text:"How would you rate leadership’s active commitment to coaching in your organisation?",hint:"Consider visible sponsorship, resource allocation and personal participation",dimension:"leadership"},{category:"Leadership Engagement",text:"Do your senior leaders model coaching behaviours in their everyday interactions?",hint:"Listening, asking over telling, creating space for reflection",dimension:"leadership"},{category:"Coaching Capability",text:"To what extent have managers and leaders been trained in coaching skills?",hint:"Formal programmes, certifications or structured development",dimension:"capability"},{category:"Coaching Capability",text:"How embedded is coaching in your internal development and talent processes?",hint:"Onboarding, leadership pipelines, performance conversations",dimension:"capability"},{category:"Culture & Mindset",text:"How would you describe the prevailing communication culture in your organisation?",hint:"Openness, feedback, psychological safety, curiosity",dimension:"culture"},{category:"Culture & Mindset",text:"Is continuous learning and development visibly valued and practised?",hint:"Budget, time allocation, peer learning, knowledge sharing",dimension:"culture"},{category:"Measurement & Impact",text:"Does your organisation measure the impact of coaching initiatives?",hint:"Defined metrics, regular review, connecting coaching to outcomes",dimension:"measurement"},{category:"Measurement & Impact",text:"How well are coaching outcomes linked to your organisational goals?",hint:"Strategic alignment, leadership development, retention, wellbeing",dimension:"measurement"}],D=[{value:1,label:"Not yet present",hint:"Little to no evidence"},{value:2,label:"Emerging",hint:"Early signs, ad hoc"},{value:3,label:"Developing",hint:"Growing, partially structured"},{value:4,label:"Established",hint:"Consistent and visible"},{value:5,label:"Embedded",hint:"Deeply part of how we work"}],b={leadership:"Leadership Engagement",capability:"Coaching Capability",culture:"Culture & Mindset",measurement:"Measurement & Impact"},h=[{max:8,label:"Starting Out",summary:"Your organisation is at the beginning of its coaching journey. This is an exciting place to be — small, intentional steps can create significant shifts. Focus on building leadership awareness and introducing basic coaching skills to managers."},{max:12,label:"Taking Shape",summary:"Coaching is emerging in your organisation. You have some foundational elements in place. The next step is to strengthen leadership sponsorship and begin structuring coaching capability more systematically."},{max:16,label:"Gaining Momentum",summary:"Coaching is developing real traction. Your organisation has visible coaching practices and growing capability. Focus now on embedding coaching into talent processes and starting to measure its impact."},{max:20,label:"Well Established",summary:"You have a strong coaching culture. Coaching is consistent, visible and valued across the organisation. The opportunity now is to deepen measurement, refine impact linkage, and ensure coaching reaches every level."},{max:24,label:"Coaching Maturity",summary:"Your organisation exemplifies coaching maturity. Coaching is deeply embedded in how people lead, communicate and grow. Continue to innovate, share your story and mentor other organisations on the journey."}];function H(t){return h.find(a=>t<=a.max)||h[h.length-1]}function A(t){return t<2.5?"fill-low":t<3.5?"fill-mid":"fill-high"}const e={current:0,answers:new Array(o.length).fill(null),finished:!1,saved:!1},f=document.getElementById("survey-questions"),g=document.getElementById("survey-results"),L=document.getElementById("survey-actions"),S=document.getElementById("survey-back"),d=document.getElementById("survey-next"),O=document.getElementById("survey-progress-fill"),Y=document.getElementById("survey-progress-label"),R=document.getElementById("survey-progress-percent");function p(){const t=o[e.current],a=e.answers[e.current],l=D.map(n=>`
    <div class="survey-scale-option${n.value===a?" selected":""}" data-value="${n.value}" role="button" tabindex="0">
      <span class="survey-scale-radio"></span>
      <span class="survey-scale-label">${n.label}</span>
      <span class="survey-scale-hint">${n.hint}</span>
    </div>
  `).join("");f.innerHTML=`
    <div class="survey-question active">
      <div class="survey-category-label">${t.category}</div>
      <div class="survey-question-text">${t.text}</div>
      <div class="survey-scale">${l}</div>
    </div>
  `,f.querySelectorAll(".survey-scale-option").forEach(n=>{const i=()=>{const s=parseInt(n.dataset.value,10);e.answers[e.current]=s,n.parentElement.querySelectorAll(".survey-scale-option").forEach(r=>r.classList.remove("selected")),n.classList.add("selected"),d.disabled=!1};n.addEventListener("click",i),n.addEventListener("keydown",s=>{(s.key==="Enter"||s.key===" ")&&(s.preventDefault(),i())})}),j(),W()}function j(){const t=Math.round((e.current+1)/o.length*100);O.style.width=t+"%",Y.textContent=`Question ${e.current+1} of ${o.length}`,R.textContent=t+"%"}function W(){S.disabled=e.current===0,d.disabled=e.answers[e.current]===null,e.current===o.length-1?d.textContent="See Results →":d.textContent="Next →"}function w(){const t={};Object.keys(b).forEach(n=>{const i=o.map((s,r)=>s.dimension===n?e.answers[r]:null).filter(s=>s!==null);t[n]=i.reduce((s,r)=>s+r,0)/i.length});const a=e.answers.reduce((n,i)=>n+i,0),l=H(a);return{dims:t,totalScore:a,maturity:l}}async function P(){const{dims:t,totalScore:a,maturity:l}=w(),n=o.map((s,r)=>({questionId:r,dimension:s.dimension,value:e.answers[r]})),{error:i}=await C.from("coaching_culture_surveys").insert({total_score:a,maturity_label:l.label,dimension_scores:t,answers:n,contact_consent:!1});i?console.error("Survey save error:",i.message):e.saved=!0}function Q(){var i,s,r,E;const{dims:t,totalScore:a,maturity:l}=w(),n=Object.keys(b).map(m=>{const u=t[m],y=u/5*100;return`
      <div class="survey-dimension">
        <div class="survey-dimension-header">
          <span class="survey-dimension-name">${b[m]}</span>
          <span class="survey-dimension-score">${u.toFixed(1)} / 5</span>
        </div>
        <div class="survey-dimension-bar">
          <div class="survey-dimension-fill ${A(u)}" style="width:${y}%"></div>
        </div>
      </div>
    `}).join("");g.innerHTML=`
    <div class="survey-results-score">
      <div class="score-number">${a}</div>
      <div class="score-label">${l.label}</div>
      <div class="score-range">out of 40 possible points</div>
    </div>
    <div class="survey-dimensions">${n}</div>
    <div class="survey-results-summary">
      <h4>What this means</h4>
      <p>${l.summary}</p>
    </div>
    <div class="survey-contact-form" id="survey-contact-form">
      <h4>Want a personalised follow-up?</h4>
      <p>Leave your details and the ICF Switzerland team will reach out to discuss how coaching can support your organisation.</p>
      <div class="survey-form-row">
        <input type="text" id="survey-org-name" placeholder="Organisation name" class="survey-input">
        <input type="text" id="survey-person-name" placeholder="Your name" class="survey-input">
      </div>
      <div class="survey-form-row">
        <input type="email" id="survey-email" placeholder="Work email" class="survey-input">
        <input type="text" id="survey-role" placeholder="Your role (e.g. HR Director)" class="survey-input">
      </div>
      <label class="survey-consent">
        <input type="checkbox" id="survey-consent-check">
        <span>Yes, I’d like ICF Switzerland to contact me about coaching in my organisation.</span>
      </label>
      <div class="survey-form-actions">
        <button class="btn btn-primary btn-lg" id="survey-submit-contact">Submit &amp; Share Results</button>
        <button class="btn btn-secondary btn-lg" id="survey-skip-contact">No thanks</button>
      </div>
      <div class="survey-form-status" id="survey-form-status"></div>
    </div>
    <div class="survey-results-actions" id="survey-final-actions" style="display:none">
      <a href="find-a-coach.html" class="btn btn-primary btn-lg">Find a Coach</a>
      <button class="btn btn-secondary btn-lg" id="survey-retake">Retake Assessment</button>
    </div>
  `,g.classList.add("active"),(i=f.querySelector(".survey-question"))==null||i.classList.remove("active"),(s=document.getElementById("survey-skip-contact"))==null||s.addEventListener("click",()=>{I()}),(r=document.getElementById("survey-submit-contact"))==null||r.addEventListener("click",async()=>{const m=document.getElementById("survey-org-name").value.trim(),u=document.getElementById("survey-person-name").value.trim(),y=document.getElementById("survey-email").value.trim(),B=document.getElementById("survey-role").value.trim(),_=document.getElementById("survey-consent-check").checked,c=document.getElementById("survey-form-status");if(!y||!_){c.textContent="Please enter your email and tick the consent box to submit.",c.className="survey-form-status error";return}const v=document.getElementById("survey-submit-contact");v.disabled=!0,v.textContent="Submitting…";const{dims:$,totalScore:M,maturity:T}=w(),q=o.map((F,k)=>({questionId:k,dimension:F.dimension,value:e.answers[k]})),{error:x}=await C.from("coaching_culture_surveys").insert({organisation_name:m||null,respondent_name:u||null,respondent_email:y,respondent_role:B||null,total_score:M,maturity_label:T.label,dimension_scores:$,answers:q,contact_consent:!0});if(x){c.textContent="Something went wrong. Please try again.",c.className="survey-form-status error",v.disabled=!1,v.textContent="Submit & Share Results",console.error("Survey contact save error:",x.message);return}c.textContent="Thank you! We’ll be in touch soon.",c.className="survey-form-status success",I()}),(E=document.getElementById("survey-retake"))==null||E.addEventListener("click",()=>{e.current=0,e.answers=new Array(o.length).fill(null),e.finished=!1,e.saved=!1,g.classList.remove("active"),g.innerHTML="",L.style.display="flex",p()})}function I(){const t=document.getElementById("survey-contact-form"),a=document.getElementById("survey-final-actions");t&&(t.style.display="none"),a&&(a.style.display="flex")}d.addEventListener("click",()=>{e.answers[e.current]!==null&&(e.current===o.length-1?(e.finished=!0,L.style.display="none",Q(),P()):(e.current++,p()))});S.addEventListener("click",()=>{e.current>0&&(e.current--,p())});p();
