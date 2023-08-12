'use client';
import {
  Box,
  Container,
  Divider,
  Flex,
  Header,
  NavLink,
  Navbar,
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
        <Navbar
          mah={300}
          w="300px"
          bg={{ light: 'gray.1', dark: 'dark.8' }[colorScheme]}
          zIndex={1}
        >
          <Header
            height="60px"
            bg={{ light: 'orange.5', dark: 'orange.7' }[colorScheme]}
          >
            <Title order={4} align="center" py={16} color="white">
              My Account
            </Title>
          </Header>
          <Box>
            <NavLink
              component={Link}
              href="/my-account/profile"
              label={<Text color="gray.6">Profile</Text>}
              icon={<CgProfile size="1.2rem" />}
              py="md"
              color="gray.6"
            />
            <Divider />
            <NavLink
              component={Link}
              href="/my-account/bookings"
              label={<Text color="gray.6">Bookings</Text>}
              icon={<IoCarSportSharp size="1.2rem" />}
              py="md"
            />
            <Divider />
          </Box>
        </Navbar>
        <Box px="xl" w="calc(100% - 300px)">
          {children}
        </Box>
      </Flex>
    </Container>
  );
};
