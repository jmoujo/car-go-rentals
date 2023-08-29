import { useAuthContext } from '@/context/AuthContext';
import { Avatar, Flex } from '@mantine/core';
import { FaUser } from 'react-icons/fa';
import { Uploader } from './Uploader';

export const ProfilePhoto = () => {
  const { user } = useAuthContext();

  return (
    <Flex
      direction="column"
      gap="sm"
      justify="flex-start"
      align="center"
      mt="4rem"
    >
      <Avatar
        src={user?.user_metadata.avatar}
        size="140px"
        sx={{ borderRadius: '100px', overflow: 'hidden' }}
        radius="xl"
      >
        <FaUser />
      </Avatar>
      <Uploader />
    </Flex>
  );
};
