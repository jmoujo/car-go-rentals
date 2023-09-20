import { Select } from '@mantine/core';
import { ReactNode, useEffect } from 'react';

const fuelTypes = [
  { label: 'Gasoline', value: 'Gasoline' },
  { label: 'Diesel', value: 'Diesel' },
  { label: 'LPG', value: 'LPG' },
  { label: 'CNG', value: 'CNG' },
  { label: 'Electric(EV)', value: 'Electric' },
];

interface Props {
  label?: ReactNode;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  addAny?: boolean;
}

export const SelectFuelType = ({
  label,
  value,
  onChange,
  required,
  addAny,
}: Props) => {
  useEffect(() => {
    if (addAny) {
      fuelTypes.unshift({ label: 'Any', value: 'any' });
    }
  }, [addAny]);

  return (
    <Select
      width="100%"
      label={label || 'Fuel Type/EV'}
      placeholder="Gasoline"
      required={required}
      data={fuelTypes}
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
