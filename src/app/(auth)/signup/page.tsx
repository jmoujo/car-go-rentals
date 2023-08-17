import { Signup } from '@/features/auth/Signup';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

export const dynamic = 'force-dynamic';

const SignupPage = async () => {
  const supabase = createServerComponentClient({ cookies });
  const res = await supabase.auth.getSession();

  if (res.data.session) {
    redirect('/');
  }

  return (
    <>
      <Signup />
    </>
  );
};

export default SignupPage;
