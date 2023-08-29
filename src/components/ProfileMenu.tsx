'use client';
import { useAuthContext } from '@/context/AuthContext';
import { Avatar, Flex, Menu, Text, UnstyledButton } from '@mantine/core';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { BiLogOutCircle } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { IoCarSportSharp, IoChevronDown } from 'react-icons/io5';
export function ProfileMenu() {
  const router = useRouter();
  const { logOut, user } = useAuthContext();

  const handleSignOut = async () => {
    await logOut();
    // router.refresh();
  };

  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <UnstyledButton
          component={Flex}
          align="center"
          gap={8}
          variant="subtle"
          py="sm"
        >
          <Avatar radius="xl">M</Avatar>
          <IoChevronDown />
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Label>
          <Text lineClamp={1}>{user?.email}</Text>
        </Menu.Label>
        <Menu.Item
          component={Link}
          href="/my-account/profile"
          icon={<CgProfile size="0.8rem" />}
        >
          Profile
        </Menu.Item>
        <Menu.Item
          component={Link}
          href="/my-account/bookings"
          icon={<IoCarSportSharp size="0.8rem" />}
        >
          Bookings
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item
          component="button"
          type="button"
          role="button"
          onClick={handleSignOut}
          color="red"
          icon={<BiLogOutCircle size="1rem" />}
        >
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}