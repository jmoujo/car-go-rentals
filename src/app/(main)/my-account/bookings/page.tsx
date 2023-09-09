import { AccountLayout } from '@/features/my-account';
import { Bookings } from '@/features/my-account/bookings';
import { supabase } from '@/utils';
import { redirect } from 'next/navigation';

const BookingsPage = async () => {
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect('/login');
  }

  return (
    <AccountLayout>
      <Bookings />
    </AccountLayout>
  );
};

export default BookingsPage;
