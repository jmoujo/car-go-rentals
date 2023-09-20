import { IResCountryProps, IResRegionProps } from './models/res.model';

export const getDefaultSelectedCountry = (
  countries: IResCountryProps[],
  countryId: string | null
): IResCountryProps => {
  if (countryId) {
    return countries.filter(
      (country) => country.id.toString() === countryId
    )[0];
  }
  return countries[0];
};

export const getDefaultSelectedRegion = (
  regions: IResRegionProps[],
  regionId: string | null
): IResCountryProps => {
  if (regionId) {
    return regions.filter((region) => region.id.toString() === regionId)[0];
  }
  return regions[0];
};
