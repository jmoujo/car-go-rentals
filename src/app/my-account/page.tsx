import { AccountLayout } from '@/features/my-account';
import React from 'react';
import { Profile } from '@/features/my-account/profile';

const MyAccountPage = () => {
  return (
    <>
      <AccountLayout>
        <Profile />
      </AccountLayout>
    </>
  );
};

export default MyAccountPage;
