import { useRegions } from '@/hooks/useRegions';
import { Select, SelectProps } from '@mantine/core';
import { ReactNode } from 'react';

interface Props extends Omit<SelectProps, 'data'> {
  label?: ReactNode;
  value?: string;
  selectedCountryId?: number;
  onChange?: (value: string) => void;
}

export function SelectRegion({
  label,
  value,
  selectedCountryId,
  onChange,
  ...rest
}: Props) {
  const { isLoading, regions } = useRegions(selectedCountryId);

  return (
    <Select
      width="100%"
      label={label || 'Region'}
      placeholder="Your Region"
      searchable
      maxDropdownHeight={280}
      {...rest}
      data={
        regions
          ? regions.map((region) => ({
              label: region.displayName,
              value: region.id.toString(),
            }))
          : []
      }
      disabled={isLoading}
      value={value}
      onChange={onChange}
      nothingFound="Nothing found"
      filter={(value, item) =>
        item.label?.toLowerCase().includes(value.toLowerCase().trim()) ||
        item.value.toLowerCase().includes(value.toLowerCase().trim())
      }
    />
  );
}
