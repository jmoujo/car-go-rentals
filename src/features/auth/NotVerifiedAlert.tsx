import { Alert } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import React from 'react';

export const NotVerifiedAlert = () => {
  return (
    <Alert
      icon={<IconAlertCircle size="1rem" />}
      title="User Not Verified "
      color="orange"
      my="sm"
    >
      Sorry! We are unable to log you in. Please check if your email is verified
      and try again
    </Alert>
  );
};
