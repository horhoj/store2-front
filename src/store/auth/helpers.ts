import { AxiosRequestConfig } from 'axios';
import { UserCredentials } from '../../types/userData';
import { getDefaultRequestConfig } from '../helpers';

export const getTokenRequestConfig = (
  payload: UserCredentials,
): AxiosRequestConfig => ({
  ...getDefaultRequestConfig(),
  method: 'post',
  url: '/auth/login',
  data: payload,
});

export const getUserDataRequestConfig = (): AxiosRequestConfig => ({
  ...getDefaultRequestConfig(),
  method: 'get',
  url: '/auth/user',
});

export const getTokenRevokeRequestConfig = (): AxiosRequestConfig => ({
  ...getDefaultRequestConfig(),
  method: 'get',
  url: 'auth/logout',
});
