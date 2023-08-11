'use client';
import { regionsInGhana } from '@/data/gh-regions';
import { Container } from '@mantine/core';
import dynamic from 'next/dynamic';
import { Hero } from './Hero';

const Map = dynamic(() => import('@/components/Map'), {
  ssr: false,
});

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
