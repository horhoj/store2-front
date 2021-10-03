import React, { useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { useAppSelector } from '../../store/hooks';
import { flashMessagesSelectors } from '../../store/flashMessages';
import { useAppTranslation } from '../../i18n/useAppTranslation';

export const FlashMessagesPresenter: React.FC = () => {
  const flashMessageList = useAppSelector(
    flashMessagesSelectors.flashMessageList,
  );
  const { enqueueSnackbar } = useSnackbar();
  const t = useAppTranslation();

  useEffect(() => {
    const length = flashMessageList.length;
    if (length > 0) {
      const lastMessage = flashMessageList[length - 1];
      const msg = t(lastMessage.msg, { ...lastMessage.data });
      enqueueSnackbar(msg, { variant: lastMessage.type });
    }
  }, [flashMessageList]);

  return null;
};
