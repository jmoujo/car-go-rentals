import { IResCountryProps, IResRegionProps } from '@/models/res.model';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

export const supabaseClient = createClientComponentClient();

export const getAllCountriesAsync = async (): Promise<IResCountryProps[]> => {
  try {
    const { data: countries } = await supabaseClient
      .from('countries')
      .select('*');
    return countries as IResCountryProps[];
  } catch (error) {
    console.error(error);
    throw new Error('Countries could not be loaded');
  }
};

export const getRegionsAsync = async (
  countryId?: number
): Promise<IResRegionProps[]> => {
  try {
    if (countryId) {
      const { data: regions } = await supabaseClient
        .from('regions')
        .select('*')
        .eq('countryId', countryId);
      return regions as IResRegionProps[];
    }
    return [];
  } catch (error) {
    console.error(error);
    throw new Error('Regions could not be loaded');
  }
};
