import { DashboardLayout } from '@/features/providers/DashboardLayout';
import { Reviews } from '@/features/providers/Reviews';
import { Database } from '@/models/supabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const ProviderReviewsPage = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });

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
        <Reviews reviews={(reviews as any) || []} />
      </DashboardLayout>
    </>
  );
};

export default ProviderReviewsPage;
