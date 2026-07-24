import { supabase } from './supabase-client.js';

const QUESTIONS = [
  {
    category: 'Leadership Engagement',
    text: 'How would you rate leadership\u2019s active commitment to coaching in your organisation?',
    hint: 'Consider visible sponsorship, resource allocation and personal participation',
    dimension: 'leadership',
  },
  {
    category: 'Leadership Engagement',
    text: 'Do your senior leaders model coaching behaviours in their everyday interactions?',
    hint: 'Listening, asking over telling, creating space for reflection',
    dimension: 'leadership',
  },
  {
    category: 'Coaching Capability',
    text: 'To what extent have managers and leaders been trained in coaching skills?',
    hint: 'Formal programmes, certifications or structured development',
    dimension: 'capability',
  },
  {
    category: 'Coaching Capability',
    text: 'How embedded is coaching in your internal development and talent processes?',
    hint: 'Onboarding, leadership pipelines, performance conversations',
    dimension: 'capability',
  },
  {
    category: 'Culture & Mindset',
    text: 'How would you describe the prevailing communication culture in your organisation?',
    hint: 'Openness, feedback, psychological safety, curiosity',
    dimension: 'culture',
  },
  {
    category: 'Culture & Mindset',
    text: 'Is continuous learning and development visibly valued and practised?',
    hint: 'Budget, time allocation, peer learning, knowledge sharing',
    dimension: 'culture',
  },
  {
    category: 'Measurement & Impact',
    text: 'Does your organisation measure the impact of coaching initiatives?',
    hint: 'Defined metrics, regular review, connecting coaching to outcomes',
    dimension: 'measurement',
  },
  {
    category: 'Measurement & Impact',
    text: 'How well are coaching outcomes linked to your organisational goals?',
    hint: 'Strategic alignment, leadership development, retention, wellbeing',
    dimension: 'measurement',
  },
];

const SCALE = [
  { value: 1, label: 'Not yet present', hint: 'Little to no evidence' },
  { value: 2, label: 'Emerging', hint: 'Early signs, ad hoc' },
  { value: 3, label: 'Developing', hint: 'Growing, partially structured' },
  { value: 4, label: 'Established', hint: 'Consistent and visible' },
  { value: 5, label: 'Embedded', hint: 'Deeply part of how we work' },
];

const DIMENSION_LABELS = {
  leadership: 'Leadership Engagement',
  capability: 'Coaching Capability',
  culture: 'Culture & Mindset',
  measurement: 'Measurement & Impact',
};

const MATURITY_LEVELS = [
  { max: 8, label: 'Starting Out', summary: 'Your organisation is at the beginning of its coaching journey. This is an exciting place to be \u2014 small, intentional steps can create significant shifts. Focus on building leadership awareness and introducing basic coaching skills to managers.' },
  { max: 12, label: 'Taking Shape', summary: 'Coaching is emerging in your organisation. You have some foundational elements in place. The next step is to strengthen leadership sponsorship and begin structuring coaching capability more systematically.' },
  { max: 16, label: 'Gaining Momentum', summary: 'Coaching is developing real traction. Your organisation has visible coaching practices and growing capability. Focus now on embedding coaching into talent processes and starting to measure its impact.' },
  { max: 20, label: 'Well Established', summary: 'You have a strong coaching culture. Coaching is consistent, visible and valued across the organisation. The opportunity now is to deepen measurement, refine impact linkage, and ensure coaching reaches every level.' },
  { max: 24, label: 'Coaching Maturity', summary: 'Your organisation exemplifies coaching maturity. Coaching is deeply embedded in how people lead, communicate and grow. Continue to innovate, share your story and mentor other organisations on the journey.' },
];

function getMaturity(score) {
  return MATURITY_LEVELS.find((m) => score <= m.max) || MATURITY_LEVELS[MATURITY_LEVELS.length - 1];
}

