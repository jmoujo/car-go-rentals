import { useAppContext } from '@/context/AppContext';
import { useRegions } from '@/hooks/useRegions';
import { IResCountryProps } from '@/models/res.model';
import { Select } from '@mantine/core';
import { ReactNode } from 'react';

interface Props {
  label?: ReactNode;
  value?: string;
  selectedCountry?: IResCountryProps;
  onChange?: (value: string) => void;
}

export function SelectRegion({
  label,
  value,
  selectedCountry,
  onChange,
}: Props) {
  const { isLoading, regions } = useRegions(selectedCountry?.id);

  return (
    <Select
      width="100%"
      label={label || 'Region'}
      placeholder="Your Region"
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
