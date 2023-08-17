import { Flex, Avatar, FileButton, Button } from '@mantine/core';
import React, { useState } from 'react';
import { FaUser } from 'react-icons/fa';

export const ProfilePhoto = () => {
  const [avatar, setAvatar] = useState<File | null>(null);

  return (
    <Flex
      direction="column"
      gap="sm"
      justify="flex-start"
      align="center"
      mt="4rem"
    >
      <Avatar size="150px" sx={{ borderRadius: '80px' }}>
        <FaUser />
      </Avatar>
      <FileButton
        onChange={(file) => setAvatar(file)}
        accept="image/png,image/jpeg"
      >
        {(props) => (
          <Button variant="outline" {...props}>
            Upload image
          </Button>
        )}
      </FileButton>
    </Flex>
  );
};
