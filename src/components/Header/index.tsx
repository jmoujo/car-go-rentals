'use client';
import { Box, Group, useMantineColorScheme } from '@mantine/core';
import React from 'react';
import { Logo } from './Logo';
import { ThemeSwitcher } from './ThemeSwitcher';
import { NavigationMobile } from './NavigationMobile';
import { AuthButtons } from './AuthButtons';
import { usePathname } from 'next/navigation';

const bgColor = { light: 'white', dark: 'dark.7', auto: 'white' };
interface Props {
  isAuthPage?: boolean;
}
export const Navbar = ({ isAuthPage }: Props) => {
  const { colorScheme } = useMantineColorScheme();
  const pathname = usePathname();

  return (
    <Box
      h={60}
      px="md"
      pos="sticky"
      top="-2px"
      bg={bgColor[colorScheme]}
      style={{
        zIndex: 10,
      }}
    >
      <Group justify="space-between" h="100%">
        <Logo />
        {!isAuthPage && !pathname.includes('my-account') && (
          <Box visibleFrom="md">
            <AuthButtons />
          </Box>
        )}
        <Box visibleFrom="xs">
          <ThemeSwitcher />
        </Box>
        <NavigationMobile />
      </Group>
    </Box>
  );
};
