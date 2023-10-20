import { AccountLayout } from '@/features/my-account';
import { Bookings } from '@/features/my-account/bookings';
import { Database } from '@/models/supabase';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const BookingsPage = async () => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <AccountLayout>
      <Bookings userId={session.user.id} />
    </AccountLayout>
  );
};

export default BookingsPage;
