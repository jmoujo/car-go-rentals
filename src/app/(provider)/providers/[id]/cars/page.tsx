import { Cars } from '@/features/providers/Cars';
import { DashboardLayout } from '@/features/providers/DashboardLayout';
import { supabase } from '@/utils';
import { redirect } from 'next/navigation';

const ProviderCarsPage = async () => {
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
      </DashboardLayout>
    </>
  );
};

export default ProviderCarsPage;
