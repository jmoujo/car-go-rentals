import { Landing } from '@/features/landing';
import { Database } from '@/models/supabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default async function Home() {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });
  const res = await supabase.auth.getSession();

  if (
    res.data.session &&
    res.data.session.user?.user_metadata.role &&
    res.data.session.user?.user_metadata.role === 'provider'
  ) {
    redirect(`/providers/${res.data.session.user?.id}`);
  }

  return (
    <>
      <main>
        <Landing />
      </main>
    </>
  );
}
