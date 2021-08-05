import { RootState } from '../types';

export const getIsAuthenticated = (state: RootState): boolean =>
  state.auth.isAuthenticated;

export const getIsLoading = (state: RootState): boolean => state.auth.isLoading;
