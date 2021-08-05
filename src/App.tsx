import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, StylesProvider } from '@material-ui/core';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { RoutesStructure } from './router';
import { useAppTheme } from './theme/useAppTheme';
import { ProgressBar } from './components/ProgressBar';
import { AppHeader } from './components/AppHeader';

export const App: React.FC = () => {
  const theme = useAppTheme();

  return (
    <>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <GlobalStyle />
            <ProgressBar />
            <AppHeader />
            <RoutesStructure />
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </>
  );
};

const GlobalStyle = createGlobalStyle``;
