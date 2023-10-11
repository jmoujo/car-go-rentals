'use client';
import { StatusRenderer } from '@/components/StatusRenderer';
import { IResCarProps, IResReviewProps } from '@/models/res.model';
import {
  Box,
  Card,
  Container,
  Divider,
  Flex,
  Text,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import { BookingDetails } from './BookingDetails';
import { CarsCarousel } from './Carousel';
import { Features } from './Features';
import { ProviderDetails } from './ProviderDetails';
import { Reviews } from './Reviews';
import { containerBgColor } from './useStyles';
import { textMutedColor } from '@/const';

interface CarDetailsProps {
  car: IResCarProps;
  reviews: IResReviewProps[];
  user: {
    id: string;
    firstName: string;
    lastName: string;
    city: string;
    street: string;
    regions: { displayName: string };
  } | null;
  provider: {
    companyName: string;
    avatar: string;
    email: string;
    phone: string;
  } | null;
}

export const CarDetails = ({
  car,
  user,
  provider,
  reviews,
}: CarDetailsProps) => {
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
              <Box my="xs">
                {car.status !== 'available' && (
                  <StatusRenderer status={car.status} />
                )}
              </Box>

              <Title order={5}>
                {car.make} {car.model} {car.year}
              </Title>
              <Text color="gray.6">{car.type}</Text>
            </Box>
            {/* <Flex align="center" justify="center">
              <Rating value={3.5} size="xs" fractions={2} readOnly />
              <Text size="xs" mx="xs">
                (34)
              </Text>
            </Flex> */}
          </Flex>
          <CarsCarousel images={car.images} />

          <Box my="lg">
            <Title order={5} my="xs">
              Vehicle Description
            </Title>

            <Text size="sm" color="gray.6">
              {car.description}
            </Text>
          </Box>
          <Features
            seatingCapacity={car.seatingCapacity}
            transmission={car.transmission}
            fuelType={car.fuelType}
            engineCapacity={car.engineCapacity}
            otherFeatures={car.otherFeatures}
            acAvailable={car.acAvailable}
            acWorking={car.acWorking}
          />
        </Card>
        <BookingDetails car={car} user={user} />
      </Flex>
      <Box maw="90%" mx="auto">
        {provider && <ProviderDetails provider={provider} />}

        <Divider
          my="xl"
          label={
            <Title order={3} color={textMutedColor[colorScheme]}>
              Car Reviews
            </Title>
          }
        />
        <Reviews reviews={reviews} />
      </Box>
    </Container>
  );
};
