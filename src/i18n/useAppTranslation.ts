import { useTranslation } from 'react-i18next';
import { en } from './en';
import { AppTranslationHookTType } from './types';

export const useAppTranslation = (): AppTranslationHookTType => {
  const { t } = useTranslation();

  return (key: keyof typeof en, ...arg: any[]) => t(key, ...arg);
};

export const appTranslationTStub = (): '' => '';
