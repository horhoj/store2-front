import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, StylesProvider } from '@material-ui/core';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { RoutesStructure } from './router';
import { useAppTheme } from './theme/useAppTheme';
import { ProgressBar } from './components/ProgressBar';
import { AppHeader } from './components/AppHeader';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { authSelectors, authWorkers } from './store/auth';

export const App: React.FC = () => {
  const theme = useAppTheme();
  const dispatch = useAppDispatch();
  const isLoadingUserData = useAppSelector(authSelectors.getIsLoadingUserData);
  useEffect(() => {
    dispatch(authWorkers.authGetUserData());
  }, []);
  return (
    <>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyle />
            <ProgressBar />
            <AppHeader />
            {isLoadingUserData ? null : <RoutesStructure />}
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </>
  );
};

const GlobalStyle = createGlobalStyle``;
