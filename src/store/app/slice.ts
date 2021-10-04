import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppState } from './types';

const APP_SLICE_NAME = 'app';

const initialState: AppState = {
  isDarkMode: false,
  isOpenMenu: true,
  isSmallWidth: false,
  redirectUrl: null,
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
    // в компоненте RedirectExecutor мы отслеживаем изменение
    // redirectUrl и соответственно делаем redirect
    // это нужно что бы не привязывать компоненты к роутеру
    // и была возможность делать переадресацию из саг
    // без доступа напрямую к HISTORY API
    redirect: (state, action: PayloadAction<string>) => {
      state.redirectUrl = {
        path: action.payload,
      };
    },
  },
});
