export const QUESTIONS = [
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

export const SCALE = [
  { value: 1, label: 'Not yet present', hint: 'Little to no evidence' },
  { value: 2, label: 'Emerging', hint: 'Early signs, ad hoc' },
  { value: 3, label: 'Developing', hint: 'Growing, partially structured' },
  { value: 4, label: 'Established', hint: 'Consistent and visible' },
  { value: 5, label: 'Embedded', hint: 'Deeply part of how we work' },
];

export const DIMENSION_LABELS = {
  leadership: 'Leadership Engagement',
  capability: 'Coaching Capability',
  culture: 'Culture & Mindset',
  measurement: 'Measurement & Impact',
};

export const MATURITY_LEVELS = [
  { max: 8, label: 'Starting Out', summary: 'Your organisation is at the beginning of its coaching journey. This is an exciting place to be \u2014 small, intentional steps can create significant shifts. Focus on building leadership awareness and introducing basic coaching skills to managers.' },
  { max: 12, label: 'Taking Shape', summary: 'Coaching is emerging in your organisation. You have some foundational elements in place. The next step is to strengthen leadership sponsorship and begin structuring coaching capability more systematically.' },
  { max: 16, label: 'Gaining Momentum', summary: 'Coaching is developing real traction. Your organisation has visible coaching practices and growing capability. Focus now on embedding coaching into talent processes and starting to measure its impact.' },
  { max: 20, label: 'Well Established', summary: 'You have a strong coaching culture. Coaching is consistent, visible and valued across the organisation. The opportunity now is to deepen measurement, refine impact linkage, and ensure coaching reaches every level.' },
  { max: 24, label: 'Coaching Maturity', summary: 'Your organisation exemplifies coaching maturity. Coaching is deeply embedded in how people lead, communicate and grow. Continue to innovate, share your story and mentor other organisations on the journey.' },
];

export const SURVEY_UI_STRINGS = [
  'Question {current} of {total}',
  'Next \u2192',
  'See Results \u2192',
  'out of 40 possible points',
  'What this means',
  'Want a personalised follow-up?',
  'Leave your details and the ICF Switzerland team will reach out to discuss how coaching can support your organisation.',
  'Organisation name',
  'Your name',
  'Work email',
  'Your role (e.g. HR Director)',
  'Yes, I\u2019d like ICF Switzerland to contact me about coaching in my organisation.',
  'Submit & Share Results',
  'No thanks',
  'Please enter your email and tick the consent box to submit.',
  'Submitting\u2026',
  'Something went wrong. Please try again.',
  'Thank you! We\u2019ll be in touch soon.',
  'Find a Coach',
  'Retake Assessment',
];

export function getAllSurveyStrings() {
  const out = [];
  for (const q of QUESTIONS) out.push(q.category, q.text, q.hint);
  for (const s of SCALE) out.push(s.label, s.hint);
  out.push(...Object.values(DIMENSION_LABELS));
  for (const m of MATURITY_LEVELS) out.push(m.label, m.summary);
  out.push(...SURVEY_UI_STRINGS);
  return out;
}
