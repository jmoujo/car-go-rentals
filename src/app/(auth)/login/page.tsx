import { Login } from '@/features/auth/Login';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

const LoginPage = async () => {
  const supabase = createServerComponentClient({ cookies });
  const res = await supabase.auth.getSession();

  if (res.data.session) {
    redirect('/');
  }

  return (
    <>
      <Login />
    </>
  );
};

export default LoginPage;
