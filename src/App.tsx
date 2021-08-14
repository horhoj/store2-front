import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Box, MuiThemeProvider, StylesProvider } from '@material-ui/core';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import { RoutesStructure } from './router';
import { useAppTheme } from './theme/useAppTheme';
import { ProgressBar } from './components/ProgressBar';
import { AppHeader } from './components/AppHeader';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { authSelectors, authWorkers } from './store/auth';
import { AppFooter } from './components/AppFooter';

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
            <AppWrap>
              <AppHeader />
              <CenterBlock>
                {isLoadingUserData ? null : <RoutesStructure />}
              </CenterBlock>
              <AppFooter />
            </AppWrap>
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  body {
    min-width: 300px;
  }
`;

const AppWrap = styled(Box)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const CenterBlock = styled(Box)`
  display: flex;
  flex-grow: 1;
`;
