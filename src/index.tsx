import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { SnackbarProvider } from 'notistack';
import { store } from './store';
import { App } from './App';
import './i18n';
import { isStrictMode, SNACKBAR_PROVIDER_MAX_SNACK } from './config/config';

const Core: React.FC = () => {
  const appCore = (
    <Provider store={store}>
      <SnackbarProvider maxSnack={SNACKBAR_PROVIDER_MAX_SNACK}>
        <App />
      </SnackbarProvider>
    </Provider>
  );

  return isStrictMode ? (
    <React.StrictMode>{appCore}</React.StrictMode>
  ) : (
    <>{appCore}</>
  );
};

ReactDOM.render(<Core />, document.getElementById('root'));
