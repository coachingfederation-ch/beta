import { REGIONS, SPECIALTIES } from './directory-constants.js';

export const TAB_LABELS = { coach: 'coaches', mentor: 'mentors', supervisor: 'supervisors' };
export const TAB_TITLES = {
  coach: 'Find a credentialed coach',
  mentor: 'Find a mentor for coaches',
  supervisor: 'Find a supervisor for coaches',
};
export const TAB_SUBS = {
  coach: 'Every coach listed holds an active ICF credential and commits to the ICF Code of Ethics.',
  mentor: 'ICF-credentialed mentor coaches to help you develop your coaching skills and prepare for your credential.',
  supervisor: 'Experienced supervisors supporting coaches through reflective practice, ethics and professional growth.',
};

export const DIRECTORY_UI_STRINGS = [
  ...Object.values(TAB_TITLES),
  ...Object.values(TAB_SUBS),
  ...Object.values(TAB_LABELS),
  'Loading…',
  'Could not load coaches',
  'No coaches match your filters',
  'Try widening your region, credential or specialty.',
  'Loading coaches…',
  'Accepting new clients',
  'Waitlist only',
  'View profile',
  'Clear all filters',
  ...REGIONS,
  ...SPECIALTIES,
];
