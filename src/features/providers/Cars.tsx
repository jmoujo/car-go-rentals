'use client';
import { primaryGradient, textColor } from '@/const';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Group,
  Popover,
  Table,
  Text,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import { IconEdit, IconPlus, IconTrash } from '@tabler/icons-react';
import React from 'react';
import { AddOrEditCar } from './AddOrEditCar';
import { IResCarProps } from '@/models/res.model';
import { useSupabase } from '@/context/SupabaseContext';
import { ConfirmationModal } from '@/components/ConfirmationModal';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import { useCarContext } from '@/context/CarContext';
import { useDisclosure } from '@mantine/hooks';
import { TableRow } from './TableRow';

interface Props {
  cars: IResCarProps[] | null;
}

const header = (
  <tr>
    <th>Image</th>
    <th>Make</th>
    <th>Model</th>
    <th>Year</th>
    <th>Type</th>
    <th>Actions</th>
  </tr>
);

export const Cars = ({ cars }: Props) => {
  const { resetState } = useCarContext();
  const { colorScheme } = useMantineColorScheme();
  const [opened, { open, close }] = useDisclosure(false);

  const rows = cars?.map((car) => <TableRow key={car.id} car={car} />);

  return (
    <>
      <Divider
        my="lg"
        label={
          <Title order={3} color={textColor[colorScheme]}>
            All Cars ({cars?.length})
          </Title>
        }
      />

      <AddOrEditCar
        openButton={
          <Group position="right" mb="md">
            <Button
              onClick={() => {
                resetState();
                open();
              }}
              variant="gradient"
              gradient={primaryGradient}
            >
              <IconPlus /> New Car
            </Button>
          </Group>
        }
        mode="new"
        open={open}
        close={close}
        opened={opened}
      />

      <Box mah="310px" sx={{ overflowY: 'auto' }}>
        <Table striped highlightOnHover>
          <thead>{header}</thead>
          <tbody>{rows}</tbody>
        </Table>
      </Box>
    </>
  );
};
