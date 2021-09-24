import { AxiosRequestConfig } from 'axios';

export const getCategoryFetchDataRequestConfig = (
  id: number,
): AxiosRequestConfig => ({
  url: `/categories/${id}`,
  method: 'get',
});
