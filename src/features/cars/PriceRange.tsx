import { Box, Flex, NumberInput, RangeSlider, Text } from '@mantine/core';
import { useState } from 'react';

export const PriceRange = () => {
  const [minValue, setMinValue] = useState<number>(350);
  const [maxValue, setMaxValue] = useState<number>(1000);
  function labelFormatter(value: number) {
    return `$ ${value.toFixed(0)}`;
  }

  function handleSliderChange([min, max]: [number, number]) {
    setMinValue(min);
    setMaxValue(max);
  }

  return (
    <>
      <Text my={16}>Price Range</Text>
      <RangeSlider
        py="xl"
        step={10}
        min={300}
        max={2000}
        labelAlwaysOn
        value={[minValue, maxValue]}
        label={labelFormatter}
        onChange={handleSliderChange}
        thumbSize={12}
        color="pink"
      />
      <Flex gap={8}>
        <Box>
          <Text size="xs">Min.</Text>
          <NumberInput
            min={300}
            max={2000}
            value={minValue}
            onChange={(value) => value !== '' && setMinValue(value)}
          />
        </Box>
        <Box>
          <Text size="xs">Max.</Text>
          <NumberInput
            min={300}
            max={2000}
            value={maxValue}
            onChange={(value) => value !== '' && setMaxValue(value)}
          />
        </Box>
      </Flex>
    </>
  );
};
