import { RootState } from '../types';

export const getIsDarkMode = (state: RootState): boolean =>
  state.app.isDarkMode;

export const getIsOpenMenu = (state: RootState): boolean =>
  state.app.isOpenMenu;

export const getIsSmallWidth = (state: RootState): boolean =>
  state.app.isSmallWidth;

export const getRedirectUrl = (state: RootState): string | null =>
  state.app.redirectUrl;
