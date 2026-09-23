/**
 * Supabase client placeholder.
 *
 * Nothing here talks to the network yet — the Nearby tab still reads from
 * lib/mockData.ts. To finish the wiring:
 *
 *   1. npx expo install @supabase/supabase-js @react-native-async-storage/async-storage
 *   2. Set EXPO_PUBLIC_SUPABASE_URL and EXPO_PUBLIC_SUPABASE_ANON_KEY in .env
 *   3. Replace `createSupabaseClient` below with the real `createClient` call,
 *      passing AsyncStorage as the auth storage adapter so sessions survive
 *      app restarts.
 *
 * The anon key is safe to ship in the bundle — it is scoped by row-level
 * security. Never put a service-role key in an EXPO_PUBLIC_* variable; those
 * are inlined into the client bundle.
 */

export interface SupabaseConfig {
  url: string;
  anonKey: string;
}

export function getSupabaseConfig(): SupabaseConfig | null {
  const url = process.env.EXPO_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY;

  if (!url || !anonKey) {
    return null;
  }

  return { url, anonKey };
}

export function isSupabaseConfigured(): boolean {
  return getSupabaseConfig() !== null;
}
