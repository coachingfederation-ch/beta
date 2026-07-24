import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export { REGIONS, SPECIALTIES, LANGUAGES, CREDENTIALS } from './directory-constants.js';

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
