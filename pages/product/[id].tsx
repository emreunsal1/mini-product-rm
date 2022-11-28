/* eslint-disable react/button-has-type */
import React from 'react';
import { useRouter } from 'next/router';
import ProductDetail from '../../src/components/ProductDetail';
import LogoutButton from '../../src/components/LogoutButton';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <LogoutButton />
      <ProductDetail id={id as string} />
    </>
  );
}
