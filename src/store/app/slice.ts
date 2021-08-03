import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from './types';

const APP_SLICE_NAME = 'app';

const initialState: AppState = {
  isAuthenticated: false,
  isDarkMode: false,
};

export const appSlice = createSlice({
  name: APP_SLICE_NAME,
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});
