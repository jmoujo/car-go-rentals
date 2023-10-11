'use client';
import { StatusRenderer } from '@/components/StatusRenderer';
import { ghCurrency, textColor } from '@/const';
import { useSupabase } from '@/context/SupabaseContext';
import { formatDate } from '@/functions';
import { BookingStatus } from '@/models/app';
import { IResBookingProps } from '@/models/res.model';
import {
  Avatar,
  Box,
  Card,
  Divider,
  Flex,
  Loader,
  Menu,
  Table,
  Text,
  Title,
  UnstyledButton,
  useMantineColorScheme,
} from '@mantine/core';
import {
  IconProgressCheck,
  IconSquareRoundedXFilled,
} from '@tabler/icons-react';
import Link from 'next/link';
import { useSearchParams, useRouter } from 'next/navigation';
import { ReactNode, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

interface Props {
  userId: string;
}

const header = (
  <tr>
    <th>Date Booked</th>
    <th>Car</th>
    <th>Pickup Date</th>
    <th>Return Date</th>
    <th>Price</th>
    <th>Status</th>
  </tr>
);

export const Bookings = ({ userId }: Props) => {
  const [bookings, setBookings] = useState<IResBookingProps[]>([]);
  const { colorScheme } = useMantineColorScheme();
  const searchParams = useSearchParams();
  const carId = searchParams.get('car_id');
  const supabase = useSupabase();

  const rows = bookings?.map((item) => (
    <TableRow
      key={item.id}
      bookingId={item.id}
      carId={Number(carId)}
      dateBooked={new Date(item.created_at)}
      car={item.cars as any}
      pickupDate={new Date(item.pickupDate)}
      returnDate={new Date(item.returnDate)}
      price={item.totalPrice}
      status={item.status as BookingStatus}
    />
  ));

  useEffect(() => {
    const fetchBookings = async () => {
      let { data: bookings } = await supabase
        .from('bookings')
        .select('*, cars(slug, make, model, images)')
        .match({ user_id: userId })
        .order('created_at', { ascending: false });

      if (bookings) {
        setBookings(bookings as any);
      }
    };

    fetchBookings();
  }, [userId, supabase]);

  return bookings.length > 0 ? (
    <>
      <Divider
        mb="lg"
        label={
          <Title order={1} color={textColor[colorScheme]} mb="lg">
            My Bookings ({bookings.length})
          </Title>
        }
      />

      <Box mah="310px" sx={{ overflowY: 'auto' }}>
        <Table striped highlightOnHover>
          <thead>{header}</thead>
          <tbody>{rows}</tbody>
        </Table>
      </Box>
    </>
  ) : (
    <Card my="3rem">
      <Text fs="italic" align="center">
        No Bookings Found
      </Text>
    </Card>
  );
};

interface TableRowProps {
  bookingId: number;
  carId: number;
  dateBooked: Date;
  car: { slug: string; make: string; model: string; images: string[] };
  pickupDate: Date;
  returnDate: Date;
  price: number;
  status: BookingStatus;
}
export const TableRow = ({
  dateBooked,
  car,
  pickupDate,
  returnDate,
  price,
  status,
}: TableRowProps) => {
  return (
    <tr>
      <td>{formatDate(dateBooked)}</td>
      <td>
        <Flex align="center" gap={4}>
          <Avatar size="sm" radius="xl" src={car.images[0]} />

          <Text component={Link} href={`/cars/${car.slug}`}>
            {car.make} {car.model}
          </Text>
        </Flex>
      </td>
      <td>{formatDate(pickupDate)}</td>
      <td>{formatDate(returnDate)}</td>
      <td>
        {ghCurrency} {price}
      </td>
      <td width="100px">
        <StatusRenderer status={status} />
      </td>
    </tr>
  );
};
