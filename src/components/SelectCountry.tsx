import { useCountries } from '@/hooks/useCountries';
import { Select } from '@mantine/core';
import { ReactNode } from 'react';

interface Props {
  label?: ReactNode;
  value?: string;
  onChange?: (value: string) => void;
}

export const SelectCountry = ({ label, value, onChange }: Props) => {
  const { isLoading, countries } = useCountries();

  return (
    <Select
      width="100%"
      label={label || 'Country'}
      placeholder="Ghana"
      data={
        countries
          ? countries.map((country) => ({
              label: country.displayName,
              value: country.id.toString(),
            }))
          : []
      }
      disabled={isLoading}
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
