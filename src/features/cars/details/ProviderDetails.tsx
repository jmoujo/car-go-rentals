import { textColor, textMutedColor } from '@/const';
import { useSupabase } from '@/context/SupabaseContext';
import {
  Avatar,
  Box,
  Flex,
  Text,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import Link from 'next/link';
import React, { useEffect } from 'react';

interface Props {
  provider: {
    companyName: string;
    avatar: string;
    email: string;
    phone: string;
  };
}
export const ProviderDetails = ({ provider }: Props) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Flex
      justify="space-between"
      align={{ base: 'flex-start', md: 'center' }}
      direction={{ base: 'column', md: 'row' }}
      my={16}
    >
      <Box>
        <Flex align="center" gap={8}>
          <Avatar
            src={provider.avatar}
            sx={{ border: '1px solid gray' }}
            radius="xl"
            color="pink"
          />
          <Title order={3} color={textColor[colorScheme]}>
            {provider.companyName}
          </Title>
        </Flex>
        <Flex ml={46} sx={{ fontSize: 'small' }}>
          <Text
            component="a"
            href={`tel:${provider.phone}`}
            color={textMutedColor[colorScheme]}
          >
            {provider.phone}
          </Text>
          <Text mx="xs" color={textMutedColor[colorScheme]}>
            |
          </Text>
          <Text
            component="a"
            href={`mailto:${provider.email}`}
            color={textMutedColor[colorScheme]}
          >
            {provider.email}
          </Text>
        </Flex>
      </Box>
    </Flex>
  );
};
