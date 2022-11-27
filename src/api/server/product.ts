import api from './index';

interface GetProductsParams {
  token:string
}

interface GetProductParam extends GetProductsParams {
  productId:string
}

const getProducts = ({ token }:GetProductsParams) => api.get('/product/all', {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const getProduct = ({ token, productId }:GetProductParam) => api.get(`/product/get/${productId}`, {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const like = ({ token }:GetProductsParams) => api.post('/product/like', {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

const unlike = ({ token }:GetProductsParams) => api.post('/product/unlike', {
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export default {
  getProduct,
  getProducts,
  like,
  unlike,
};
