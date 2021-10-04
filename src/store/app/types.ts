export interface AppState {
  isDarkMode: boolean;
  isOpenMenu: boolean;
  isSmallWidth: boolean;
  redirectUrl: AppRedirectUrl | null;
}

export interface AppRedirectUrl {
  path: string;
}
