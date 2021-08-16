import { RootState } from '../types';

export const getIsDarkMode = (state: RootState): boolean =>
  state.app.isDarkMode;

export const getIsOpenMenu = (state: RootState): boolean =>
  state.app.isOpenMenu;
