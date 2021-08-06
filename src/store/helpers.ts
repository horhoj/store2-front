import { AxiosError } from 'axios';
import { RequestError } from './types';

export const getErrorData = (e: Error): RequestError => ({
  responseData: (e as AxiosError).response || null,
  errorMsg: e.message,
});
