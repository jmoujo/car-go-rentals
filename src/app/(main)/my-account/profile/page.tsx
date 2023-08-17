import { AccountLayout } from '@/features/my-account';
import { Profile } from '@/features/my-account/profile';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const ProfilePage = async () => {
  const supabase = createServerComponentClient({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect('/');
  }

  return (
    <AccountLayout>
      <Profile />
    </AccountLayout>
  );
};

export default ProfilePage;
