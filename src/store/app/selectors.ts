import { RootState } from '../types';

export const getIsAuthenticated = (state: RootState): boolean =>
  state.app.isAuthenticated;

export const getIsDarkMode = (state: RootState): boolean =>
  state.app.isDarkMode;
