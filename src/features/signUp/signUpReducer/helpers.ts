import { AxiosRequestConfig } from 'axios';
import { SignUpData } from '../types';

export const getSignUpAddNewUserRequestConfig = (
  signUpData: SignUpData,
): AxiosRequestConfig => ({
  url: '/auth/register',
  method: 'post',
  data: signUpData,
});
