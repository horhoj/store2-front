import { AxiosRequestConfig } from 'axios';
import { CategoryListRequestOptions } from './types';

export const getCategoryListRequestConfig = (
  requestOptions: CategoryListRequestOptions,
): AxiosRequestConfig => ({
  url: '/categories',
  method: 'get',
  params: requestOptions,
});

export const getDeleteCategoryRequestConfig = (
  id: number,
): AxiosRequestConfig => ({
  url: `/categories/${id}`,
  method: 'delete',
});
