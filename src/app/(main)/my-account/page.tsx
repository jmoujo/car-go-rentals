import { AccountLayout } from '@/features/my-account';
import React from 'react';
import { Profile } from '@/features/my-account/profile';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const MyAccountPage = async () => {
  const supabase = createServerComponentClient({ cookies });
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
          userDetails={userDetails}
          email={session.user.email}
          id={session.user.id}
        />
      </AccountLayout>
    </>
  );
};

export default MyAccountPage;
