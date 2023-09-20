import { Box, Flex, Space } from '@mantine/core';
import { useEffect, useState } from 'react';
import { CarCard } from './CarCard';
import { PaginationButtons } from './PaginationButtons';
import { IResCarProps } from '@/models/res.model';
import { useFiltersContext } from '@/context/FiltersContext';

const itemsPerPage = 6;

interface CarListProps {
  cars: IResCarProps[];
}
export const CarList = ({ cars }: CarListProps) => {
  const { state } = useFiltersContext();
  const [activePage, setPage] = useState(1);
  const [visibleCars, setVisibleCars] = useState<IResCarProps[]>([]);

  const total = Math.ceil(cars.length / itemsPerPage);

  const handlePageChange = (value: number) => {
    setPage(value);
    const start = (value - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    setVisibleCars(cars.slice(start, end));
  };

  useEffect(() => {
    // filter cars based on filters
    const filteredCars = cars
      .filter((car) =>
        state.type === 'any'
          ? true
          : car.type.toLowerCase() === state.type.toLowerCase()
      )
      .filter((car) =>
        state.transmission === 'any'
          ? true
          : car.transmission.toLowerCase() === state.transmission.toLowerCase()
      )
      .filter((car) =>
        state.fuelType === 'any'
          ? true
          : car.fuelType.toLowerCase() === state.fuelType.toLowerCase()
      )
      .filter(
        (car) =>
          car.pricePerDay >= state.minPrice && car.pricePerDay <= state.maxPrice
      )
      .filter((car) => car.year >= state.minYear && car.year <= state.maxYear);

    setVisibleCars(filteredCars.slice(0, itemsPerPage));
  }, [cars, state]);

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
