import { DateInput, DateValue } from '@mantine/dates';
import { ReactNode } from 'react';

interface Props {
  label?: ReactNode;
  value?: Date;
  onChange?: (value: DateValue) => void;
}
export function SelectDate({ label, value, onChange }: Props) {
  return (
    <DateInput
      value={value}
      onChange={onChange}
      label={label}
      placeholder="Select Date"
      width="100%"
    />
  );
}
