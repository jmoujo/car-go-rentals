import { CarDetails } from '@/features/cars/details/CarDetails';
import { supabase } from '@/utils';
import { redirect } from 'next/navigation';
import React from 'react';

interface CarDetailsPageProps {
  params: any;
  searchParams: any;
}

const CarDetailsPage = async ({
  searchParams,
  params,
}: CarDetailsPageProps) => {
  const res = await supabase.auth.getSession();

  if (!res.data.session) {
    redirect('/login');
  }

  if (
    res.data.session &&
    res.data.session.user?.user_metadata.role &&
    res.data.session.user?.user_metadata.role === 'provider'
  ) {
    redirect(`/providers/${res.data.session.user.user_metadata?.id}`);
  }

  if (!params.slug) {
    redirect('/');
  }

  const { data: car, error } = await supabase
    .from('cars')
    .select()
    .eq('slug', params.slug)
    .single();

  const [userRes, providerRes, reviewsRes] = await Promise.all([
    supabase
      .from('users')
      .select('id, firstName, lastName, city, street, regions(displayName)')
      .match({ id: res.data.session.user.id })
      .single(),
    supabase
      .from('providers')
      .select('companyName, avatar, email, phone')
      .match({ id: car.provider_id })
      .single(),
    supabase
      .from('reviews')
      .select('*, users(firstName, lastName)')
      .match({ car_id: car.id }),
  ]);

  return (
    <>
      <CarDetails
        car={car}
        user={userRes.data as any}
        provider={providerRes.data}
        reviews={reviewsRes.data || []}
      />
    </>
  );
};

export default CarDetailsPage;
