import { IResUserProps } from '@/models/res.model';
import { getRegion } from './providers';
import { regionsInGhana } from './gh-regions';

export const users: IResUserProps[] = [
  {
    id: 1,
    created_at: '',
    username: 'mrshadrack',
    firstName: 'Shadrack',
    lastName: 'Doe',
    dateOfBirth: '1990-06-15',
    gender: 'Male',
    phone: '+233 55 987-6543',
    avatar: '',
    country: {
      id: 1,
      created_at: '',
      displayName: 'Ghana',
      latitude: 0,
      longitude: 0,
    },
    region: getRegion(regionsInGhana),
    city: 'Achimota',
    street: 'Kaiser Valley',
    postalCode: '00233',
    latitude: 0.5678,
    longitude: -0.5638,
  },
];
