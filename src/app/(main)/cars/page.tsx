import { Layout } from '@/features/cars';
import { supabase } from '@/utils';
import { redirect } from 'next/navigation';
import React from 'react';

interface CarDetailsPageProps {
  searchParams: any;
}

const CarListing = async ({ searchParams }: CarDetailsPageProps) => {
  const res = await supabase.auth.getSession();

  if (
    res.data.session &&
    res.data.session.user?.user_metadata.role &&
    res.data.session.user?.user_metadata.role === 'provider'
  ) {
    redirect(`/providers/${res.data.session.user.user_metadata?.id}`);
  }

  const matchFilter: any = {
    country_id: searchParams.country,
    region_id: searchParams.region,
  };

  if (searchParams.make && searchParams.make !== 'all') {
    matchFilter.make = searchParams.make;
  }

  let { data: cars } = await supabase
    .from('cars')
    .select(
      'slug, make, model, type, year, transmission, seatingCapacity, images, status, fuelType, pricePerDay'
    )
    .match(matchFilter);

  return (
    <>
      <Layout cars={cars} />
    </>
  );
};

export default CarListing;
