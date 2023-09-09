import { primaryGradient } from '@/const';
import { useAppContext } from '@/context/AppContext';
import {
  Button,
  Container,
  Flex,
  createStyles,
  useMantineColorScheme,
} from '@mantine/core';
import { DateValue } from '@mantine/dates';
import { useEffect } from 'react';
import { SelectCarMake } from './SelectCarMake';
import { SelectCountry } from './SelectCountry';
import { SelectDate } from './SelectDate';
import { SelectRegion } from './SelectRegion';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { useCountries } from '@/hooks/useCountries';
import { useRegions } from '@/hooks/useRegions';

const now = new Date();
const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

const containerBgColor = { light: 'gray.1', dark: 'gray.8' };

const useStyles = createStyles((theme) => ({
  container: {
    borderRadius: '6px',
    border: '1px solid rgba(255, 255, 255, 0.125)',
    boxShadow: theme.shadows.sm,
  },
}));

export const SearchEngine = () => {
  const router = useRouter();
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();
  const {
    state: { selectedCountry, selectedRegion, carMake, pickupDate, returnDate },
    setCountry,
    setRegion,
    setPickupDate,
    setReturnDate,
  } = useAppContext();
  const { countries } = useCountries();
  const { regions } = useRegions(selectedCountry?.id);

  const handlePickupDateChange = (value: DateValue) => {
    setPickupDate(value);
  };

  const handleReturnDateChange = (value: DateValue) => {
    setReturnDate(value);
  };

  const handleCountryChange = (value: string) => {
    if (countries) {
      const country = countries.filter(
        (country) => country.id.toString() === value
      )[0];
      setCountry(country);
    }
  };

  const handleRegionChange = (value: string) => {
    console.log('Region changed', value, regions);
    if (regions) {
      const newSelectedRegion = regions.filter(
        (region) => region.id.toString() === value
      )[0];
      console.log(newSelectedRegion);
      setRegion(newSelectedRegion);
    }
  };

  const handleSearchCars = () => {
    if (
      selectedCountry &&
      selectedRegion &&
      carMake &&
      pickupDate &&
      returnDate
    ) {
      const params = `country=${selectedCountry.id}region=${selectedRegion.id}make=${carMake.value}`;
      router.push(`/cars?${params}`);
    } else {
      toast.error('Select value for all search fields');
    }
  };

  useEffect(() => {
    if (countries) {
      setCountry(countries[0]);
    }
  }, [countries, setCountry]);

  useEffect(() => {
    if (regions) {
      setRegion(regions[0]);
    }
  }, [regions, setRegion]);

  return (
    <Container
      bg={containerBgColor[colorScheme]}
      className={classes.container}
      py="1rem"
      size="100%"
    >
      <Flex
        direction={{ base: 'column', sm: 'row' }}
        gap={{ base: 'sm', sm: 'lg' }}
        justify="center"
        align={{ base: 'stretch', sm: 'flex-end' }}
      >
        <SelectCountry
          value={selectedCountry?.id.toString()}
          onChange={handleCountryChange}
        />
        <SelectRegion
          value={selectedRegion?.id.toString()}
          onChange={handleRegionChange}
          selectedCountry={selectedCountry}
        />
        <SelectCarMake />
        <SelectDate
          value={pickupDate}
          label="Pickup Date"
          minDate={today}
          onChange={handlePickupDateChange}
        />
        <SelectDate
          label="Return Date"
          value={returnDate}
          minDate={tomorrow}
          onChange={handleReturnDateChange}
        />
        <Button
          onClick={handleSearchCars}
          variant="gradient"
          gradient={primaryGradient}
        >
          Search for Car
        </Button>
      </Flex>
    </Container>
  );
};
