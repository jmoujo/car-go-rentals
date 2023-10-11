import { Bookings } from '@/features/providers/Bookings';
import { Cars } from '@/features/providers/Cars';
import { DashboardLayout } from '@/features/providers/DashboardLayout';
import { supabase } from '@/utils';
import { redirect } from 'next/navigation';

interface PageProps {
  searchParams: any;
}

const ProviderCarsPage = async ({ searchParams }: PageProps) => {
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
        <Cars cars={cars} />
        <Bookings providerId={data.session.user.id} />
      </DashboardLayout>
    </>
  );
};

export default ProviderCarsPage;
