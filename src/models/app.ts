import { ReactNode } from 'react';
import { IconType } from 'react-icons';

export type CarStatus = 'available' | 'pending' | 'booked';

export type SelectItem = {
  label: string;
  value: string;
  icon: ReactNode | IconType;
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
  firstName: string;
  lastName: string;
  username: string;
  dateOfBirth: string;
  gender: string;
  profileImage: string;
  phone: string;
  // address
  city: string;
  postalCode: string;
  street: string;
  latitude: number;
  longitude: number;
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
  engineCapacity: string;
  fuelType: string;
  description: string;
  seatingCapacity: number;
  numberOfBags: number;
  numberOfDoors: number;
  acAvailable: boolean;
  acWorking: boolean;
  mainImage: string;
  otherImages: string[];
  otherFeatures: string[];
  color: string;
  providerId: number;
  status: CarStatus;
  pricePerDay: number;
  minimumRentalPeriodInDays: number;
  maximumRentalPeriodInDays: number;
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
  providerId: number;
  returnDate: string;
  totalPrice: number;
}

export interface IBaseLocationProps {
  displayName: string;
  latitude: number;
  longitude: number;
}
