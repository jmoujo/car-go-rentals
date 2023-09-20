import { Logo } from '@/components/Header/Logo';
import { SelectCarType } from '@/components/SelectCarType';
import { SelectFuelType } from '@/components/SelectFuelType';
import { Button, Drawer, Flex, Space, Text, Title } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconFilterCog, IconRefresh } from '@tabler/icons-react';
import { PriceRange } from './PriceRange';
import { Transmission } from './Transmission';
import { YearModel } from './YearModel';

export const FiltersDrawer = () => {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Drawer
        opened={opened}
        onClose={close}
        title={<Logo />}
        display={{ base: 'inline-block', md: 'none' }}
        position="top"
        size="xl"
        pt="100px"
      >
        <Flex align="center" justify="space-between">
          <Title order={4}>Filters</Title>
          <Button variant="subtle">
            <IconRefresh size="14px" />{' '}
            <Text component="span" mx={2}>
              Reset All
            </Text>
          </Button>
        </Flex>

        <SelectCarType addAny={true} />
        <PriceRange />
        <YearModel />
        <Transmission />
        <Space my="lg" />
        <SelectFuelType addAny />
      </Drawer>

      <Button
        onClick={open}
        variant="subtle"
        display={{ base: 'inline-block', md: 'none' }}
      >
        <IconFilterCog size="14px" />{' '}
        <Text component="span" mx={2}>
          Open Filters
        </Text>
      </Button>
    </>
  );
};
