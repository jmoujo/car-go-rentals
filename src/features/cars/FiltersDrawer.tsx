import React from 'react';
import { useDisclosure } from '@mantine/hooks';
import { Drawer, Button, Group, Text, Flex, Title } from '@mantine/core';
import { IconFilterCog, IconRefresh } from '@tabler/icons-react';
import { PriceRange } from './PriceRange';
import { YearModel } from './YearModel';
import { Transmission } from './Transmission';
import { FuelType } from './FuelType';
import { Logo } from '@/components/Header/Logo';
import { SelectCarType } from '@/components/SelectCarType';

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
        <FuelType />
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
