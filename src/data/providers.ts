import { IResProviderProps, IResRegionProps } from '@/models/res.model';
import { regionsInGhana } from './gh-regions';

export function getRegion(array: IResRegionProps[]): IResRegionProps {
  if (array.length === 0) {
    return array[-1];
  }

  const index = Math.floor(Math.random() * array.length);
  return array[index];
}

const country = {
  id: 1,
  created_at: '',
  displayName: 'Ghana',
  latitude: 0,
  longitude: 0,
};

export const carProviders: IResProviderProps[] = [
  {
    id: '1',
    created_at: '2023-08-11T08:00:00Z',
    businessRegistrationNumber: 'ABC123456',
    city: 'Accra',
    companyName: 'Ghana Auto Rentals',
    contactName: 'John Doe',
    email: 'john.doe@example.com',
    latitude: 5.560014,
    longitude: -0.205744,
    phone: '+233123456789',
    avatar: 'https://www.example.com/ghana-auto-rentals',
    street: '123 Main Street',
    region: getRegion(regionsInGhana),
    country,
  },
  {
    id: '2',
    created_at: '2023-08-10T10:30:00Z',
    businessRegistrationNumber: 'XYZ789012',
    city: 'Kumasi',
    companyName: 'Kumasi Car Hire',
    contactName: 'Jane Smith',
    email: 'jane.smith@example.com',
    latitude: 6.68848,
    longitude: -1.624428,
    phone: '+233987654321',
    avatar: 'https://www.example.com/kumasi-car-hire',
    street: '456 Elm Avenue',
    region: getRegion(regionsInGhana),
    country,
  },
  {
    id: '3',
    created_at: '2023-08-09T15:45:00Z',
    businessRegistrationNumber: 'PQR345678',
    city: 'Takoradi',
    companyName: 'Coastal Car Rentals',
    contactName: 'Michael Johnson',
    email: 'michael.johnson@example.com',
    latitude: 4.889542,
    longitude: -1.75504,
    phone: '+233234567890',
    avatar: 'https://www.example.com/coastal-car-rentals',
    street: '789 Ocean Drive',
    region: getRegion(regionsInGhana),
    country,
  },
  {
    id: '4',
    created_at: '2023-08-08T12:15:00Z',
    businessRegistrationNumber: 'LMN456789',
    city: 'Tamale',
    companyName: 'Savannah Auto Services',
    contactName: 'Amina Ibrahim',
    email: 'amina.ibrahim@example.com',
    latitude: 9.409091,
    longitude: -0.825595,
    phone: '+233345678901',
    avatar: 'https://www.example.com/savannah-auto-services',
    street: '101 Sahel Street',
    region: getRegion(regionsInGhana),
    country,
  },
  {
    id: '5',
    created_at: '2023-08-07T09:30:00Z',
    businessRegistrationNumber: 'JKL567890',
    city: 'Cape Coast',
    companyName: 'Coastal Wheels',
    contactName: 'David Osei',
    email: 'david.osei@example.com',
    latitude: 5.110186,
    longitude: -1.246277,
    phone: '+233456789012',
    avatar: 'https://www.example.com/coastal-wheels',
    street: '222 Beach Road',
    region: getRegion(regionsInGhana),
    country,
  },
  {
    id: '6',
    created_at: '2023-08-06T14:00:00Z',
    businessRegistrationNumber: 'GHI678901',
    city: 'Ho',
    companyName: 'Volta Drive Rentals',
    contactName: 'Esi Amuzu',
    email: 'esi.amuzu@example.com',
    latitude: 6.600917,
    longitude: 0.471653,
    phone: '+233567890123',
    avatar: 'https://www.example.com/volta-drive-rentals',
    street: '333 Hillside Avenue',
    region: getRegion(regionsInGhana),
    country,
  },
  {
    id: '7',
    created_at: '2023-08-05T17:45:00Z',
    businessRegistrationNumber: 'DEF789012',
    city: 'Sekondi',
    companyName: 'Western Wheels',
    contactName: 'Kwame Appiah',
    email: 'kwame.appiah@example.com',
    latitude: 4.94345,
    longitude: -1.704542,
    phone: '+233678901234',
    avatar: 'https://www.example.com/western-wheels',
    street: '444 Portside Lane',
    region: getRegion(regionsInGhana),
    country,
  },
  {
    id: '8',
    created_at: '2023-08-04T08:30:00Z',
    businessRegistrationNumber: 'MNO890123',
    city: 'Sunyani',
    companyName: 'Brong-Ahafo Car Rentals',
    contactName: 'Grace Mensah',
    email: 'grace.mensah@example.com',
    latitude: 7.339414,
    longitude: -2.336052,
    phone: '+233789012345',
    avatar: 'https://www.example.com/brong-ahafo-car-rentals',
    street: '555 Highland Road',
    region: getRegion(regionsInGhana),
    country,
  },
  {
    id: '9',
    created_at: '2023-08-03T11:15:00Z',
    businessRegistrationNumber: 'UVW901234',
    city: 'Koforidua',
    companyName: 'Eastern Drive Services',
    contactName: 'Kwesi Adu',
    email: 'kwesi.adu@example.com',
    latitude: 6.094866,
    longitude: -0.257336,
    phone: '+233890123456',
    avatar: 'https://www.example.com/eastern-drive-services',
    street: '666 Valley Street',
    region: getRegion(regionsInGhana),
    country,
  },
  {
    id: '10',
    created_at: '2023-08-02T13:30:00Z',
    businessRegistrationNumber: 'OPQ012345',
    city: 'Wa',
    companyName: 'Upper West Wheels',
    contactName: 'Hassan Ali',
    email: 'hassan.ali@example.com',
    latitude: 10.054775,
    longitude: -2.129588,
    phone: '+233901234567',
    avatar: 'https://www.example.com/upper-west-wheels',
    street: '777 Desert Road',
    region: getRegion(regionsInGhana),
    country,
  },
];
