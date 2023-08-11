import { carMakes } from '@/data/car-makes';
import { Select } from '@mantine/core';
import { useState } from 'react';

export function SelectCarMake() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Select
      width="100%"
      label="Select Car Make"
      placeholder="All"
      data={carMakes}
      value={value}
      onChange={setValue}
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
