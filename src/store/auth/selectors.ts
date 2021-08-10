import { RequestError, RootState } from '../types';
import { UserData } from '../../types/userData';

export const getIsAuthenticated = (state: RootState): boolean =>
  state.auth.isAuthenticated;

export const getIsLoading = (state: RootState): boolean => state.auth.isLoading;

export const getRequestError = (state: RootState): RequestError | null =>
  state.auth.requestError;

export const getIsLoadingUserData = (state: RootState): boolean =>
  state.auth.isLoadingUserData;

export const getUserData = (state: RootState): UserData | null =>
  state.auth.userData;
