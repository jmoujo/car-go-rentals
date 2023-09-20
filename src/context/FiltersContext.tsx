import { today } from '@/const';
import { IFiltersContext, IFiltersState } from '@/models/app';
import { ReactNode, createContext, useContext, useState } from 'react';

export const FiltersContext = createContext<IFiltersContext>(undefined as any);

const initialState: IFiltersState = {
  type: 'any',
  minPrice: 0,
  maxPrice: 100000,
  minYear: 1990,
  maxYear: today.getFullYear(),
  transmission: 'any',
  fuelType: 'any',
};

export const FiltersContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [state, setState] = useState<IFiltersState>(initialState);

  const updateFilterProperty = (
    key: keyof IFiltersState,
    value: IFiltersState[keyof IFiltersState]
  ) => {
    setState((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <FiltersContext.Provider
      value={{
        state,
        updateFilterProperty,
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
};

export const useFiltersContext = () => {
  const context = useContext(FiltersContext);
  return context;
};
