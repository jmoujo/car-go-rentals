import { DashboardLayout } from '@/features/providers/DashboardLayout';
import { Reviews } from '@/features/providers/Reviews';
import { supabase } from '@/utils';
import { redirect } from 'next/navigation';

const ProviderReviewsPage = async () => {
  const res = await supabase.auth.getSession();

  if (!res.data.session) {
    redirect(`/login`);
  }

  let { data: reviews } = await supabase
    .from('reviews')
    .select('*, users(firstName, lastName)')
    .eq('provider_id', res.data.session.user.id);

  return (
    <>
      <DashboardLayout>
        <Reviews reviews={reviews || []} />
      </DashboardLayout>
    </>
  );
};

export default ProviderReviewsPage;
