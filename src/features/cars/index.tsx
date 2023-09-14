'use client';
import { SearchEngine } from '@/components/SearchEngine';
import { regionsInGhana } from '@/data/gh-regions';
import {
  Box,
  Button,
  Card,
  Container,
  Divider,
  Flex,
  Text,
  Title,
  createStyles,
  useMantineColorScheme,
} from '@mantine/core';
import { IconBrandGoogleMaps, IconRefresh } from '@tabler/icons-react';
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { CarList } from './CarList';
import { FiltersDrawer } from './FiltersDrawer';
import { FuelType } from './FuelType';
import { PriceRange } from './PriceRange';
import { Transmission } from './Transmission';
import { YearModel } from './YearModel';
import Map from '@/components/Map';
import { SelectCarType } from '@/components/SelectCarType';

const cardBgColor = { light: 'gray.1', dark: 'gray.8' };

const useStyles = createStyles((theme) => ({
  mapToggle: {
    backgroundColor: 'transparent',
    padding: 0,

    '&:hover': {
      backgroundColor: 'transparent',
    },
  },
}));

export const Layout = () => {
  const { colorScheme } = useMantineColorScheme();
  const { classes } = useStyles();
  const [showMap, setShowMap] = useState(false);

  return (
    <Container size="xl" my="sm" py="md">
      <SearchEngine />
      <Flex justify="flex-end">
        <Button
          onClick={() => setShowMap(!showMap)}
          className={classes.mapToggle}
          size="sm"
          variant="subtle"
        >
          <IconBrandGoogleMaps size="16px" />
          {showMap ? 'Hide Map' : <>Show Map</>}
        </Button>
      </Flex>

      {showMap && <Map region={regionsInGhana[4]} height="200px" />}

      <Flex
        gap="md"
        justify="flex-start"
        align="flex-start"
        direction={{ base: 'column', md: 'row' }}
        p={16}
        mb={16}
        mt={8}
        bg={cardBgColor[colorScheme]}
      >
        <Card w={{ base: '100%', md: '350px' }}>
          <Flex align="center" justify="space-between">
            <Title order={4}>Filters</Title>
            <Button
              variant="subtle"
              display={{ base: 'none', md: 'inline-block' }}
            >
              <IconRefresh size="14px" />{' '}
              <Text component="span" mx={2}>
                Reset All
              </Text>
            </Button>
            <FiltersDrawer />
          </Flex>
          <Divider my={16} display={{ base: 'none', md: 'block' }} />
          <Box display={{ base: 'none', md: 'block' }}>
            <SelectCarType addAny={true} />
            <PriceRange />
            <YearModel />
            <Transmission />
            <FuelType />
          </Box>
        </Card>
        <CarList />
      </Flex>
    </Container>
  );
};
