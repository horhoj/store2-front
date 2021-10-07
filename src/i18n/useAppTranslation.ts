import { useTranslation } from 'react-i18next';
import { AppTranslationHookTType, TranslationMessageKeys } from './types';

export const useAppTranslation = (): AppTranslationHookTType => {
  const { t } = useTranslation();

  return (key: TranslationMessageKeys, ...arg: any[]) => t(key, ...arg);
};

export const appTranslationTStub = (): '' => '';
