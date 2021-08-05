import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware, { SagaIterator } from 'redux-saga';
import { all, AllEffect } from 'redux-saga/effects';
import { appReducer } from './app';
import { authReducer } from './auth';
import { authWatcher } from './auth/sagas';

const reduxSagaMonitorOptions = {};
const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

const middlewares = [sagaMiddleware];

export const store = configureStore({
  devTools: true,
  reducer: { app: appReducer, auth: authReducer },
  middleware: [...middlewares],
});

export function* rootSaga(): Generator<AllEffect<SagaIterator<any>>> {
  yield all([authWatcher()]);
}

sagaMiddleware.run(rootSaga);
