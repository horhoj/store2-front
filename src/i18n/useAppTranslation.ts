import { useTranslation } from 'react-i18next';
import { en } from './en';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const useAppTranslation = () => {
  const { t } = useTranslation();

  return (key: keyof typeof en, ...arg: any[]) => t(key, ...arg);
};
