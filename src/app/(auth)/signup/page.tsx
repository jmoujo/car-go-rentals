import { Signup } from '@/features/auth/Signup';
import { supabase } from '@/utils';
import { redirect } from 'next/navigation';
import React from 'react';

export const dynamic = 'force-dynamic';

const SignupPage = async () => {
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
