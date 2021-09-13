import { AxiosRequestConfig } from 'axios';

export const getProductRequestConfig = (id: number): AxiosRequestConfig => ({
  url: `/products/${id}`,
  method: 'get',
});
