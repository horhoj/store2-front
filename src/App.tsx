import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { MuiThemeProvider, StylesProvider } from '@material-ui/core';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { RoutesStructure } from './router';
import { useAppTheme } from './theme/useAppTheme';
import { ThemeModeSwitch } from './components/ThemeModeSwitch';

const GlobalStyle = createGlobalStyle``;

export const App: React.FC = () => {
  const theme = useAppTheme();

  return (
    <>
      <StylesProvider injectFirst>
        <MuiThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <ThemeModeSwitch />
            <CssBaseline />
            <GlobalStyle />
            <RoutesStructure />
          </ThemeProvider>
        </MuiThemeProvider>
      </StylesProvider>
    </>
  );
};
