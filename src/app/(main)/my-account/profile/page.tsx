import { AccountLayout } from '@/features/my-account';
import { Profile } from '@/features/my-account/profile';
import { Database } from '@/models/supabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const ProfilePage = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect('/login');
  }

  let { data: user } = await supabase
    .from('users')
    .select('*, countries(id, name, displayName), regions(id, displayName)')
    .match({ id: session.user.id })
    .single();

  return (
    <AccountLayout>
      <Profile
        email={session.user.email}
        id={session.user.id}
        userDetails={user as any}
      />
    </AccountLayout>
  );
};

export default ProfilePage;
