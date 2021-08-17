import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from './types';

const APP_SLICE_NAME = 'app';

const initialState: AppState = {
  isDarkMode: false,
  isOpenMenu: true,
  isSmallWidth: false,
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
    setIsOpenMenu: (state, action: PayloadAction<boolean>) => {
      state.isOpenMenu = action.payload;
    },
    toggleMenuMode: (state) => {
      state.isOpenMenu = !state.isOpenMenu;
    },
    setIsSmallWidth: (state, action: PayloadAction<boolean>) => {
      state.isSmallWidth = action.payload;
    },
  },
});
