import { AccountLayout } from '@/features/my-account';
import { Bookings } from '@/features/my-account/bookings';

const BookingsPage = () => {
  return (
    <AccountLayout>
      <Bookings />
    </AccountLayout>
  );
};

export default BookingsPage;
