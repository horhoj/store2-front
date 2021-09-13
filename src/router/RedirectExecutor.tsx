import React, { useEffect } from 'react';
import { useHistory } from 'react-router';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { appActions, appSelectors } from '../store/app';
import { logger } from '../utils/logger';

export const RedirectExecutor: React.FC = () => {
  const redirectUrl = useAppSelector(appSelectors.getRedirectUrl);
  const history = useHistory();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (redirectUrl) {
      logger('RedirectExecutor', 'redirectTo:', redirectUrl);
      history.push(redirectUrl);
      dispatch(appActions.redirect(null));
    }
  }, [redirectUrl]);

  return null;
};
