import { SelectDate } from '@/components/SelectDate';
import {
  ghCurrency,
  primaryGradient,
  textColor,
  textMutedColor,
  today,
  tomorrow,
} from '@/const';
import { useAppContext } from '@/context/AppContext';
import { useSupabase } from '@/context/SupabaseContext';
import { IResCarProps } from '@/models/res.model';
import {
  Box,
  Button,
  Divider,
  Flex,
  Input,
  Notification,
  NumberInput,
  Text,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import { IconX } from '@tabler/icons-react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';
import classes from './Styles.module.css';

export const boxBgColor = { light: 'white', dark: 'dark.6', auto: 'white' };
export const containerBgColor = {
  light: 'gray.1',
  dark: 'gray.9',
  auto: 'gray.1',
};

interface Props {
  car: IResCarProps;
  user: {
    id: string;
    firstName: string;
    lastName: string;
    city: string;
    street: string;
    regions: { displayName: string };
  } | null;
}
export const BookingDetails = ({ car, user }: Props) => {
  const supabase = useSupabase();
  const { refresh } = useRouter();
  const { colorScheme } = useMantineColorScheme();

  const [numOfDays, setNumOfDays] = useState<number | ''>(
    car.minimumRentalPeriodInDays
  );
  const [profileError, setProfileError] = useState<string | undefined>(
    undefined
  );
  const [triggered, setTriggered] = useState(false);
  const {
    state: { pickupDate, returnDate },
    setPickupDate,
    setReturnDate,
  } = useAppContext();

  const handleBookNow = async () => {
    setTriggered(true);

    if (
      !user?.firstName ||
      !user.lastName ||
      !user?.city ||
      !user?.regions.displayName
    ) {
      setProfileError('Please Complete your profile to book');
      return;
    }

    if (!pickupDate || !returnDate) {
      return;
    }

    const { error } = await supabase
      .from('bookings')
      .insert([
        {
          pickupDate: pickupDate as any,
          returnDate: returnDate as any,
          totalPrice: car.pricePerDay * Number(numOfDays),
          provider_id: car.provider_id,
          car_id: car.id,
          user_id: user.id,
          status: 'pending',
        },
      ])
      .select();

    if (error) {
      console.log(error);
      return;
    }

    const { error: error2 } = await supabase
      .from('cars')
      .update({ status: 'pending' })
      .eq('id', car.id)
      .select();

    if (error2) {
      console.log(error2);
    } else {
      toast.success('Your booking request has been submitted successfully');
      refresh();
    }
  };

  return (
    <Box
      w={{ base: '100%', md: '350px', lg: '400px' }}
      className={classes.box}
      bg={boxBgColor[colorScheme]}
    >
      <Title order={4} mb="md" c="gray.6">
        Booking Details
      </Title>
      <Flex gap="sm" direction={{ base: 'column', sm: 'row' }}>
        <Box>
          <SelectDate
            value={pickupDate}
            label="Pickup Date"
            minDate={today}
            onChange={setPickupDate}
          />
          {triggered && !pickupDate && <Input.Error>Select Date</Input.Error>}
        </Box>
        <Box>
          <SelectDate
            label="Return Date"
            value={returnDate}
            minDate={tomorrow}
            onChange={setReturnDate}
          />
          {triggered && !returnDate && <Input.Error>Select Date</Input.Error>}
        </Box>
      </Flex>

      <Box my="md">
        <Title order={5} my="xs" c={textMutedColor[colorScheme]}>
          Address/Location
        </Title>
        <Text size="sm" c={textColor[colorScheme]}>
          Region:
          <Text c="gray.6" component="span" mx="xs">
            {user?.regions.displayName || (
              <Link href="/my-account/profile">Add</Link>
            )}
          </Text>
        </Text>
        <Text my="sm" size="sm" c={textColor[colorScheme]}>
          City:
          <Text c="gray.6" component="span" mx="xs">
            {user?.city || <Link href="/my-account/profile">Add</Link>}
          </Text>
        </Text>
        <Text size="sm" c={textColor[colorScheme]}>
          Street:
          <Text c="gray.6" component="span" mx="xs">
            {user?.street || <Link href="/my-account/profile">Add</Link>}
          </Text>
        </Text>
        {profileError && (
          <Notification icon={<IconX size="0.6rem" />} c="red" title="Bummer!">
            {profileError}
          </Notification>
        )}
      </Box>

      <Title order={5} my="xs" c={textMutedColor[colorScheme]}>
        Rental Info
      </Title>
      <Box bg={containerBgColor[colorScheme]} py="xs" px="md">
        <Flex justify="space-between">
          <Text c={textColor[colorScheme]}>Minimum Rental Days</Text>
          <Text c={textColor[colorScheme]}>
            {car.minimumRentalPeriodInDays}
          </Text>
        </Flex>

        {car.maximumRentalPeriodInDays && (
          <Flex justify="space-between" py="sm">
            <Text c={textColor[colorScheme]}>Maximum Rental Days</Text>
            <Text c={textColor[colorScheme]}>
              {car.maximumRentalPeriodInDays}
            </Text>
          </Flex>
        )}

        <Flex justify="space-between">
          <Text c={textColor[colorScheme]}>Price Per Day</Text>
          <Text c={textColor[colorScheme]}>
            {ghCurrency} {car.pricePerDay}
          </Text>
        </Flex>

        <Divider my="sm" />
        <Box>
          <Text c={textColor[colorScheme]}>Number of Days</Text>
          <NumberInput
            min={car.minimumRentalPeriodInDays || undefined}
            max={car.maximumRentalPeriodInDays || undefined}
            value={numOfDays}
            onChange={(value) => setNumOfDays(Number(value))}
          />
        </Box>

        <Divider my="md" />

        <Flex justify="space-between">
          <Text c={textColor[colorScheme]}>Total Price</Text>
          {numOfDays && (
            <Text fw="bold" c={textColor[colorScheme]}>
              {ghCurrency} {numOfDays * car.pricePerDay}
            </Text>
          )}
        </Flex>
      </Box>

      <Button
        w="100%"
        my="sm"
        variant="gradient"
        gradient={primaryGradient}
        disabled={car.status !== 'available'}
        onClick={handleBookNow}
      >
        Book Now
      </Button>
    </Box>
  );
};
