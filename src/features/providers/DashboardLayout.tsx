'use client';
import { ThemeSwitcher } from '@/components/Header/ThemeSwitcher';
import { textColor } from '@/const';
import {
  AppShell,
  Avatar,
  Burger,
  Flex,
  Header,
  MediaQuery,
  Navbar,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core';
import {
  IconAlertCircle,
  IconCar,
  IconDashboard,
  IconMessage,
  IconUser,
} from '@tabler/icons-react';
import { ReactNode, useEffect, useState } from 'react';
import { MainLink } from './MainLink';
import { headerStyles, layoutStyles } from './styles';
import { useAuthContext } from '@/context/AuthContext';
import { CarContextProvider } from '@/context/CarContext';
import { useSupabase } from '@/context/SupabaseContext';
import { useProviderDetails } from '@/hooks/useProviderDetails';

const data = [
  {
    icon: <IconDashboard size="1rem" />,
    color: 'blue',
    label: 'Dashboard',
    endpoint: '/',
  },
  {
    icon: <IconCar size="1rem" />,
    color: 'violet',
    label: 'My cars',
    endpoint: '/cars',
  },
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
  const { user } = useAuthContext();
  const [opened, setOpened] = useState(false);
  const theme = useMantineTheme();
  const { colorScheme } = useMantineColorScheme();
  const { providerDetails } = useProviderDetails(user?.id);

  return (
    <CarContextProvider>
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
                  link={`/providers/${user?.id}/${item.endpoint}`}
                />
              ))}
            </Navbar.Section>
            <Navbar.Section>
              <MainLink
                label="Account Settings"
                color="gray"
                icon={<IconUser size="1rem" />}
                link={`/providers/${user?.id}/my-account`}
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
                <Flex gap={8} align="center">
                  <Avatar src={providerDetails?.avatar} size="sm" radius="xl" />
                  <Text
                    fw="600"
                    color={textColor[colorScheme]}
                    sx={{ overflow: 'hidden' }}
                  >
                    {providerDetails?.companyName}
                  </Text>
                </Flex>
              </Flex>

              <ThemeSwitcher />
            </div>
          </Header>
        }
        styles={layoutStyles}
      >
        {children}
      </AppShell>
    </CarContextProvider>
  );
};
