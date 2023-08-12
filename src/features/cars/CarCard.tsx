import { bookedMessage } from '@/const';
import { IResCarProps } from '@/models/res.model';
import {
  Badge,
  Box,
  Button,
  Card,
  Divider,
  Flex,
  Image,
  Text,
  Title,
} from '@mantine/core';
import { IconManualGearbox, IconUsers } from '@tabler/icons-react';
import Link from 'next/link';
import { BsFuelPump } from 'react-icons/bs';

interface CardProps {
  car: IResCarProps;
}
export const CarCard = ({ car }: CardProps) => {
  return (
    <Card miw={{ base: '100%', lg: '47%' }}>
      <Flex align="flex-end" justify="space-between">
        <Box>
          <Title order={5}>
            {car.make} {car.model} {car.year}
          </Title>
          <Text color="gray.6">{car.type.displayName}</Text>
        </Box>
        {/* <Flex align="center" justify="center">
          <Rating value={car.ratings} size="xs" fractions={2} readOnly />
          <Text size="xs" mx="xs">
            ({car.numberOfRatings})
          </Text>
        </Flex> */}
      </Flex>
      <Flex justify="space-between" align="flex-end">
        <Image
          maw={{ base: 150, md: 250 }}
          radius="md"
          my={8}
          src={car.mainImage}
          alt={car.make + car.model}
        />
        <Box>
          <Box sx={{ textAlign: 'center' }} my="md">
            {car.status !== 'available' && (
              <Badge color="red" title={bookedMessage}>
                Booked
              </Badge>
            )}
          </Box>
          {car.status === 'available' ? (
            <Link href={`/cars/${car.id}`}>
              <Button variant="gradient" mb="xs">
                Rent now
              </Button>
            </Link>
          ) : (
            <Button variant="gradient" mb="xs" disabled>
              Rent now
            </Button>
          )}
        </Box>
      </Flex>
      <Divider />
      <Flex align="center" justify="space-between">
        <Flex align="center" gap={{ base: 4, md: 16 }}>
          <Flex my={8} align="center" title="seating capacity">
            <IconUsers size="16px" color="gray" />
            <Text color="gray.6" size="sm" mx={4}>
              {car.seatingCapacity}
            </Text>
          </Flex>
          <Flex my={8} align="center" title="transmission">
            <IconManualGearbox size="16px" color="gray" />
            <Text color="gray.6" size="sm" mx={4}>
              {car.transmission}
            </Text>
          </Flex>
          <Flex my={8} align="center" title="Fuel type">
            <BsFuelPump size="16px" color="gray" />
            <Text color="gray.6" size="sm" mx={4}>
              {car.fuelType}
            </Text>
          </Flex>
        </Flex>

        <Flex align="flex-end">
          <Text fw="bold" size="lg">
            ${car.pricePerDay}
          </Text>
          <Text size="xs">/day</Text>
        </Flex>
      </Flex>
    </Card>
  );
};
