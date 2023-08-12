import { cars } from '@/data/cars';
import { Box, Flex, Space } from '@mantine/core';
import { useState } from 'react';
import { CarCard } from './CarCard';
import { PaginationButtons } from './PaginationButtons';
import { IResCarProps } from '@/models/res.model';

const itemsPerPage = 6;

export const CarList = () => {
  const [activePage, setPage] = useState(1);
  const [visibleCars, setVisibleCars] = useState<IResCarProps[]>(
    cars.slice(0, itemsPerPage)
  );

  const total = Math.ceil(cars.length / itemsPerPage);

  const handlePageChange = (value: number) => {
    setPage(value);
    const start = (value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setVisibleCars(cars.slice(start, end));
  };

  return (
    <Box w={{ base: '100%', md: 'calc(100% - 300px)' }}>
      <PaginationButtons
        value={activePage}
        handlePageChange={handlePageChange}
        total={total}
      />
      <Flex wrap="wrap" justify="space-between" gap="md">
        {visibleCars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </Flex>
      <Space my={8} />
      <PaginationButtons
        value={activePage}
        handlePageChange={handlePageChange}
        total={total}
      />
    </Box>
  );
};
