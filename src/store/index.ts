import { configureStore } from '@reduxjs/toolkit';
import { createWrapper } from 'next-redux-wrapper';
import productSlice from './product';

const wrapper = createWrapper(() => configureStore({
  reducer: {
    product: productSlice.reducer,
  },
}));

export default wrapper;
