import { SelectItem } from '@/models/app';
import {
  SiMazda,
  SiVolvo,
  SiVolkswagen,
  SiSubaru,
  SiKia,
  SiHonda,
  SiFord,
  SiChevrolet,
  SiNissan,
  SiToyota,
  SiBmw,
  SiMercedes,
  SiAudi,
  SiHyundai,
} from 'react-icons/si';

export const carMakes: SelectItem[] = [
  {
    label: 'Toyota',
    value: 'toyota',
    icon: SiToyota,
  },
  {
    label: 'Honda',
    value: 'honda',
    icon: SiHonda,
  },
  {
    label: 'Ford',
    value: 'ford',
    icon: SiFord,
  },
  {
    label: 'Chevrolet',
    value: 'chevrolet',
    icon: SiChevrolet,
  },
  {
    label: 'Nissan',
    value: 'nissan',
    icon: SiNissan,
  },
  {
    label: 'BMW',
    value: 'bmw',
    icon: SiBmw,
  },
  {
    label: 'Mercedes Benz',
    value: 'mercedes',
    icon: SiMercedes,
  },
  {
    label: 'Audi',
    value: 'audi',
    icon: SiAudi,
  },
  {
    label: 'Hyundai',
    value: 'hyundai',
    icon: SiHyundai,
  },
  {
    label: 'Kia',
    value: 'kia',
    icon: SiKia,
  },
  {
    label: 'Lexus',
    value: 'lexus',
    icon: '',
  },
  {
    label: 'Subaru',
    value: 'subaru',
    icon: SiSubaru,
  },
  {
    label: 'Volkswagen',
    value: 'volkswagen',
    icon: SiVolkswagen,
  },
  {
    label: 'Volvo',
    value: 'volvo',
    icon: SiVolvo,
  },
  {
    label: 'Mazda',
    value: 'mazda',
    icon: SiMazda,
  },
];
