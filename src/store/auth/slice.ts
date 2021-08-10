import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RequestError } from '../types';
import { UserData } from '../../types/userData';
import { AuthState } from './types';

const initialState: AuthState = {
  isLoading: false,
  isAuthenticated: false,
  requestError: null,
  userData: null,
  isLoadingUserData: true,
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
    SetUserData: (state, action: PayloadAction<UserData | null>) => {
      state.userData = action.payload;
    },
    SetIsLoadingUserData: (state, action: PayloadAction<boolean>) => {
      state.isLoadingUserData = action.payload;
    },
  },
});
