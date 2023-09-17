import { ProvidersAccountCreation } from '@/features/providers';
import { supabase } from '@/utils';
import { redirect } from 'next/navigation';
import React from 'react';

const ProvidersAccountCreationPage = async () => {
  const res = await supabase.auth.getSession();

  if (res.data.session) {
    if (
      res.data.session.user?.user_metadata.role &&
      res.data.session.user?.user_metadata.role === 'provider'
    ) {
      redirect(`/providers/${res.data.session.user?.id}`);
    } else {
      redirect('/');
    }
  }

  return (
    <div>
      <ProvidersAccountCreation />
    </div>
  );
};

export default ProvidersAccountCreationPage;
