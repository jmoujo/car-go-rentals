import { RangeSlider, Text } from '@mantine/core';
import React, { useState } from 'react';

const currentYear = new Date().getFullYear();
const startYear = 1990;

export const YearModel = () => {
  const [minYear, setMinYear] = useState<number>(startYear);
  const [maxYear, setMaxYear] = useState<number>(currentYear);

  function handleSliderChange([min, max]: [number, number]) {
    setMinYear(min);
    setMaxYear(max);
  }

  return (
    <>
      <Text my={16}>Year</Text>
      <RangeSlider
        py="xl"
        step={1}
        min={startYear}
        max={currentYear}
        labelAlwaysOn
        value={[minYear, maxYear]}
        onChange={handleSliderChange}
        thumbSize={12}
        color="pink"
      />
    </>
  );
};
