import { Flex, Alert, Button } from '@mantine/core';
import { IconAlertCircle } from '@tabler/icons-react';
import Link from 'next/link';
import React from 'react';

interface Props {
  email: string;
}
export const EmailConfirmation = ({ email }: Props) => {
  return (
    <Flex maw="450px" mx="auto" mih="400px" justify="center" align="center">
      <Alert
        icon={<IconAlertCircle size="1rem" />}
        title="Confirm Your Signup "
        color="cyan"
      >
        Confirmation link has been sent to your email ({email}), please follow
        the link to confirm your signup
        <Button component={Link} href="/login" my="md">
          Login
        </Button>
      </Alert>
    </Flex>
  );
};
