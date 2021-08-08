import { RequestError, RootState } from '../types';

export const getIsAuthenticated = (state: RootState): boolean =>
  state.auth.isAuthenticated;

export const getIsLoading = (state: RootState): boolean => state.auth.isLoading;

export const getRequestError = (state: RootState): RequestError | null =>
  state.auth.requestError;

export const getIsLoadingUserData = (state: RootState): boolean =>
  state.auth.isLoadingUserData;
