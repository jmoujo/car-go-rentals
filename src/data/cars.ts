import { IResCarProps } from '@/models/res.model';
import { v4 as uid } from 'uuid';

export const cars: IResCarProps[] = [
  {
    id: 1,
    created_at: '',
    provider_id: '1',
    country_id: '1',
    region_id: '6',
    make: 'Toyota',
    model: 'Camry',
    year: 2022,
    type: 'Sedan',
    description: 'A reliable and fuel-efficient sedan.',
    otherFeatures: ['Bluetooth', 'Backup Camera', 'Keyless Entry'],
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    images: ['images/camry.jpeg'],
    seatingCapacity: 5,
    numberOfDoors: 4,
    numberOfBags: 2,
    acAvailable: true,
    acWorking: true,
    engineCapacity: '2.5L',
    color: 'Silver',
    pricePerDay: 50,
    minimumRentalPeriodInDays: 1,
    maximumRentalPeriodInDays: 30,
    status: 'available',
    slug: uid(),
  },
  {
    id: 2,
    created_at: '',
    provider_id: '2',
    country_id: '1',
    region_id: '6',
    make: 'Honda',
    model: 'CR-V',
    year: 2023,
    type: 'SUV',
    description: 'A spacious and versatile SUV.',
    otherFeatures: ['Apple CarPlay', 'Android Auto', 'Lane Keeping Assist'],
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    images: [
      'images/honda-crv/crv-1.jpg',
      'images/honda-crv/crv-2.jpg',
      'images/honda-crv/crv-3.jpg',
    ],
    seatingCapacity: 5,
    numberOfDoors: 4,
    numberOfBags: 3,
    acAvailable: true,
    acWorking: true,
    engineCapacity: '1.5L',
    color: 'gray',
    pricePerDay: 60,
    minimumRentalPeriodInDays: 2,
    maximumRentalPeriodInDays: 45,
    status: 'available',
    slug: uid(),
  },
  {
    id: 7,
    created_at: '2023-08-11T00:00:00Z',
    provider_id: '1',
    country_id: '1',
    region_id: '6',
    make: 'Mazda',
    model: 'CX-5',
    year: 2023,
    type: 'SUV',
    description: 'A stylish and versatile crossover SUV.',
    otherFeatures: [
      'Sunroof',
      'Smartphone Integration',
      'Rear Cross-Traffic Alert',
    ],
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    images: [
      'images/mazda/mazda-1.png',
      'images/mazda/mazda-2.jpg',
      'images/mazda/mazda-3.jpg',
      'images/mazda/mazda-4.jpg',
      'images/mazda/mazda-5.jpg',
    ],
    seatingCapacity: 5,
    numberOfDoors: 4,
    numberOfBags: 3,
    acAvailable: true,
    acWorking: true,
    engineCapacity: '2.5L',
    color: 'Gray',
    pricePerDay: 55,
    minimumRentalPeriodInDays: 1,
    maximumRentalPeriodInDays: 30,
    status: 'available',
    slug: uid(),
  },
  {
    id: 8,
    created_at: '2023-08-11T00:00:00Z',
    provider_id: '2',
    country_id: '1',
    region_id: '6',
    make: 'BMW',
    model: '3 Series',
    year: 2023,
    type: 'Luxury Sedan',
    description: 'A luxurious and performance-oriented sedan.',
    otherFeatures: [
      'Leather Interior',
      'Adaptive Cruise Control',
      'Harman Kardon Audio',
    ],
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    images: [
      'images/bmw/bmw-1.jpg',
      'images/bmw/bmw-2.jpg',
      'images/bmw/bmw-3.jpg',
      'images/bmw/bmw-4.jpg',
      'images/bmw/bmw-5.jpg',
    ],
    seatingCapacity: 5,
    numberOfDoors: 4,
    numberOfBags: 2,
    acAvailable: true,
    acWorking: true,
    engineCapacity: '3.0L',
    color: 'Black',
    pricePerDay: 90,
    minimumRentalPeriodInDays: 2,
    maximumRentalPeriodInDays: 45,
    status: 'available',
    slug: uid(),
  },
  {
    id: 9,
    created_at: '2023-08-11T00:00:00Z',
    provider_id: '3',
    country_id: '1',
    region_id: '6',
    make: 'Jeep',
    model: 'Wrangler',
    year: 2023,
    type: 'Off-Road SUV',
    description: 'An adventurous and rugged off-road SUV.',
    otherFeatures: ['4x4 Capability', 'Removable Top', 'Trail Rated'],
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    images: [
      'images/jeep/jeep-1.png',
      'images/jeep/jeep-2.png',
      'images/jeep/jeep-3.jpg',
      'images/jeep/jeep-4.jpg',
      'images/jeep/jeep-5.jpg',
    ],
    seatingCapacity: 4,
    numberOfDoors: 2,
    numberOfBags: 2,
    acAvailable: true,
    acWorking: true,
    engineCapacity: '3.6L',
    color: 'Green',
    pricePerDay: 75,
    minimumRentalPeriodInDays: 3,
    maximumRentalPeriodInDays: 30,
    status: 'available',
    slug: uid(),
  },
  {
    id: 10,
    created_at: '2023-08-11T00:00:00Z',
    provider_id: '1',
    country_id: '1',
    region_id: '6',
    make: 'Audi',
    model: 'A4',
    year: 2023,
    type: 'Luxury Sedan',
    description: 'A sophisticated and technologically advanced luxury sedan.',
    otherFeatures: [
      'Virtual Cockpit',
      'Bang & Olufsen Sound System',
      'Quattro AWD',
    ],
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    images: [
      'images/audi/audi-1.png',
      'images/audi/audi-2.jpg',
      'images/audi/audi-3.jpg',
      'images/audi/audi-4.jpg',
      'images/audi/audi-5.jpg',
    ],
    seatingCapacity: 5,
    numberOfDoors: 4,
    numberOfBags: 2,
    acAvailable: true,
    acWorking: true,
    engineCapacity: '2.0L',
    color: 'White',
    pricePerDay: 95,
    minimumRentalPeriodInDays: 2,
    maximumRentalPeriodInDays: 60,
    status: 'available',
    slug: uid(),
  },
  {
    id: 3,
    provider_id: '1',
    created_at: '2023-08-11T00:00:00Z',
    country_id: '1',
    region_id: '6',
    make: 'Ford',
    model: 'Mustang',
    year: 2023,
    type: 'Sports Car',
    description: 'A powerful and stylish sports car.',
    otherFeatures: ['Leather Seats', 'Navigation System', 'Brembo Brakes'],
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    images: [
      'images/ford-mustang/ford-mustang-5.png',
      'images/ford-mustang/ford-mustang-1.jpg',
      'images/ford-mustang/ford-mustang-2.jpg',
      'images/ford-mustang/ford-mustang-3.jpg',
      'images/ford-mustang/ford-mustang-4.jpg',
    ],
    seatingCapacity: 4,
    numberOfDoors: 2,
    numberOfBags: 1,
    acAvailable: true,
    acWorking: true,
    engineCapacity: '5.0L',
    color: 'Red',
    pricePerDay: 100,
    minimumRentalPeriodInDays: 3,
    maximumRentalPeriodInDays: 20,
    status: 'available',
    slug: uid(),
  },
  {
    id: 6,
    provider_id: '3',
    country_id: '1',
    region_id: '6',
    created_at: '',
    make: 'Tesla',
    model: 'Model S',
    year: 2023,
    type: 'Electric Sedan',
    description: 'An innovative and high-performance electric car.',
    otherFeatures: [
      'Autopilot',
      'Full Self-Driving Capability',
      'Large Touchscreen',
    ],
    fuelType: 'Electric',
    transmission: 'Automatic',
    images: [
      'images/tesla/tesla-1.jpg',
      'images/tesla/tesla-2.jpg',
      'images/tesla/tesla-3.jpg',
      'images/tesla/tesla-4.jpg',
      'images/tesla/tesla-5.jpg',
    ],
    seatingCapacity: 5,
    numberOfDoors: 4,
    numberOfBags: 2,
    acAvailable: true,
    acWorking: true,
    engineCapacity: 'Electric',
    color: 'Silver',
    pricePerDay: 150,
    minimumRentalPeriodInDays: 3,
    maximumRentalPeriodInDays: 30,
    status: 'pending',
    slug: uid(),
  },
  {
    id: 4,
    provider_id: '3',
    country_id: '1',
    region_id: '6',
    created_at: '',
    make: 'Nissan',
    model: 'Leaf',
    year: 2023,
    type: 'Sedan',
    description: 'An eco-friendly and energy-efficient electric car.',
    otherFeatures: ['Electric Drive', 'Heated Seats', 'Regenerative Braking'],
    fuelType: 'Electric',
    transmission: 'Automatic',
    images: [
      'images/nissan-leaf/leaf-1.png',
      'images/nissan-leaf/leaf-2.jpg',
      'images/nissan-leaf/leaf-3.jpg',
      'images/nissan-leaf/leaf-4.jpg',
      'images/nissan-leaf/leaf-5.jpg',
    ],
    seatingCapacity: 5,
    numberOfDoors: 4,
    numberOfBags: 2,
    acAvailable: true,
    acWorking: true,
    engineCapacity: 'Electric',
    color: 'Blue',
    pricePerDay: 45,
    minimumRentalPeriodInDays: 1,
    maximumRentalPeriodInDays: 15,
    status: 'booked',
    slug: uid(),
  },
  {
    id: 5,
    created_at: '',
    provider_id: '2',
    country_id: '1',
    region_id: '6',
    make: 'Chevrolet',
    model: 'Tahoe',
    year: 2023,
    type: 'SUV',
    description: 'A spacious and capable full-size SUV.',
    otherFeatures: ['3rd Row Seating', 'Towing Package', 'Blind Spot Alert'],
    fuelType: 'Gasoline',
    transmission: 'Automatic',
    images: [
      'images/chev-tahoe/tahoe-1.jpg',
      'images/chev-tahoe/tahoe-2.jpg',
      'images/chev-tahoe/tahoe-3.jpg',
      'images/chev-tahoe/tahoe-4.jpg',
      'images/chev-tahoe/tahoe-5.jpg',
      'images/chev-tahoe/tahoe-6.jpg',
      'images/chev-tahoe/tahoe-7.jpeg',
      'images/chev-tahoe/tahoe-8.jpg',
    ],
    seatingCapacity: 8,
    numberOfDoors: 4,
    numberOfBags: 5,
    acAvailable: true,
    acWorking: true,
    engineCapacity: '5.3L',
    color: 'Black',
    pricePerDay: 80,
    minimumRentalPeriodInDays: 2,
    maximumRentalPeriodInDays: 60,
    status: 'available',
    slug: uid(),
  },
];
