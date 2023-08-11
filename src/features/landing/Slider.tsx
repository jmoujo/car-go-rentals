import { Carousel } from '@mantine/carousel';
import { Center, Image } from '@mantine/core';

const images = ['images/cars-1.png', 'images/cars-2.png'];
export const Slider = () => {
  return (
    <Carousel withIndicators loop>
      {images.map((image) => (
        <Carousel.Slide key={image} mt="2rem">
          <Center h={{ base: 300, md: 400, xl: 600 }} mx="auto">
            <Image src={image} alt="" />
          </Center>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
