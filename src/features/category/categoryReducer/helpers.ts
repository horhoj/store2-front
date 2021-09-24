import { AxiosRequestConfig } from 'axios';
import { CategoryRequestType } from '../types';

export const getCategoryFetchDataRequestConfig = (
  id: number,
): AxiosRequestConfig => ({
  url: `/categories/${id}`,
  method: 'get',
});

export const getCategoryPatchDataRequestConfig = (
  id: number,
  data: CategoryRequestType,
): AxiosRequestConfig => ({
  url: `/categories/${id}`,
  method: 'put',
  data,
});

export const getNewCategoryRequestConfig = (
  data: CategoryRequestType,
): AxiosRequestConfig => ({
  url: `/categories`,
  method: 'post',
  data,
});
