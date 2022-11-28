import { LikeTypes } from '../../../pages/api/product/[id]';
import api from './index';

export const getProducts = () => api.get('/product');

export const getProduct = (productId:string) => api.get(`/product/${productId}`);

export const like = (productId:string) => api.patch(`/product/${productId}`, {
  type: LikeTypes.LIKE,
});

export const unlike = (productId:string) => api.patch(`/product/${productId}`, {
  type: LikeTypes.UNLIKE,
});
