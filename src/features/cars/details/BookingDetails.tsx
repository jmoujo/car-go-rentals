import { SelectDate } from '@/components/SelectDate';
import {
  Box,
  Title,
  Flex,
  Divider,
  Button,
  useMantineColorScheme,
  Text,
} from '@mantine/core';
import React from 'react';
import { boxBgColor, containerBgColor, useStyles } from './useStyles';
import { primaryGradient } from '@/const';

export const BookingDetails = () => {
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();

  return (
    <Box
      w={{ base: '100%', md: '350px', lg: '400px' }}
      className={classes.box}
      bg={boxBgColor[colorScheme]}
    >
      <Title order={4} mb="md" color="gray.6">
        Booking Details
      </Title>
      <Flex gap="sm" direction={{ base: 'column', sm: 'row' }}>
        <SelectDate label="Pickup Date" />
        <SelectDate label="Return Date" />
      </Flex>

      <Box my="md">
        <Title order={5} my="xs">
          Address/Location
        </Title>
        <Text size="sm">
          Region:
          <Text color="gray.6" component="span" mx="xs">
            Greater Accra Region
          </Text>
        </Text>
        <Text my="sm" size="sm">
          City:
          <Text color="gray.6" component="span" mx="xs">
            Achimota
          </Text>
        </Text>
        <Text size="sm">
          Street:
          <Text color="gray.6" component="span" mx="xs">
            Kaiser Valley
          </Text>
        </Text>
      </Box>

      <Title order={5} my="xs">
        Rental Info
      </Title>
      <Box bg={containerBgColor[colorScheme]} py="xs" px="md">
        <Flex justify="space-between">
          <Text>Number of Days</Text>
          <Text>3</Text>
        </Flex>

        <Flex justify="space-between" my="sm">
          <Text>Price Per Day</Text>
          <Text>$500.00</Text>
        </Flex>
        <Divider my="sm" />

        <Flex justify="space-between">
          <Text>Total Price</Text>
          <Text fw="bold">$1500.00</Text>
        </Flex>
      </Box>

      <Button
        w="100%"
        my="sm"
        variant="gradient"
        gradient={primaryGradient}
        // disabled={cars.status !== 'available'}
      >
        Book Now
      </Button>
    </Box>
  );
};
