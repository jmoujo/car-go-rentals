import {
  Avatar,
  Box,
  Button,
  Card,
  Flex,
  Footer,
  Rating,
  Text,
  Textarea,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import React from 'react';
import { Messages } from './Messages';
import { IoMdSend } from 'react-icons/io';
import { containerBgColor } from './useStyles';

export const Chat = () => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Card my="md" pos="relative" withBorder bg={containerBgColor[colorScheme]}>
      <Flex
        justify="space-between"
        align={{ base: 'flex-start', md: 'center' }}
        direction={{ base: 'column', md: 'row' }}
      >
        <Box>
          <Flex align="center" gap={8}>
            <Avatar radius="xl" color="pink" />
            <Title order={3}>FMT Car Rentals</Title>
          </Flex>

          <Title order={3} my="md" mx={8}>
            Feedback
          </Title>
        </Box>

        <Flex align="center" gap={8}>
          <Rating value={3.4} />
          <Text size="sm">(234)</Text>
        </Flex>
      </Flex>

      <Messages />

      <Footer
        height="60px"
        pos="absolute"
        bottom={0}
        left={0}
        w="100%"
        px="sm"
        pt={8}
      >
        <Flex align="center" gap="xs">
          <Textarea
            autosize
            minRows={1}
            w="100%"
            placeholder="Write your comment here"
          />
          <Button h="42px" w="80px">
            <IoMdSend />
          </Button>
        </Flex>
      </Footer>
    </Card>
  );
};
