/* eslint-disable react/button-has-type */
import React from 'react';
import { useRouter } from 'next/router';
import ProductDetail from '../../src/components/ProductDetail';

export default function ProductPage() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <ProductDetail id={id as string} />
  );
}
