import { carMakes } from '@/data/car-makes';
import { Select } from '@mantine/core';
import { ReactNode, useEffect } from 'react';

interface Props {
  label?: ReactNode;
  value?: string;
  onChange?: (value: string) => void;
  addAll?: boolean;
  required?: boolean;
}

export function SelectCarMake({
  label,
  value,
  onChange,
  addAll,
  required,
}: Props) {
  useEffect(() => {
    if (addAll && !carMakes.some((make) => make.value === 'all')) {
      carMakes.unshift({ label: 'All', value: 'all' });
    }
  }, [addAll]);

  return (
    <Select
      width="100%"
      label={label || 'Car Make'}
      placeholder="Toyota"
      data={carMakes.map((make) => ({ label: make.label, value: make.value }))}
      value={value}
      onChange={onChange}
      searchable
      maxDropdownHeight={280}
      nothingFound="Nothing found"
      filter={(value, item) =>
        item.label?.toLowerCase().includes(value.toLowerCase().trim()) ||
        item.value.toLowerCase().includes(value.toLowerCase().trim())
      }
      required={required}
    />
  );
}
