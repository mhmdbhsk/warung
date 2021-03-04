import { axiosInstance } from '@config';

export const getListProduct = () => {
  const response = axiosInstance.get(`/api/product`);
  return response;
};

export const getListTopSeller = () => {
  const response = axiosInstance.get(`/api/product?featured=true`);
  return response;
};
