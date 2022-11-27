import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getProducts as getAll } from '../api/client/product';

export interface Like {
  id: number;
  email: string;
  password: string;
  name: string;
  token: string;
  timeStamp: number;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  timeStamp: Date;
  likes: number;
}

type ProductStore = {
  products: Product[]
};

type ProductStoreReducers = {};

export const getAllProducts = createAsyncThunk('product/getAllProducts', async () => {
  const response = await getAll();
  return response.data;
});

const productSlice = createSlice<ProductStore, ProductStoreReducers, 'product'>({
  name: 'product',
  initialState: {
    products: [],
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.products = action.payload;
    });
  },
});

export default productSlice;