function getFillClass(avg) {
  if (avg < 2.5) return 'fill-low';
  if (avg < 3.5) return 'fill-mid';
  return 'fill-high';
}

const state = {
  current: 0,
  answers: new Array(QUESTIONS.length).fill(null),
  finished: false,
  saved: false,
};

const questionsEl = document.getElementById('survey-questions');
const resultsEl = document.getElementById('survey-results');
const actionsEl = document.getElementById('survey-actions');
const backBtn = document.getElementById('survey-back');
const nextBtn = document.getElementById('survey-next');
const progressFill = document.getElementById('survey-progress-fill');
const progressLabel = document.getElementById('survey-progress-label');
const progressPercent = document.getElementById('survey-progress-percent');

function renderQuestion() {
  const q = QUESTIONS[state.current];
  const selectedValue = state.answers[state.current];

  const optionsHtml = SCALE.map((opt) => `
    <div class="survey-scale-option${opt.value === selectedValue ? ' selected' : ''}" data-value="${opt.value}" role="button" tabindex="0">
      <span class="survey-scale-radio"></span>
      <span class="survey-scale-label">${opt.label}</span>
      <span class="survey-scale-hint">${opt.hint}</span>
    </div>
  `).join('');

  questionsEl.innerHTML = `
    <div class="survey-question active">
      <div class="survey-category-label">${q.category}</div>
      <div class="survey-question-text">${q.text}</div>
      <div class="survey-scale">${optionsHtml}</div>
    </div>
  `;

  questionsEl.querySelectorAll('.survey-scale-option').forEach((opt) => {
    const select = () => {
      const val = parseInt(opt.dataset.value, 10);
      state.answers[state.current] = val;
      opt.parentElement.querySelectorAll('.survey-scale-option').forEach((o) => o.classList.remove('selected'));
      opt.classList.add('selected');
      nextBtn.disabled = false;
    };
    opt.addEventListener('click', select);
    opt.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        select();
      }
    });
  });

  updateProgress();
  updateButtons();
}

function updateProgress() {
  const pct = Math.round(((state.current + 1) / QUESTIONS.length) * 100);
  progressFill.style.width = pct + '%';
  progressLabel.textContent = `Question ${state.current + 1} of ${QUESTIONS.length}`;
  progressPercent.textContent = pct + '%';
}

function updateButtons() {
  backBtn.disabled = state.current === 0;
  nextBtn.disabled = state.answers[state.current] === null;

  if (state.current === QUESTIONS.length - 1) {
    nextBtn.textContent = 'See Results \u2192';
  } else {
    nextBtn.textContent = 'Next \u2192';
  }
}

function computeResults() {
  const dims = {};
  Object.keys(DIMENSION_LABELS).forEach((d) => {
    const scores = QUESTIONS
      .map((q, i) => (q.dimension === d ? state.answers[i] : null))
      .filter((v) => v !== null);
    dims[d] = scores.reduce((a, b) => a + b, 0) / scores.length;
  });

  const totalScore = state.answers.reduce((a, b) => a + b, 0);
  const maturity = getMaturity(totalScore);
  return { dims, totalScore, maturity };
}

async function saveSurvey() {
  const { dims, totalScore, maturity } = computeResults();

  const answersData = QUESTIONS.map((q, i) => ({
    questionId: i,
    dimension: q.dimension,
    value: state.answers[i],
  }));

  const { error } = await supabase.from('coaching_culture_surveys').insert({
    total_score: totalScore,
    maturity_label: maturity.label,
    dimension_scores: dims,
    answers: answersData,
    contact_consent: false,
  });

  if (error) {
    console.error('Survey save error:', error.message);
  } else {
    state.saved = true;
  }
}

