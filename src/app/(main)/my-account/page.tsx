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

  return (
    <>
      <AccountLayout>
        <Profile />
      </AccountLayout>
    </>
  );
};

export default MyAccountPage;
