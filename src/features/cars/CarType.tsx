import { SegmentedControl, Text } from '@mantine/core';
import React from 'react';

export const CarType = () => {
  return (
    <>
      <Text my={16}>Type</Text>

      <SegmentedControl
        color="pink"
        radius="lg"
        data={[
          { label: 'Any', value: 'any' },
          { label: 'Sedan', value: 'sedan' },
          { label: 'SUV', value: 'suv' },
          { label: 'Convertible', value: 'convertible' },
        ]}
      />

      <SegmentedControl
        color="pink"
        radius="lg"
        my={4}
        data={[
          { label: 'Hatchback', value: 'hatchback' },
          { label: 'Van', value: 'van' },
          { label: 'Bus', value: 'bus' },
          { label: 'Truck', value: 'truck' },
        ]}
      />

      <SegmentedControl
        color="pink"
        radius="lg"
        my={4}
        data={[
          { label: 'Compact Car', value: 'compact' },
          { label: 'Coupe', value: 'coupe' },
          { label: 'Wagon', value: 'wagon' },
          { label: 'Pick Up', value: 'pick-up' },
        ]}
      />
    </>
  );
};
