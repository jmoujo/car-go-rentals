import { Select } from '@mantine/core';
import { ReactNode } from 'react';

interface Props {
  label?: ReactNode;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
}

export const SelectFuelType = ({ label, value, onChange, required }: Props) => {
  return (
    <Select
      width="100%"
      label={label || 'Fuel Type/EV'}
      placeholder="Gasoline"
      required={required}
      data={[
        { label: 'Gasoline', value: 'Gasoline' },
        { label: 'Diesel', value: 'Diesel' },
        { label: 'LPG', value: 'LPG' },
        { label: 'CNG', value: 'CNG' },
        { label: 'Electric(EV)', value: 'Electric' },
      ]}
      value={value}
      onChange={onChange}
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
