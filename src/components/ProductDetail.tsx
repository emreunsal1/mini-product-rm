/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/button-has-type */
import React, { useState, useEffect } from 'react';
import { getProduct, like, unlike } from '../api/client/product';
import { formatPrice } from '../utils';
import Heart from './icons/Heart';

export default function ProductDetail({ id }: { id: string }) {
  const [product, setProduct] = useState({
    name: '', description: '', price: '', likes: [],
  });
  const [liked, setLiked] = useState(false);

  const fetchProduct = async () => {
    if (id) {
      const response = await getProduct(id);
      setProduct(response.data.product);
    }
  };

  const onLikeHandler = async (e: any) => {
    e.stopPropagation();
    if (liked) {
      await unlike(id);
    } else {
      await like(id);
    }
    await fetchProduct();
    setLiked(!liked);
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  return (
    <div>
      <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src="https://www.whitmorerarebooks.com/pictures/medium/2465.jpg" />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
              <p className="leading-relaxed">{product.description}</p>
              <div className="flex items-center">
                <span className="title-font font-medium text-2xl text-gray-900">{ formatPrice(product.price)}</span>
                <button className="flex ml-auto text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded">BUY</button>
                <div onClick={onLikeHandler} className="heart  bg-stone-300 ml-4  w-10 h-10 flex items-center justify-center rounded-full">
                  <span className="font-light text-md mr-0.5">{product.likes.length}</span>
                  <Heart liked={liked} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
