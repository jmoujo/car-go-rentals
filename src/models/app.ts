import { ReactNode } from 'react';
import { IconType } from 'react-icons';

export type Region = {
  label: string;
  value: string;
  latitude: number;
  longitude: number;
};

export type SelectItem = {
  label: string;
  value: string;
  icon: ReactNode | IconType;
};
