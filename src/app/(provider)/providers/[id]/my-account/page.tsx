import { DashboardLayout } from '@/features/providers/DashboardLayout';
import { MyAccount } from '@/features/providers/MyAccount';
import { Database } from '@/models/supabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const ProviderAccountPage = async () => {
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
      <DashboardLayout>
        <MyAccount />
      </DashboardLayout>
    </>
  );
};

export default ProviderAccountPage;
