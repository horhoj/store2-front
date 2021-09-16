import { en } from './en';

export interface AppTranslationHookTType {
  (key: keyof typeof en, ...arg: any[]): string;
}
