import { IReqUserProps } from '@/models/req.model';
import { User } from '@supabase/supabase-js';

export type UserDetails = Partial<Omit<IReqUserProps, 'username'>>;

export const initialProfileValues: UserDetails = {
  firstName: '',
  lastName: '',
  dateOfBirth: undefined,
  gender: '',
  phone: '',
  city: '',
  street: '',
  postalCode: '',
  latitude: undefined,
  longitude: undefined,
  country_id: undefined,
  region_id: undefined,
};

export const getProfileDetails = (user: User | undefined): UserDetails => {
  let meta: UserDetails = {};
  if (user) {
    meta = {
      firstName: user?.user_metadata.firstName || '',
      lastName: user?.user_metadata.lastName || '',
      dateOfBirth: user?.user_metadata.dateOfBirth || new Date(),
      gender: user?.user_metadata.gender,
      phone: user?.user_metadata.phone || '',
      city: user?.user_metadata.city || '',
      street: user?.user_metadata.street || '',
      postalCode: user?.user_metadata.postalCode || '',
      latitude: user?.user_metadata.latitude || undefined,
      longitude: user?.user_metadata.longitude || undefined,
      country_id: user?.user_metadata.country_id || undefined,
      region_id: user?.user_metadata.region_id || undefined,
    };
  }

  return meta;
};
