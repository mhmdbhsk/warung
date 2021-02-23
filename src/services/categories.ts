import { axiosInstance } from '@config';

export const getListCategories = () => {
  const response = axiosInstance.get(`/constants/categories.json`);
  return response;
};
