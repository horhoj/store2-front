import { AxiosError, AxiosRequestConfig } from 'axios';
import { AnyObjectSchema } from 'yup';
import { API_URL, DEFAULT_REQUEST_HEADERS } from '../config/config';
import { RequestError } from './types';

export const getErrorData = (e: Error): RequestError => ({
  responseData: (e as AxiosError)?.response || null,
  errorMsg: e.message,
});

export const addBearerTokenToRequestConfig = (
  token: string,
  requestConfig: AxiosRequestConfig,
): AxiosRequestConfig => ({
  ...requestConfig,
  headers: { ...requestConfig.headers, Authorization: `Bearer ${token}` },
});

export const validateData = async (
  schema: AnyObjectSchema,
  // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
  data: any,
): Promise<void> => {
  await schema.validate(data);
};

export const getDefaultRequestConfig = (): AxiosRequestConfig => ({
  baseURL: API_URL,
  headers: DEFAULT_REQUEST_HEADERS,
});
