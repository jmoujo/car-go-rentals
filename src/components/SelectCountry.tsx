import { Select } from '@mantine/core';
import React from 'react';

export const SelectCountry = () => {
  return (
    <Select
      width="100%"
      label="Country"
      placeholder="Ghana"
      data={[{ label: 'Ghana', value: 'ghana' }]}
      defaultValue="ghana"
      searchable
      maxDropdownHeight={280}
      nothingFound="Nothing found"
      filter={(value, item) =>
        item.label?.toLowerCase().includes(value.toLowerCase().trim()) ||
        item.value.toLowerCase().includes(value.toLowerCase().trim())
      }
    />
  );
};
