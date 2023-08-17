import {
  IBaseBookingProps,
  IBaseCarProps,
  IBaseProviderProps,
  IBaseUserProps,
} from './app';

export interface IReqCarProps extends IBaseCarProps {
  typeId: number;
}

export interface IReqProviderProps extends IBaseProviderProps {
  countryId: number;
  regionId: number;
}

export interface IReqBookingProps extends IBaseBookingProps {
  carId: number;
}

export interface IReqUserProps extends IBaseUserProps {
  countryId?: number;
  regionId?: number;
}

export interface IReqReviewProps {
  carId: number;
  providerId: number;
  userId: number;
}
