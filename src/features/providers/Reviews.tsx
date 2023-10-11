'use client';
import { MessageCard } from '@/components/MessageCard';
import { ReviewCard } from '@/components/ReviewCard';
import { textColor } from '@/const';
import { IResReviewProps } from '@/models/res.model';
import {
  Card,
  Divider,
  Text,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import React from 'react';

interface Props {
  reviews: IResReviewProps[];
}
export const Reviews = ({ reviews }: Props) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <div>
      <Divider
        my="lg"
        label={
          <Title order={3} color={textColor[colorScheme]}>
            Reviews ({reviews.length})
          </Title>
        }
      />
      {reviews.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}

      {reviews.length === 0 && (
        <Card my="3rem">
          <Text fs="italic" align="center">
            No Reviews Available
          </Text>
        </Card>
      )}
    </div>
  );
};
