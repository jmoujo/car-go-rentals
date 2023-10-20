import { DashboardLayout } from '@/features/providers/DashboardLayout';
import { Database } from '@/models/supabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const ProviderRequestsPage = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });

  const res = await supabase.auth.getSession();

  if (!res.data.session) {
    redirect(`/login`);
  }

  return (
    <>
      <DashboardLayout>Requests</DashboardLayout>
    </>
  );
};

export default ProviderRequestsPage;
