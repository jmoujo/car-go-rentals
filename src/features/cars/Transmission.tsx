import { SegmentedControl, Text } from '@mantine/core';

export const Transmission = () => {
  return (
    <>
      <Text my={16}>Transmission</Text>

      <SegmentedControl
        color="pink"
        radius="lg"
        data={[
          { label: 'Any', value: 'any' },
          { label: 'Manual', value: 'manual' },
          { label: 'Automatic', value: 'automatic' },
        ]}
      />
    </>
  );
};
