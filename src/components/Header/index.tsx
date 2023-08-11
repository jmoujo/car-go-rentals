'use client';
import { Box, Group, Header } from '@mantine/core';
import React from 'react';
import { Logo } from './Logo';
import { ThemeSwitcher } from './ThemeSwitcher';
import { NavigationMobile } from './NavigationMobile';
import { useHidden } from '@/hooks/useHidden';
import { AuthButtons } from './AuthButtons';

export const Navbar = () => {
  const { hiddenOnMobile, hiddenOnSmallScreen } = useHidden();

  return (
    <Header height={60} px="md" pos="sticky" top="-2px" zIndex={10}>
      <Group position="apart" h="100%">
        <Logo />
        <Box className={hiddenOnMobile}>
          <AuthButtons />
        </Box>
        <Box className={hiddenOnSmallScreen}>
          <ThemeSwitcher />
        </Box>
        <NavigationMobile />
      </Group>
    </Header>
  );
};
