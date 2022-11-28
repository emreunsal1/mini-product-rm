import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, Product } from '../src/store/product';
import ProductCard from '../src/components/ProductCard';
import LogoutButton from '../src/components/LogoutButton';

export default function Home() {
  const dispatch = useDispatch();
  const products = useSelector((state) => (state as any).product.products);

  useEffect(() => {
    dispatch(getAllProducts() as any);
  }, [dispatch]);

  return (
    <>
      <LogoutButton />
      <div className="w-5/6 mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 gap-3">
        {
          products.map((product:Product) => <ProductCard data={product} />)
        }
      </div>
    </>
  );
}
