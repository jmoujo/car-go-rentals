import { DateValue } from '@mantine/dates';
import {
  AuthError,
  AuthResponse,
  AuthTokenResponse,
  OAuthResponse,
  Session,
  SupabaseClient,
  User,
} from '@supabase/supabase-js';
import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import { IResCarProps, IResCountryProps, IResRegionProps } from './res.model';
import { Database } from './supabase';
import { IReqCarProps } from './req.model';

export type CarStatus = 'available' | 'pending' | 'booked';

export type CarType =
  | 'sedan'
  | 'suv'
  | 'convertible'
  | 'hatchback'
  | 'van'
  | 'bus'
  | 'truck'
  | 'compact'
  | 'coupe'
  | 'wagon'
  | 'pick-up';

export type SelectItem = {
  label: string;
  value: string;
  icon?: ReactNode | IconType;
};

export interface IPaginationRes {
  range: (number | 'dots')[];
  active: number;
  setPage: (pageNumber: number) => void;
  next: () => void;
  previous: () => void;
  first: () => void;
  last: () => void;
}

export interface IBaseReviewProps {
  comment: string;
  dislikes: number;
  likes: number;
  rate: number;
}

export interface IBaseUserProps {
  username: string;
  firstName?: string;
  lastName?: string;
  dateOfBirth?: string;
  gender?: string;
  avatar?: string;
  phone?: string;
  // address
  city?: string;
  postalCode?: string;
  street?: string;
  latitude?: number;
  longitude?: number;
}

export interface IBaseCarType {
  displayName: string;
  imageUrl: string;
}

export interface IBaseCarProps {
  make: string;
  model: string;
  year: number;
  transmission: string;
  engineCapacity: number | string;
  fuelType: string;
  description: string;
  seatingCapacity: number;
  numberOfBags: number;
  numberOfDoors: number;
  acAvailable: boolean;
  acWorking: boolean;
  images: string[];
  otherFeatures: string[];
  color: string;
  status: CarStatus;
  provider_id: string | undefined;
  pricePerDay: number;
  minimumRentalPeriodInDays: number | '';
  maximumRentalPeriodInDays: number | '';
}

export interface IBaseProviderProps {
  businessRegistrationNumber: string;
  city: string;
  companyName: string;
  contactName: string;
  email: string;
  latitude: number;
  longitude: number;
  phone: string;
  profileUrl: string;
  street: string;
}

export interface IBaseBookingProps {
  pickupDate: string;
  provider_id: number;
  returnDate: string;
  totalPrice: number;
}

export interface IBaseLocationProps {
  displayName: string;
  latitude: number;
  longitude: number;
}

export interface IAuthContext {
  session: Session | null;
  user?: User;
  logInWithEmailPassword: (
    email: string,
    password: string
  ) => Promise<AuthTokenResponse>;
  signupWithEmailPassword: (
    email: string,
    password: string,
    userDetails: any
  ) => Promise<AuthResponse>;
  logOut: () => Promise<{
    error: AuthError | null;
  }>;
  signInWithGoogle: () => Promise<OAuthResponse>;
}

export interface IUserProfileContext {
  updateProfileInfo: (user: any) => Promise<void>;
  updateAvatar: (avatarUrl: string) => Promise<void>;
}

export type UpdatedRes = {
  updatedUser: User | null;
  error: AuthError | null;
};

export interface ISupabaseContext {
  supabase: SupabaseClient<Database>;
}

export interface IAppState {
  selectedCountry: IResCountryProps | undefined;
  selectedRegion: IResRegionProps | undefined;
  carMake: SelectItem | undefined;
  pickupDate: DateValue | undefined;
  returnDate: DateValue | undefined;
}

export interface IAppContext {
  state: IAppState;
  setCountry: (selectedCountry: IResCountryProps) => void;
  setRegion: (selectedRegion: IResRegionProps) => void;
  setMake: (selectedMake: SelectItem) => void;
  setPickupDate: (pickupDate: DateValue) => void;
  setReturnDate: (returnDate: DateValue) => void;
}

export type CurrentMode = 'new' | 'edit';

export type ICarState = IReqCarProps | IResCarProps;

export interface ICarContext {
  state: ICarState;
  updateProperty: (key: keyof IReqCarProps, value: any) => void;
  addInitialState: (state: ICarState) => void;
  addCarImage: (url: string) => void;
  removeImage: (url: string) => void;
  resetState: () => void;
}
