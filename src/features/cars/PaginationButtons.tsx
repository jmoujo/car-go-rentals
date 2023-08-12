import { MantineTheme, Pagination } from '@mantine/core';
import React from 'react';
const getStyles = (theme: MantineTheme) => ({
  control: {
    '&[data-active]': {
      backgroundImage: theme.fn.gradient({ from: 'red', to: 'yellow' }),
      border: 0,
    },
  },
});

interface Props {
  value: number;
  total: number;
  handlePageChange: (value: number) => void;
}
export const PaginationButtons = ({
  value,
  total,
  handlePageChange,
}: Props) => {
  return (
    <Pagination
      size="sm"
      value={value}
      onChange={handlePageChange}
      total={total}
      w="fit-content"
      ml="auto"
      mb={8}
      styles={getStyles}
    />
  );
};
