import { SegmentedControl, Text } from '@mantine/core';

export const FuelType = () => {
  return (
    <>
      <Text my={16}>Fuel Type</Text>

      <SegmentedControl
        color="pink"
        radius="lg"
        data={[
          { label: 'Any', value: 'any' },
          { label: 'Gasoline', value: 'gasoline' },
          { label: 'Diesel', value: 'diesel' },
          { label: 'Electric', value: 'electric' },
        ]}
      />

      <SegmentedControl
        my={4}
        color="pink"
        radius="lg"
        data={[
          { label: 'Gas', value: 'gas' },
          { label: 'Hybrid', value: 'hybrid' },
        ]}
      />
    </>
  );
};
