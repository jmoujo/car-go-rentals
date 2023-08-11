import { carMakes } from '@/data/car-makes';
import { regionsInGhana } from '@/data/gh-regions';
import { Select } from '@mantine/core';
import { useState } from 'react';

export function SelectRegion() {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Select
      width="100%"
      label="Select Region"
      placeholder="All"
      data={regionsInGhana}
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
