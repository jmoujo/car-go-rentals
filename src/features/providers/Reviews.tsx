'use client';
import { MessageCard } from '@/components/MessageCard';
import { textColor } from '@/const';
import { Divider, Title, useMantineColorScheme } from '@mantine/core';
import React from 'react';

export const Reviews = () => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <div>
      <Divider
        my="lg"
        label={
          <Title order={3} color={textColor[colorScheme]}>
            Reviews (23)
          </Title>
        }
      />
      <MessageCard />
      <MessageCard />
      <MessageCard />
      <MessageCard />
      <MessageCard />
      <MessageCard />
      <MessageCard />
      <MessageCard />
      <MessageCard />
      <MessageCard />
    </div>
  );
};
