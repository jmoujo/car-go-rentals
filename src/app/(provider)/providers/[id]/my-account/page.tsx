import { DashboardLayout } from '@/features/providers/DashboardLayout';
import { supabase } from '@/utils';
import { redirect } from 'next/navigation';

const ProviderAccountPage = async () => {
  const res = await supabase.auth.getSession();

  if (!res.data.session) {
    redirect(`/login`);
  }
  return (
    <>
      <DashboardLayout>My Account</DashboardLayout>
    </>
  );
};

export default ProviderAccountPage;
