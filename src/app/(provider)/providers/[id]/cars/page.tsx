import { Cars } from '@/features/providers/Cars';
import { DashboardLayout } from '@/features/providers/DashboardLayout';
import { supabase } from '@/utils';
import { redirect } from 'next/navigation';

const ProviderCarsPage = async () => {
  const res = await supabase.auth.getSession();

  if (!res.data.session) {
    redirect(`/login`);
  }

  let { data: cars } = await supabase.from('cars').select('*');

  return (
    <>
      <DashboardLayout>
        <Cars cars={cars} />
      </DashboardLayout>
    </>
  );
};

export default ProviderCarsPage;
