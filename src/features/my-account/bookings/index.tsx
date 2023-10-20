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
  <Table.Tr>
    <Table.Th>Date Booked</Table.Th>
    <Table.Th>Car</Table.Th>
    <Table.Th>Pickup Date</Table.Th>
    <Table.Th>Return Date</Table.Th>
    <Table.Th>Price</Table.Th>
    <Table.Th>Status</Table.Th>
  </Table.Tr>
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
        labelPosition="left"
        label={
          <Title order={1} c={textColor[colorScheme]} mb="lg">
            My Bookings ({bookings.length})
          </Title>
        }
      />

      <Box mah="310px" style={{ overflowY: 'auto' }}>
        <Table striped highlightOnHover>
          <Table.Thead>{header}</Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Box>
    </>
  ) : (
    <Card my="3rem">
      <Text fs="italic" ta="center">
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
    <Table.Tr>
      <Table.Td>{formatDate(dateBooked)}</Table.Td>
      <Table.Td>
        <Flex align="center" gap={4}>
          <Avatar size="sm" radius="xl" src={car.images[0]} />

          <Text component={Link} href={`/cars/${car.slug}`}>
            {car.make} {car.model}
          </Text>
        </Flex>
      </Table.Td>
      <Table.Td>{formatDate(pickupDate)}</Table.Td>
      <Table.Td>{formatDate(returnDate)}</Table.Td>
      <Table.Td>
        {ghCurrency} {price}
      </Table.Td>
      <Table.Td width="100px">
        <StatusRenderer status={status} />
      </Table.Td>
    </Table.Tr>
  );
};
