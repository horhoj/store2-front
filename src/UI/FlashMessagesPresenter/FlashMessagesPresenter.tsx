import React, { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useAppSelector } from '../../store/hooks';
import { useAppTranslation } from '../../i18n/useAppTranslation';
import { appSelectors } from '../../store/app';

export const FlashMessagesPresenter: React.FC = () => {
  const lastFlashMessage = useAppSelector(appSelectors.getLastFlashMessage);

  const { enqueueSnackbar } = useSnackbar();
  const t = useAppTranslation();

  useEffect(() => {
    if (lastFlashMessage) {
      const msg = t(lastFlashMessage.msg, { ...lastFlashMessage.data });
      enqueueSnackbar(msg, {
        variant: lastFlashMessage.type,
        anchorOrigin: { vertical: 'bottom', horizontal: 'right' },
      });
    }
  }, [lastFlashMessage]);

  return null;
};
