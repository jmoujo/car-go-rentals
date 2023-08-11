import {
  IBaseCarType,
  IBaseBookingProps,
  IBaseCarProps,
  IBaseLocationProps,
  IBaseProviderProps,
  IBaseUserProps,
} from './app';

export interface IResCarType extends IBaseCarType {
  id?: number;
  created_at?: string;
}

export interface IResCarProps extends IBaseCarProps {
  id: number;
  created_at: string;
  type: IResCarType;
}

export interface IResProviderProps extends IBaseProviderProps {
  id: number;
  created_at: string;
  country: IResCountryProps;
  region: IResRegionProps;
}

export interface IResBookingProps extends IBaseBookingProps {
  id: number;
  created_at: string;
  car: IResCarProps;
}

export interface IResCountryProps extends IBaseLocationProps {
  id?: number;
  created_at?: string;
}

export interface IResRegionProps extends IResCountryProps {}

export interface IResUserProps extends IBaseUserProps {
  id: number;
  created_at: string;
  country: IResCountryProps;
  region: IResRegionProps;
}

export interface IResReviewProps {
  id: number;
  created_at: string;
  car: IResCarProps;
  provider: IResProviderProps;
  user: IResUserProps;
}
