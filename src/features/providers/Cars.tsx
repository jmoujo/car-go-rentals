'use client';
import { primaryGradient, textColor } from '@/const';
import { useCarContext } from '@/context/CarContext';
import { IResCarProps } from '@/models/res.model';
import {
  Box,
  Button,
  Divider,
  Group,
  Table,
  Title,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconPlus } from '@tabler/icons-react';
import { AddOrEditCar } from './AddOrEditCar';
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
    <th>Status</th>
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
