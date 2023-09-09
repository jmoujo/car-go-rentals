'use client';
import {
  AppShell,
  Box,
  Burger,
  Flex,
  Footer,
  Header,
  MantineTheme,
  MediaQuery,
  Navbar,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import React, { ReactNode, useState } from 'react';
import { MainLink } from './MainLink';
import {
  IconAlertCircle,
  IconCar,
  IconDashboard,
  IconMessage,
  IconUser,
} from '@tabler/icons-react';
import { ThemeSwitcher } from '@/components/Header/ThemeSwitcher';
import { headerStyles, layoutStyles } from './styles';
import { textColor } from '@/const';
import { StatsGrid } from './Stats';
import { useAuthContext } from '@/context/AuthContext';
import { redirect, useRouter } from 'next/navigation';

const data = [
  {
    icon: <IconDashboard size="1rem" />,
    color: 'blue',
    label: 'Dashboard',
    endpoint: '/',
  },
  {
    icon: <IconAlertCircle size="1rem" />,
    color: 'teal',
    label: 'Requests',
    endpoint: '/requests',
  },
  {
    icon: <IconCar size="1rem" />,
    color: 'violet',
    label: 'My cars',
    endpoint: '/cars',
  },
  { icon: <IconCar size="1rem" />, color: 'grape', label: 'Add new Car' },
  {
    icon: <IconMessage size="1rem" />,
    color: 'orange',
    label: 'My Reviews',
    endpoint: '/reviews',
  },
];

interface DashboardProps {
  children: ReactNode;
}
export const DashboardLayout = ({ children }: DashboardProps) => {
  const router = useRouter();
  const { session } = useAuthContext();
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();

  if (!session) {
    redirect('/providers/create-account');
  }

  return (
    <AppShell
      padding="md"
      navbarOffsetBreakpoint="md"
      asideOffsetBreakpoint="md"
      navbar={
        <Navbar
          width={{ base: 300 }}
          hiddenBreakpoint="md"
          hidden={!opened}
          p="xs"
        >
          <Navbar.Section grow mt="xs">
            {data.map((item, i) => (
              <MainLink
                key={i}
                label={item.label}
                color={item.color}
                icon={item.icon}
                link={`/providers/{:id}/${item.endpoint}`}
              />
            ))}
          </Navbar.Section>
          <Navbar.Section>
            <MainLink
              label="Account Settings"
              color="gray"
              icon={<IconUser size="1rem" />}
              link={`/providers/{:id}/my-account`}
            />
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          <div style={headerStyles}>
            <Flex align="center">
              <MediaQuery largerThan="md" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
              <Text color={textColor[colorScheme]}>Application header</Text>
            </Flex>

            <ThemeSwitcher />
          </div>
        </Header>
      }
      styles={layoutStyles}
    >
      {children}
    </AppShell>
  );
};
