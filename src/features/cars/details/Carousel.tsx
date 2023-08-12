import { md, sm, xs } from '@/const';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';

const images = [
  '../images/bmw/bmw-1.jpg',
  '../images/bmw/bmw-2.jpg',
  '../images/bmw/bmw-3.jpg',
  '../images/bmw/bmw-4.jpg',
  '../images/bmw/bmw-5.jpg',
];

export const CarsCarousel = () => {
  const smScreen = useMediaQuery(`(min-width: ${sm})`);
  const mdScreen = useMediaQuery(`(min-width: ${md})`);

  return (
    <Carousel withIndicators loop>
      {images.map((image) => (
        <Carousel.Slide key={image} mt="2rem" mx="auto">
          <div
            style={{
              background: `center / cover no-repeat url(${image})`,
              height: mdScreen ? '400px' : smScreen ? '300px' : '200px',
              borderRadius: 5,
              border: '3px solid gray',
            }}
          />
        </Carousel.Slide>
      ))}
    </Carousel>
  );
};
