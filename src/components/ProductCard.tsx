/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { unlike, like } from '../api/client/product';
import { getAllProducts, Product } from '../store/product';
import { formatPrice } from '../utils';
import Heart from './icons/Heart';

type ProductProps = {
  data: Product
};

export default function ProductCard({ data }: ProductProps) {
  const router = useRouter();

  const [liked, setLiked] = useState(false);
  const dispatch = useDispatch();
  const ERROR_IMAGE = 'https://flowbite.com/docs/images/products/apple-watch.png';

  const onLikeHandler = async (e: any) => {
    e.stopPropagation();
    if (liked) {
      await unlike(data.id);
    } else {
      await like(data.id);
    }
    dispatch(getAllProducts() as any);
    setLiked(!liked);
  };

  const onCardClickHandler = () => {
    router.push(`/product/${data.id}`);
  };

  return (
    <div onClick={onCardClickHandler} className="w-full bg-white rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 relative border">
      <div>
        <img className="p-8 rounded-t-lg" src="https://flowbite.com/docs/images/products/apple-watch.png" onError={(e) => { (e.target as any).src = ERROR_IMAGE; }} />
      </div>
      <div className="px-5 pb-5">
        <h5 className="text-xl font-semibold tracking-tight mb-4 mtext-gray-900 dark:text-white">{data.name}</h5>
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">{formatPrice(data.price)}</span>
          <div
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add to Cart
          </div>
        </div>
      </div>
      <div onClick={onLikeHandler} className="heart absolute top-4 right-4 bg-stone-300 w-8 h-8 flex items-center justify-center rounded-full">
        <span className="font-light text-md mr-0.5">{data.likes}</span>
        <Heart liked={liked} />
      </div>
    </div>
  );
}
