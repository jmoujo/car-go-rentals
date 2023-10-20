import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { Database } from './models/supabase';

// setup: https://supabase.com/docs/guides/auth/auth-helpers/nextjs#server-components
const cookieStore = cookies();
export const supabase = createServerComponentClient<Database>({
  cookies: () => cookieStore,
});
