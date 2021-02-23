import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  config.headers = Object.assign(
    {
      Authorization: `Bearer ${token}`,
    },
    config.headers
  );
  return config;
});

axiosInstance.interceptors.response.use(
  function (response: any) {
    return response.data;
  },
  function (error: any) {
    console.log(error);
    return Promise.reject(error);
  }
);
