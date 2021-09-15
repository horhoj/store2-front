import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {
  Box,
  MuiThemeProvider,
  Paper,
  StylesProvider,
  Theme,
} from '@material-ui/core';
import styled, { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { RoutesStructure } from './router';
import { useAppTheme } from './theme/useAppTheme';
import { ProgressBar } from './UI/ProgressBar';
import { AppHeader } from './components/AppHeader';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { authSelectors, authWorkers } from './store/auth';
import { AppFooter } from './components/AppFooter';
import { GlobalStyle } from './theme/GlobalStyle';
import { NavBlock } from './components/NavBlock/NavBlock';
import { SmallWidthChecker } from './components/SmallWidthChecker';

export const App: React.FC = () => {
  const theme = useAppTheme();
  const dispatch = useAppDispatch();
  const isLoadingUserData = useAppSelector(authSelectors.getIsLoadingUserData);
  const isAuthenticated = useAppSelector(authSelectors.getIsAuthenticated);

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
            <SmallWidthChecker />
            <BrowserRouter>
              <AppWrap>
                <AppHeader />
                <CenterBlock>
                  {isAuthenticated ? <NavBlock /> : null}
                  <Main>
                    <StyledPaper square={true}>
                      {isLoadingUserData ? null : <RoutesStructure />}
                    </StyledPaper>
                  </Main>
                </CenterBlock>
                <AppFooter />
              </AppWrap>
            </BrowserRouter>
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </>
  );
};

const AppWrap = styled(Box)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
const CenterBlock = styled(Box)`
  display: flex;
  width: 100%;
  flex-grow: 1;
`;

const Main = styled.main`
  width: 100%;
  display: flex;
  flex-grow: 1;
  padding: ${({ theme }) => (theme as Theme).spacing(1, 0)};
`;

const StyledPaper = styled(Paper)`
  padding: ${({ theme }) => (theme as Theme).spacing(1)}px;
  width: 100%;
`;
