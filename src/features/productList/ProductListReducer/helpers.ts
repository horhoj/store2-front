import { AxiosRequestConfig } from 'axios';
import { ProductListRequestOptions } from './types';

export const getProductListRequestConfig = (
  requestOptions: ProductListRequestOptions,
): AxiosRequestConfig => ({
  url: '/products',
  method: 'get',
  params: requestOptions,
});

export const getDeleteProductRequestConfig = (
  id: number,
): AxiosRequestConfig => ({
  url: `/products/${id}`,
  method: 'delete',
});
