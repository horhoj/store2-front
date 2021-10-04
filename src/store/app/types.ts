import { VariantType } from 'notistack';
import { en } from '../../i18n/en';

export interface AppState {
  isDarkMode: boolean;
  isOpenMenu: boolean;
  isSmallWidth: boolean;
  redirectUrl: AppRedirectUrl | null;
  flashMessage: FlashMessage | null;
}

export interface AppRedirectUrl {
  path: string;
}

export interface FlashMessage {
  msg: keyof typeof en;
  type: VariantType;
  data?: FlashMessageData;
}

interface FlashMessageData {
  [keys: string]: string | number;
}
