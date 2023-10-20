import { AccountLayout } from '@/features/my-account';
import React from 'react';
import { Profile } from '@/features/my-account/profile';
import { redirect } from 'next/navigation';
import { Database } from '@/models/supabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const MyAccountPage = async () => {
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

  let { data: userDetails } = await supabase
    .from('users')
    .select('*, countries(id, name, displayName), regions(id, displayName)')
    .match({ id: session.user.id })
    .single();

  return (
    <>
      <AccountLayout>
        <Profile
          userDetails={userDetails as any}
          email={session.user.email}
          id={session.user.id}
        />
      </AccountLayout>
    </>
  );
};

export default MyAccountPage;
