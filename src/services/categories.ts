import { axiosInstance } from '@config';

export const getListCategories = () => {
  const response = axiosInstance.get(`/api/categories`);
  return response;
};
