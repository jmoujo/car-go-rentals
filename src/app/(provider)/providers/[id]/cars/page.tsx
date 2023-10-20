import { Bookings } from '@/features/providers/Bookings';
import { Cars } from '@/features/providers/Cars';
import { DashboardLayout } from '@/features/providers/DashboardLayout';
import { Database } from '@/models/supabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const ProviderCarsPage = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });
  const { error, data } = await supabase.auth.getSession();

  if (!data.session || error) {
    redirect(`/login`);
  }

  let { data: cars } = await supabase
    .from('cars')
    .select('*')
    .eq('provider_id', data.session.user.id);

  return (
    <>
      <DashboardLayout>
        <Cars cars={cars as any[]} />
        <Bookings providerId={data.session.user.id} />
      </DashboardLayout>
    </>
  );
};

export default ProviderCarsPage;
