import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const REGIONS = ['All cantons', 'Zürich', 'Genève', 'Basel', 'Bern', 'Ticino', 'Lausanne', 'Romandie', 'Other'];
export const SPECIALTIES = ['Leadership', 'Executive', 'Team coaching', 'Career & transition', 'Life & wellbeing', 'Systemic', 'Mentor coaching', 'Supervision', 'Ethics'];
export const LANGUAGES = ['DE', 'FR', 'IT', 'EN'];
export const CREDENTIALS = ['ACC', 'PCC', 'MCC'];

export function initials(name) {
  return name.split(' ').filter(Boolean).slice(0, 2).map(p => p[0].toUpperCase()).join('');
}

export function credClass(credential) {
  return `cred cred-${credential}`;
}

export async function fetchCoaches(serviceType) {
  const { data, error } = await supabase
    .from('coaches')
    .select('*')
    .eq('service_type', serviceType)
    .order('name', { ascending: true });

  if (error) throw error;
  return data || [];
}
