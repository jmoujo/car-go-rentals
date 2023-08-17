import { GoogleButton } from '@/components/GoogleButton';
import { TwitterButton } from '@/components/TwitterButton';
import { GoogleIcon } from '@/components/icons/GoogleIcon';
import { useAuthContext } from '@/context/AuthContext';
import { Button, Group } from '@mantine/core';
import React from 'react';

export const OAuthButtons = () => {
  const { signInWithGoogle } = useAuthContext();

  const handleGoogleSignIn = async () => {
    await signInWithGoogle();
  };
  return (
    <Group grow mb="md" mt="md">
      <Button
        leftIcon={<GoogleIcon />}
        variant="default"
        color="gray"
        radius="xl"
        onClick={handleGoogleSignIn}
      >
        Google
      </Button>
      <TwitterButton radius="xl">Twitter</TwitterButton>
    </Group>
  );
};
