'use client';
import { regionsInGhana } from '@/data/gh-regions';
import { Container } from '@mantine/core';
import { Hero } from './Hero';
import Map from '@/components/Map';

export const Landing = () => {
  return (
    <>
      <Hero />
      <Container mt="-3rem" px="1rem" mb="2rem">
        <Map region={regionsInGhana[0]} />
      </Container>
    </>
  );
};
