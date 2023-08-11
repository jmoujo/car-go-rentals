import { Container, createStyles, rem } from '@mantine/core';
import React from 'react';
import { Slider } from './Slider';
import { SearchEngine } from '@/components/SearchEngine';

const useStyles = createStyles((theme) => ({
  hero: {
    backgroundColor: '#11284b',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `${theme.fn.gradient({
      from: theme.fn.rgba('#C2255C', 0.55),
      to: theme.fn.rgba('#FD7E14', 0.65),
      deg: 45,
    })}, url(https://images.pexels.com/photos/3629227/pexels-photo-3629227.jpeg)`,
  },
}));

export const Hero = () => {
  const { classes } = useStyles();

  return (
    <Container pb="4rem" fluid className={classes.hero}>
      <Slider />
      <Container>
        <SearchEngine />
      </Container>
    </Container>
  );
};
