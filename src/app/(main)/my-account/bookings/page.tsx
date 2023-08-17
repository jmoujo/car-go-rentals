import { AccountLayout } from '@/features/my-account';
import { Bookings } from '@/features/my-account/bookings';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const BookingsPage = async () => {
  // const supabase = createServerComponentClient({ cookies });
  // const {
  //   data: { session },
  // } = await supabase.auth.getSession();

  // if (!session) {
  //   redirect('/');
  // }

  return (
    <AccountLayout>
      <Bookings />
    </AccountLayout>
  );
};

export default BookingsPage;
