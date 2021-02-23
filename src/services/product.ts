import { axiosInstance } from '@config';

export const getListProduct = () => {
  const response = axiosInstance.get(`/constants/product.json`);
  return response;
};

export const getListTopSeller = () => {
  const response = axiosInstance.get(`/constants/product-featured.json`);
  return response;
};
