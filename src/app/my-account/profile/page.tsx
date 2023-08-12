import { AccountLayout } from '@/features/my-account';
import { Profile } from '@/features/my-account/profile';

const ProfilePage = () => {
  return (
    <AccountLayout>
      <Profile />
    </AccountLayout>
  );
};

export default ProfilePage;
