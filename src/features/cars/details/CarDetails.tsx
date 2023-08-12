'use client';
import {
  Box,
  Card,
  Container,
  Flex,
  Rating,
  Text,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import { BookingDetails } from './BookingDetails';
import { CarsCarousel } from './Carousel';
import { Features } from './Features';
import { containerBgColor } from './useStyles';
import { Chat } from './Chat';

export const CarDetails = () => {
  const { colorScheme } = useMantineColorScheme();

  return (
    <Container size="xl" py="md">
      <Flex gap="md" direction={{ base: 'column', md: 'row' }}>
        <Card
          w={{ base: '100%', md: 'calc(100% - 350px)' }}
          bg={containerBgColor[colorScheme]}
        >
          <Flex align="flex-end" justify="space-between">
            <Box>
              {/* <Box my="xs">
                {car.status !== 'available' && (
                  <Badge color='red'>
                    Booked
                  </Badge>
                )}
              </Box> */}

              <Title order={5}>Toyota Camry 2023</Title>
              <Text color="gray.6">Sedan</Text>
            </Box>
            <Flex align="center" justify="center">
              <Rating value={3.5} size="xs" fractions={2} readOnly />
              <Text size="xs" mx="xs">
                (34)
              </Text>
            </Flex>
          </Flex>
          <CarsCarousel />

          <Box my="lg">
            <Title order={5} my="xs">
              Vehicle Description
            </Title>

            <Text size="sm" color="gray.6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
              soluta aperiam quo dicta a? Sequi tempora, excepturi s
            </Text>
          </Box>
          <Features />
        </Card>
        <BookingDetails />
      </Flex>
      <Chat />
    </Container>
  );
};
