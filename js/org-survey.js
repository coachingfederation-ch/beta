import { supabase } from './supabase-client.js';
import { getCurrentLang, translateBatch, SOURCE_LANG } from './i18n.js';
import { QUESTIONS, SCALE, DIMENSION_LABELS, MATURITY_LEVELS, getAllSurveyStrings } from './org-survey-strings.js';

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

let surveyLang = SOURCE_LANG;
let trMap = new Map();

function tr(text) {
  if (surveyLang === SOURCE_LANG) return text;
  return trMap.get(text) || text;
}

function trProgress(current, total) {
  return tr('Question {current} of {total}')
    .replace('{current}', current)
    .replace('{total}', total);
}

async function ensureSurveyTranslated(lang) {
  if (lang === surveyLang) return;
  if (lang === SOURCE_LANG) {
    trMap = new Map();
  } else {
    trMap = await translateBatch(getAllSurveyStrings(), lang);
  }
  surveyLang = lang;
}

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
      <span class="survey-scale-label">${tr(opt.label)}</span>
      <span class="survey-scale-hint">${tr(opt.hint)}</span>
    </div>
  `).join('');

  questionsEl.innerHTML = `
    <div class="survey-question active">
      <div class="survey-category-label">${tr(q.category)}</div>
      <div class="survey-question-text">${tr(q.text)}</div>
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
  progressLabel.textContent = trProgress(state.current + 1, QUESTIONS.length);
  progressPercent.textContent = pct + '%';
}

function updateButtons() {
  backBtn.disabled = state.current === 0;
  nextBtn.disabled = state.answers[state.current] === null;

  if (state.current === QUESTIONS.length - 1) {
    nextBtn.textContent = tr('See Results \u2192');
  } else {
    nextBtn.textContent = tr('Next \u2192');
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
          <span class="survey-dimension-name">${tr(DIMENSION_LABELS[d])}</span>
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
      <div class="score-label">${tr(maturity.label)}</div>
      <div class="score-range">${tr('out of 40 possible points')}</div>
    </div>
    <div class="survey-dimensions">${dimsHtml}</div>
    <div class="survey-results-summary">
      <h4>${tr('What this means')}</h4>
      <p>${tr(maturity.summary)}</p>
    </div>
    <div class="survey-contact-form" id="survey-contact-form">
      <h4>${tr('Want a personalised follow-up?')}</h4>
      <p>${tr('Leave your details and the ICF Switzerland team will reach out to discuss how coaching can support your organisation.')}</p>
      <div class="survey-form-row">
        <input type="text" id="survey-org-name" placeholder="${tr('Organisation name')}" class="survey-input">
        <input type="text" id="survey-person-name" placeholder="${tr('Your name')}" class="survey-input">
      </div>
      <div class="survey-form-row">
        <input type="email" id="survey-email" placeholder="${tr('Work email')}" class="survey-input">
        <input type="text" id="survey-role" placeholder="${tr('Your role (e.g. HR Director)')}" class="survey-input">
      </div>
      <label class="survey-consent">
        <input type="checkbox" id="survey-consent-check">
        <span>${tr('Yes, I\u2019d like ICF Switzerland to contact me about coaching in my organisation.')}</span>
      </label>
      <div class="survey-form-actions">
        <button class="btn btn-primary btn-lg" id="survey-submit-contact">${tr('Submit & Share Results')}</button>
        <button class="btn btn-secondary btn-lg" id="survey-skip-contact">${tr('No thanks')}</button>
      </div>
      <div class="survey-form-status" id="survey-form-status"></div>
    </div>
    <div class="survey-results-actions" id="survey-final-actions" style="display:none">
      <a href="find-a-coach.html" class="btn btn-primary btn-lg">${tr('Find a Coach')}</a>
      <button class="btn btn-secondary btn-lg" id="survey-retake">${tr('Retake Assessment')}</button>
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
      statusEl.textContent = tr('Please enter your email and tick the consent box to submit.');
      statusEl.className = 'survey-form-status error';
      return;
    }

    const btn = document.getElementById('survey-submit-contact');
    btn.disabled = true;
    btn.textContent = tr('Submitting\u2026');

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
      statusEl.textContent = tr('Something went wrong. Please try again.');
      statusEl.className = 'survey-form-status error';
      btn.disabled = false;
      btn.textContent = tr('Submit & Share Results');
      console.error('Survey contact save error:', error.message);
      return;
    }

    statusEl.textContent = tr('Thank you! We\u2019ll be in touch soon.');
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

function rerender() {
  if (state.finished) {
    renderResults();
  } else {
    renderQuestion();
  }
}

document.addEventListener('icf:langchange', async (e) => {
  await ensureSurveyTranslated(e.detail.lang);
  rerender();
});

async function init() {
  const lang = getCurrentLang();
  if (lang !== SOURCE_LANG) {
    renderQuestion();
    await ensureSurveyTranslated(lang);
    rerender();
  } else {
    surveyLang = SOURCE_LANG;
    renderQuestion();
  }
}

init();
