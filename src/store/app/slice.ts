import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from './types';

const APP_SLICE_NAME = 'app';

const initialState: AppState = {
  isDarkMode: false,
};

export const appSlice = createSlice({
  name: APP_SLICE_NAME,
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    setIsDarkMode: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
    },
  },
});
