import { AxiosRequestConfig } from 'axios';
import { ProductRequestType } from '../types';

export const getProductFetchDataRequestConfig = (
  id: number,
): AxiosRequestConfig => ({
  url: `/products/${id}`,
  method: 'get',
});

export const getProductPatchDataRequestConfig = (
  id: number,
  data: ProductRequestType,
): AxiosRequestConfig => ({
  url: `/products/${id}`,
  method: 'put',
  data,
});

export const getNewProductRequestConfig = (
  id: number,
  data: ProductRequestType,
): AxiosRequestConfig => ({
  url: `/products`,
  method: 'post',
  data,
});
