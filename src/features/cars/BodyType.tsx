import { SelectCarType } from '@/components/SelectCarType';
import { useFiltersContext } from '@/context/FiltersContext';
import React from 'react';

export const BodyType = () => {
  const { state, updateFilterProperty } = useFiltersContext();

  const handleChange = (value: string) => {
    updateFilterProperty('type', value);
  };

  return (
    <SelectCarType addAny={true} value={state.type} onChange={handleChange} />
  );
};
