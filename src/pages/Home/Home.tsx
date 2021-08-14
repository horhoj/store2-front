import React from 'react';
import { useTranslation } from 'react-i18next';

export const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <div>{t('test')}</div>
    </>
  );
};
