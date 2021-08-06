import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RequestError } from '../types';
import { AuthState } from './types';

const initialState: AuthState = {
  isLoading: false,
  isAuthenticated: false,
  requestError: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    SetRequestError: (state, action: PayloadAction<RequestError | null>) => {
      state.requestError = action.payload;
    },
  },
});
