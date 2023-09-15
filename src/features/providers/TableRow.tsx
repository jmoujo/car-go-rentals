import { ConfirmationModal } from '@/components/ConfirmationModal';
import { useCarContext } from '@/context/CarContext';
import { useSupabase } from '@/context/SupabaseContext';
import { Avatar, Group, Button } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconEdit, IconTrash } from '@tabler/icons-react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { AddOrEditCar } from './AddOrEditCar';
import { IResCarProps } from '@/models/res.model';

interface TableRowProps {
  car: IResCarProps;
}

export const TableRow = ({ car }: TableRowProps) => {
  const [opened, { open, close }] = useDisclosure(false);
  const supabase = useSupabase();
  const { addInitialState } = useCarContext();
  const { refresh } = useRouter();

  const handleDeleteCar = async (carId: number) => {
    const { error } = await supabase.from('cars').delete().eq('id', carId);

    if (error) {
      toast.error('Failed to delete car! Try again');
    } else {
      toast.success('Car deleted successfully');
      refresh();
    }
  };

  return (
    <tr>
      <td>
        <Avatar src={car.images[0]} />
      </td>
      <td>{car.make}</td>
      <td>{car.model}</td>
      <td>{car.year}</td>
      <td>{car.type}</td>
      <td>
        <Group maw="150px">
          <AddOrEditCar
            openButton={
              <Button
                onClick={() => {
                  addInitialState(car);
                  open();
                }}
                size="xs"
                variant="subtle"
              >
                <IconEdit />
              </Button>
            }
            mode="edit"
            open={open}
            close={close}
            opened={opened}
          />

          <ConfirmationModal
            name={` ${car.make} ${car.model}`}
            onConfirm={() => handleDeleteCar(car.id)}
            openButton={
              <Button size="xs" variant="subtle" color="red">
                <IconTrash />
              </Button>
            }
          />
        </Group>
      </td>
    </tr>
  );
};
