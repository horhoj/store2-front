import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AuthState } from './types';

const initialState: AuthState = {
  isLoading: false,
  isAuthenticated: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});
