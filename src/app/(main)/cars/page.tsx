import { Layout } from '@/features/cars';
import { supabase } from '@/utils';
import { redirect } from 'next/navigation';
import React from 'react';

interface CarDetailsPageProps {
  params: any;
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

  let { data: cars } = await supabase
    .from('cars')
    .select('*')
    .filter('country_id', 'eq', searchParams.country)
    .filter('region_id', 'eq', searchParams.region);
  // .filter('make', 'in', searchParams.make);

  return (
    <>
      <Layout cars={cars} />
    </>
  );
};

export default CarListing;
