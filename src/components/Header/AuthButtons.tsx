import { primaryGradient } from '@/const';
import { Button, Group } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import React from 'react';

export const AuthButtons = () => {
  const smallScreen = useMediaQuery(`(max-width: 991px)`);

  return (
    <Group grow={smallScreen}>
      <Button variant="default">Log in</Button>
      <Button variant="gradient" gradient={primaryGradient}>
        Sign up
      </Button>
    </Group>
  );
};
