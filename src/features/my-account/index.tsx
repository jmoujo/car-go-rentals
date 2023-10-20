'use client';
import { useAuthContext } from '@/context/AuthContext';
import {
  Box,
  Container,
  Divider,
  Flex,
  NavLink,
  Text,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import Link from 'next/link';
import { ReactNode } from 'react';
import { CgProfile } from 'react-icons/cg';
import { IoCarSportSharp } from 'react-icons/io5';

interface Props {
  children: ReactNode;
}
export const AccountLayout = ({ children }: Props) => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Container size="xl" my="4rem">
      <Flex>
        <Box
          mah={300}
          w="300px"
          bg={{ light: 'gray.1', dark: 'dark.8', auto: '' }[colorScheme]}
          style={{ zIndex: 1 }}
        >
          <Box
            h="60px"
            bg={{ light: 'orange.5', dark: 'orange.7', auto: '' }[colorScheme]}
          >
            <Title order={4} ta="center" py={16} c="white">
              My Account
            </Title>
          </Box>
          <Box>
            <NavLink
              component={Link}
              href="/my-account/profile"
              label={<Text c="gray.6">Profile</Text>}
              leftSection={<CgProfile size="1.2rem" />}
              py="md"
              color="gray.6"
            />
            <Divider />
            <NavLink
              component={Link}
              href="/my-account/bookings"
              label={<Text c="gray.6">Bookings</Text>}
              leftSection={<IoCarSportSharp size="1.2rem" />}
              py="md"
            />
            <Divider />
          </Box>
        </Box>
        <Box px="xl" w="calc(100% - 300px)">
          {children}
        </Box>
      </Flex>
    </Container>
  );
};
