import { DashboardLayout } from '@/features/providers/DashboardLayout';
import { Reviews } from '@/features/providers/Reviews';
import { supabase } from '@/utils';
import { redirect } from 'next/navigation';

const ProviderReviewsPage = async () => {
  const res = await supabase.auth.getSession();

  if (!res.data.session) {
    redirect(`/login`);
  }

  return (
    <>
      <DashboardLayout>
        <Reviews />
      </DashboardLayout>
    </>
  );
};

export default ProviderReviewsPage;
