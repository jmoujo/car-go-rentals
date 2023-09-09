import { useAuthContext } from '@/context/AuthContext';
import { Avatar, Flex } from '@mantine/core';
import { FaUser } from 'react-icons/fa';
import { Uploader } from './Uploader';

interface Props {
  updateProfile: (url: string) => Promise<void>;
  profileUrl?: string;
}
export const ProfilePhoto = ({ updateProfile, profileUrl }: Props) => {
  return (
    <Flex direction="column" gap="sm" justify="flex-start" align="center">
      <Avatar
        src={profileUrl}
        size="140px"
        sx={{ borderRadius: '100px', overflow: 'hidden' }}
        radius="xl"
      >
        <FaUser />
      </Avatar>
      <Uploader updateAvatar={updateProfile} />
    </Flex>
  );
};
