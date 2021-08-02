import { RootState } from '../types';

export const getIsAuthenticated = (state: RootState): boolean =>
  state.app.isAuthenticated;
