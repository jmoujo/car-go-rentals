import { bookedMessage, pendingMessage } from '@/const';
import { BookingStatus, CarStatus } from '@/models/app';
import { Badge } from '@mantine/core';

interface Props {
  status: CarStatus | BookingStatus;
}
export function StatusRenderer({ status }: Props) {
  if (status === 'pending') {
    return (
      <Badge size="xs" color="gray" title={pendingMessage}>
        Pending
      </Badge>
    );
  }

  if (status === 'booked') {
    return (
      <Badge color="orange" size="xs" title={bookedMessage}>
        Booked
      </Badge>
    );
  }

  if (status === 'approved') {
    return (
      <Badge color="green" size="xs" title="Booking Approved">
        Approved
      </Badge>
    );
  }

  if (status === 'rejected') {
    return (
      <Badge color="red" size="xs" title={'Booking Rejected'}>
        Rejected
      </Badge>
    );
  }

  return (
    <Badge size="xs" color="green">
      Available
    </Badge>
  );
}
