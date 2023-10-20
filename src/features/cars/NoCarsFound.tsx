import { textColor, textMutedColor } from '@/const';
import {
  Box,
  Card,
  Flex,
  Group,
  Text,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import React from 'react';
import { FaBoxOpen } from 'react-icons/fa';

export const NoCarsFound = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <Card
      component={Flex}
      justify="center"
      align="center"
      direction="column"
      gap={16}
      withBorder
      style={{ backgroundColor: 'transparent' }}
    >
      <Text c={textColor[colorScheme]}>
        <FaBoxOpen size="4rem" />
      </Text>
      <Title c={textMutedColor[colorScheme]}>No Cars Found</Title>
      <Text c="gray.6">Sorry! No cars found for your search</Text>
    </Card>
  );
};
