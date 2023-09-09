import { IAppContext, IAppState, SelectItem } from '@/models/app';
import { IResCountryProps, IResRegionProps } from '@/models/res.model';
import { DateValue } from '@mantine/dates';
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from 'react';

export const AppContext = createContext<IAppContext>(undefined as any);

const initialState: IAppState = {
  countries: [],
  regions: [],
  selectedCountry: undefined,
  selectedRegion: undefined,
  carMake: undefined,
  pickupDate: undefined,
  returnDate: undefined,
};

interface Props {
  children: ReactNode;
}
export const AppContextProvider = ({ children }: Props) => {
  const [state, setState] = useState<IAppState>(initialState);

  // memoizing to prevent rerendering in useEffect and also improve performance
  const addCountries = useCallback((countries: IResCountryProps[]) => {
    setState((prevState) => ({
      ...prevState,
      countries,
    }));
  }, []);

  const addRegions = useCallback((regions: IResRegionProps[]) => {
    setState((prevState) => ({
      ...prevState,
      regions,
    }));
  }, []);

  const setCountry = useCallback((selectedCountry: IResCountryProps) => {
    setState((prevState) => ({
      ...prevState,
      selectedCountry,
    }));
  }, []);

  const setRegion = useCallback((selectedRegion: IResRegionProps) => {
    setState((prevState) => ({
      ...prevState,
      selectedRegion,
    }));
  }, []);

  const setMake = useCallback((selectedMake: SelectItem) => {
    setState((prevState) => ({
      ...prevState,
      carMake: selectedMake,
    }));
  }, []);
  const setPickupDate = useCallback((pickupDate: DateValue) => {
    setState((prevState) => ({
      ...prevState,
      pickupDate,
    }));
  }, []);
  const setReturnDate = useCallback((returnDate: DateValue) => {
    setState((prevState) => ({
      ...prevState,
      returnDate,
    }));
  }, []);

  return (
    <AppContext.Provider
      value={{
        state,
        addCountries,
        addRegions,
        setCountry,
        setRegion,
        setMake,
        setPickupDate,
        setReturnDate,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  return context;
};
