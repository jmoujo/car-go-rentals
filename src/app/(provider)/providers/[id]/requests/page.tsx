import { DashboardLayout } from '@/features/providers/DashboardLayout';
import { supabase } from '@/utils';
import { redirect } from 'next/navigation';

const ProviderRequestsPage = async () => {
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
