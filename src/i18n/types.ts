import { en } from './en';

export interface AppTranslationHookTType {
  (key: TranslationMessageKeys, ...arg: any[]): string;
}

export type TranslationMessageKeys = keyof typeof en;
