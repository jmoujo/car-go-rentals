import { ProvidersAccountCreation } from '@/features/providers';
import { supabase } from '@/utils';
import { redirect } from 'next/navigation';
import React from 'react';

const ProvidersAccountCreationPage = async () => {
  const res = await supabase.auth.getSession();

  if (!res.data.session) {
    redirect(`/login`);
  }

  return (
    <div>
      <ProvidersAccountCreation />
    </div>
  );
};

export default ProvidersAccountCreationPage;
