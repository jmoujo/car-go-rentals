import { Landing } from '@/features/landing';
import { supabase } from '@/utils';
import { redirect } from 'next/navigation';

export default async function Home() {
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
