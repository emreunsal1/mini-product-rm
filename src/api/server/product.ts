import api from './index';

interface GetProductsParams {
  token:string
}

interface GetProductParam extends GetProductsParams {
  productId:string
}

interface LikeProductParams extends GetProductsParams {
  productId: string
}

export const getProducts = ({ token }:GetProductsParams) => api.get('/product/all', {
  headers: {
    'access-token': token,
  },
});

export const getProduct = ({ token, productId }:GetProductParam) => api.get(`/product/get/${productId}`, {
  headers: {
    'access-token': token,
  },
});

export const like = ({ token, productId }: LikeProductParams) => api.post('/product/like', {
  productId,
}, {
  headers: {
    'access-token': token,
  },
});

export const unlike = ({ token, productId }: LikeProductParams) => api.post('/product/unlike', {
  productId,
}, {
  headers: {
    'access-token': token,
  },
});
