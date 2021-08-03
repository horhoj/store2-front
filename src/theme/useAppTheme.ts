import React, { useEffect } from 'react';
import { createTheme, Theme, useMediaQuery } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { appActions, appSelectors } from '../store/app';

export const useAppTheme = (): Theme => {
  const isDarkMode = useAppSelector(appSelectors.getIsDarkMode);
  // Если надо что бы зависело также от системной темы
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(appActions.setIsDarkMode(prefersDarkMode));
  }, [prefersDarkMode]);

  return React.useMemo(
    () =>
      createTheme({
        palette: {
          type: isDarkMode ? 'dark' : 'light',
        },
      }),
    [isDarkMode],
  );
};
