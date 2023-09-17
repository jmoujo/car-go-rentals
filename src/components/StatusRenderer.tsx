import { CarStatus } from '@/models/app';
import { Badge } from '@mantine/core';

interface Props {
  status: CarStatus;
}
export function StatusRenderer({ status }: Props) {
  if (status === 'pending') {
    return (
      <Badge size="xs" color="gray">
        Pending
      </Badge>
    );
  }

  if (status === 'booked') {
    return <Badge size="xs">Booked</Badge>;
  }
  return (
    <Badge size="xs" color="green">
      Available
    </Badge>
  );
}
