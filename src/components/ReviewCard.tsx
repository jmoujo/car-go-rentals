import { textColor, textMutedColor } from '@/const';
import { IResReviewProps } from '@/models/res.model';
import {
  ActionIcon,
  Avatar,
  Box,
  Divider,
  Flex,
  Rating,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
import { IconThumbDown, IconThumbUp } from '@tabler/icons-react';

interface Props {
  review: IResReviewProps;
}
export const ReviewCard = ({ review }: Props) => {
  const { colorScheme } = useMantineColorScheme();
  return (
    <>
      <Flex gap={16}>
        <Avatar size="md" radius="xl" color="blue" />
        <Box>
          <Text size="sm" fw={500} c={textMutedColor[colorScheme]}>
            {review.users.firstName} {review.users.lastName}
          </Text>
          <Rating value={review.rate} fractions={2} readOnly />
          <Text c={textColor[colorScheme]}>{review.comment}</Text>
          <Flex gap="md" my="lg">
            <Box>
              <ActionIcon radius="xl" color="gray.1" bg="blue" size="lg">
                <IconThumbUp />
              </ActionIcon>
              <Text size="xs" ta="center" c={textMutedColor[colorScheme]}>
                {review.likes}
              </Text>
            </Box>

            <Box>
              <ActionIcon radius="xl" color="gray.1" bg="blue" size="lg">
                <IconThumbDown />
              </ActionIcon>
              <Text size="xs" ta="center" c={textMutedColor[colorScheme]}>
                {review.dislikes}
              </Text>
            </Box>
          </Flex>
        </Box>
      </Flex>

      <Divider my="md" />
    </>
  );
};
