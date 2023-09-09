import { getRegionsAsync } from '@/services/supabase.service';
import { useQuery } from '@tanstack/react-query';

export function useRegions(countryId?: number) {
  if (countryId) {
  }
  const {
    isLoading,
    data: regions,
    error,
  } = useQuery(['regions', countryId], () => getRegionsAsync(countryId), {
    enabled: countryId != null,
  });

  return {
    isLoading,
    regions,
    error,
  };
}
