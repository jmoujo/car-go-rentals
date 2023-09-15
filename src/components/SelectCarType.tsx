import { Select } from '@mantine/core';
import { ReactNode } from 'react';

interface Props {
  label?: ReactNode;
  value?: string;
  onChange?: (value: string) => void;
  addAny?: boolean;
  required?: boolean;
}

const carTypes = [
  { label: 'Sedan', value: 'sedan' },
  { label: 'Luxury Sedan', value: 'luxury-sedan' },
  { label: 'Electric Sedan', value: 'electric-sedan' },
  { label: 'SUV', value: 'suv' },
  { label: 'Off-Road SUV', value: 'off-road-suv' },
  { label: 'Convertible', value: 'convertible' },
  { label: 'Hatchback', value: 'hatchback' },
  { label: 'Sports Car', value: 'sports-car' },
  { label: 'Van', value: 'van' },
  { label: 'Bus', value: 'bus' },
  { label: 'Truck', value: 'truck' },
  { label: 'Compact Car', value: 'compact' },
  { label: 'Coupe', value: 'coupe' },
  { label: 'Wagon', value: 'wagon' },
  { label: 'Pick Up', value: 'pick-up' },
];

export const SelectCarType = ({
  label,
  value,
  onChange,
  addAny,
  required = false,
}: Props) => {
  if (addAny) {
    carTypes.unshift({ label: 'Any', value: 'any' });
  }

  return (
    <Select
      width="100%"
      label={label || 'Car Type'}
      placeholder="Sedan"
      data={carTypes}
      value={value}
      onChange={onChange}
      searchable
      maxDropdownHeight={280}
      nothingFound="Nothing found"
      required={required}
      filter={(value, item) =>
        item.label?.toLowerCase().includes(value.toLowerCase().trim()) ||
        item.value.toLowerCase().includes(value.toLowerCase().trim())
      }
    />
  );
};
