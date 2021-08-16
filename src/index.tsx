import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store';
import { App } from './App';
import './i18n';
import { isStrictMode } from './config/config';

const Core: React.FC = () => {
  const appCore = (
    <Provider store={store}>
      <App />
    </Provider>
  );

  return isStrictMode ? (
    <React.StrictMode>{appCore}</React.StrictMode>
  ) : (
    <>{appCore}</>
  );
};

ReactDOM.render(<Core />, document.getElementById('root'));