function renderResults() {
  const { dims, totalScore, maturity } = computeResults();

  const dimsHtml = Object.keys(DIMENSION_LABELS).map((d) => {
    const avg = dims[d];
    const pct = (avg / 5) * 100;
    return `
      <div class="survey-dimension">
        <div class="survey-dimension-header">
          <span class="survey-dimension-name">${DIMENSION_LABELS[d]}</span>
          <span class="survey-dimension-score">${avg.toFixed(1)} / 5</span>
        </div>
        <div class="survey-dimension-bar">
          <div class="survey-dimension-fill ${getFillClass(avg)}" style="width:${pct}%"></div>
        </div>
      </div>
    `;
  }).join('');

  resultsEl.innerHTML = `
    <div class="survey-results-score">
      <div class="score-number">${totalScore}</div>
      <div class="score-label">${maturity.label}</div>
      <div class="score-range">out of 40 possible points</div>
    </div>
    <div class="survey-dimensions">${dimsHtml}</div>
    <div class="survey-results-summary">
      <h4>What this means</h4>
      <p>${maturity.summary}</p>
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
        <span>Yes, I\u2019d like ICF Switzerland to contact me about coaching in my organisation.</span>
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
  `;

  resultsEl.classList.add('active');
  questionsEl.querySelector('.survey-question')?.classList.remove('active');

  document.getElementById('survey-skip-contact')?.addEventListener('click', () => {
    showFinalActions();
  });

  document.getElementById('survey-submit-contact')?.addEventListener('click', async () => {
    const orgName = document.getElementById('survey-org-name').value.trim();
    const personName = document.getElementById('survey-person-name').value.trim();
    const email = document.getElementById('survey-email').value.trim();
    const role = document.getElementById('survey-role').value.trim();
    const consent = document.getElementById('survey-consent-check').checked;
    const statusEl = document.getElementById('survey-form-status');

    if (!email || !consent) {
      statusEl.textContent = 'Please enter your email and tick the consent box to submit.';
      statusEl.className = 'survey-form-status error';
      return;
    }

    const btn = document.getElementById('survey-submit-contact');
    btn.disabled = true;
    btn.textContent = 'Submitting\u2026';

    const { dims: d2, totalScore: ts, maturity: m2 } = computeResults();
    const answersData = QUESTIONS.map((q, i) => ({
      questionId: i,
      dimension: q.dimension,
      value: state.answers[i],
    }));

    const { error } = await supabase.from('coaching_culture_surveys').insert({
      organisation_name: orgName || null,
      respondent_name: personName || null,
      respondent_email: email,
      respondent_role: role || null,
      total_score: ts,
      maturity_label: m2.label,
      dimension_scores: d2,
      answers: answersData,
      contact_consent: true,
    });

    if (error) {
      statusEl.textContent = 'Something went wrong. Please try again.';
      statusEl.className = 'survey-form-status error';
      btn.disabled = false;
      btn.textContent = 'Submit & Share Results';
      console.error('Survey contact save error:', error.message);
      return;
    }

    statusEl.textContent = 'Thank you! We\u2019ll be in touch soon.';
    statusEl.className = 'survey-form-status success';
    showFinalActions();
  });

  document.getElementById('survey-retake')?.addEventListener('click', () => {
    state.current = 0;
    state.answers = new Array(QUESTIONS.length).fill(null);
    state.finished = false;
    state.saved = false;
    resultsEl.classList.remove('active');
    resultsEl.innerHTML = '';
    actionsEl.style.display = 'flex';
    renderQuestion();
  });
}

function showFinalActions() {
  const formEl = document.getElementById('survey-contact-form');
  const finalEl = document.getElementById('survey-final-actions');
  if (formEl) formEl.style.display = 'none';
  if (finalEl) finalEl.style.display = 'flex';
}

nextBtn.addEventListener('click', () => {
  if (state.answers[state.current] === null) return;
  if (state.current === QUESTIONS.length - 1) {
    state.finished = true;
    actionsEl.style.display = 'none';
    renderResults();
    saveSurvey();
  } else {
    state.current++;
    renderQuestion();
  }
});

backBtn.addEventListener('click', () => {
  if (state.current > 0) {
    state.current--;
    renderQuestion();
  }
});

renderQuestion();
