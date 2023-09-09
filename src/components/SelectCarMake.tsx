import { useAppContext } from '@/context/AppContext';
import { carMakes } from '@/data/car-makes';
import { Select } from '@mantine/core';
import { useState } from 'react';

export function SelectCarMake() {
  const {
    state: { carMake },
    setMake,
  } = useAppContext();

  const handleChange = (value: string) => {
    const selectedMake = carMakes.filter((make) => make.value === value)[0];
    setMake(selectedMake);
  };

  return (
    <Select
      width="100%"
      label="Car Make"
      placeholder="All"
      data={carMakes.map((make) => ({ label: make.label, value: make.value }))}
      value={carMake?.value}
      onChange={handleChange}
      searchable
      maxDropdownHeight={280}
      nothingFound="Nothing found"
      filter={(value, item) =>
        item.label?.toLowerCase().includes(value.toLowerCase().trim()) ||
        item.value.toLowerCase().includes(value.toLowerCase().trim())
      }
    />
  );
}
