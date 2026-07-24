import { supabase } from './supabase-client.js';

const ALLOWED_DOMAIN = 'coachingfederation.ch';

export async function signInWithGoogle() {
  const redirectTo = `${window.location.origin}${window.location.pathname}`;
  await supabase.auth.signInWithOAuth({
    provider: 'google',
    options: {
      redirectTo,
      queryParams: { hd: ALLOWED_DOMAIN },
    },
  });
}

export async function signOut() {
  await supabase.auth.signOut();
}

export function isAllowedEmail(email) {
  if (!email) return false;
  return email.toLowerCase().endsWith(`@${ALLOWED_DOMAIN}`);
}

export async function getCurrentEditor() {
  const { data: { session } } = await supabase.auth.getSession();
  if (!session) return null;

  const user = session.user;
  const email = user?.email || '';
  if (!isAllowedEmail(email)) {
    await supabase.auth.signOut();
    return null;
  }

  const fullName = user?.user_metadata?.full_name || user?.user_metadata?.name || email.split('@')[0];
  const initials = fullName
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0].toUpperCase())
    .join('');

  return { email, name: fullName, initials: initials || 'ED', id: user.id };
}

export function onAuthChange(callback) {
  return supabase.auth.onAuthStateChange((_event, session) => {
    (async () => {
      if (!session) {
        callback(null);
        return;
      }
      const email = session.user?.email || '';
      if (!isAllowedEmail(email)) {
        await supabase.auth.signOut();
        callback(null);
        return;
      }
      const editor = await getCurrentEditor();
      callback(editor);
    })();
  });
}
