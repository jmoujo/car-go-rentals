import {
  Button,
  Container,
  Flex,
  createStyles,
  useMantineColorScheme,
} from '@mantine/core';
import { SelectCarMake } from './SelectCarMake';
import { SelectDate } from './SelectDate';
import { primaryGradient } from '@/const';
import { SelectRegion } from './SelectRegion';
import Link from 'next/link';

const containerBgColor = { light: 'gray.1', dark: 'gray.8' };

const useStyles = createStyles((theme) => ({
  container: {
    borderRadius: '6px',
    border: '1px solid rgba(255, 255, 255, 0.125)',
    boxShadow: theme.shadows.sm,
  },
}));

export const SearchEngine = () => {
  const { classes } = useStyles();
  const { colorScheme } = useMantineColorScheme();

  return (
    <Container
      bg={containerBgColor[colorScheme]}
      className={classes.container}
      py="1rem"
      size="xl"
    >
      <Flex
        direction={{ base: 'column', sm: 'row' }}
        gap={{ base: 'sm', sm: 'lg' }}
        justify="center"
        align={{ base: 'stretch', sm: 'flex-end' }}
      >
        <SelectRegion />
        <SelectCarMake />
        <SelectDate label="Pickup Date" />
        <SelectDate label="Return Date" />
        <Button
          component={Link}
          href="/cars"
          variant="gradient"
          gradient={primaryGradient}
        >
          Search for Car
        </Button>
      </Flex>
    </Container>
  );
};
