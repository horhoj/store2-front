import { AxiosRequestConfig } from 'axios';
import { API_URL, DEFAULT_REQUEST_HEADERS } from '../../config/config';
import { UserCredentials } from '../../types/userData';

export const getTokenRequestConfig = (
  payload: UserCredentials,
): AxiosRequestConfig => ({
  baseURL: API_URL,
  headers: DEFAULT_REQUEST_HEADERS,
  method: 'post',
  url: '/auth/login',
  data: payload,
});

export const getUserDataRequestConfig = (): AxiosRequestConfig => ({
  baseURL: API_URL,
  headers: DEFAULT_REQUEST_HEADERS,
  method: 'get',
  url: '/auth/user',
});

export const getTokenRevokeRequestConfig = (): AxiosRequestConfig => ({
  baseURL: API_URL,
  headers: DEFAULT_REQUEST_HEADERS,
  method: 'get',
  url: 'auth/logout',
});
