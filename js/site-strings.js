/**
 * Central registry of all translatable static UI strings across the site.
 * The CMS "Site Translations" view sends these to the translate edge function
 * once, storing results in the translations table. After that, the public
 * site reads them as pure DB lookups — no live translation calls.
 */

export const SITE_STRINGS = [
  // ── Navigation ──────────────────────────────────
  'Find a Coach',
  'For Organisations',
  'For Coaches',
  'Insights',
  'Events',
  'About',
  'Member Login',
  'Join',
  'Toggle menu',
  'Search',

  // ── Footer ──────────────────────────────────────
  'Building a more human future through professional coaching.',
  'Find a Coach',
  'Coach Directory',
  'Why an ICF Coach?',
  'What is Coaching?',
  'FAQs',
  'Organisations',
  'Why Coaching?',
  'Executive Coaching',
  'Team Coaching',
  'Case Studies',
  'For Coaches',
  'Membership',
  'Credentials',
  'Communities',
  'Mentoring & Supervision',
  'About',
  'Our Vision',
  'Board',
  'Partnerships',
  'Contact',
  'Privacy',
  'Code of Ethics',
  'Imprint',

  // ── Insights / Blog page ────────────────────────
  'Coaching in action.',
  'Ideas, research and perspectives on the future of coaching, leadership, AI and diversity from ICF Switzerland.',
  'All',
  'Search articles…',
  'No articles found',
  'Try a different search or category filter.',

  // ── Article page ────────────────────────────────
  'Insights',
  'By',
  'Related articles',
  'Back to Insights',
  'Article not found',
  'The article you are looking for may have been moved or is no longer available.',
  'Something went wrong',
  'We could not load this article. Please try again later.',
  'Back to Insights',

  // ── Generic / shared ────────────────────────────
  'Loading articles…',
  'Could not load articles',
  'Please try again later.',
  'Deutsch',
  'Français',
  'Italiano',
  'English',
].filter((v, i, arr) => arr.indexOf(v) === i);

export const TARGET_LANGS = ['de', 'fr', 'it'];
export const SOURCE_LANG = 'en';
