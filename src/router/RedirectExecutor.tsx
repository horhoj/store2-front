import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useAppSelector } from '../store/hooks';
import { appSelectors } from '../store/app';
import { logger } from '../utils/logger';

export const RedirectExecutor: React.FC = () => {
  const redirectUrl = useAppSelector(appSelectors.getRedirectUrl);
  const history = useHistory();

  useEffect(() => {
    if (redirectUrl) {
      logger('RedirectExecutor', 'redirectTo:', redirectUrl);
      history.push(redirectUrl.path);
    }
  }, [redirectUrl]);

  return null;
};
