import { Login } from '@/features/auth/Login';
import { supabase } from '@/utils';
import { redirect } from 'next/navigation';
import React from 'react';

const LoginPage = async () => {
  const res = await supabase.auth.getSession();

  if (res.data.session) {
    console.log(res.data.session.user);

    // if(role === 'provider'){
    //   redirect('/providers/:id');
    // }

    // redirect('/');
  }

  return (
    <>
      <Login />
    </>
  );
};

export default LoginPage;
