import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware, { SagaIterator } from 'redux-saga';
import { all, AllEffect } from 'redux-saga/effects';
import { productListReducer } from '../features/productList/ProductListReducer';
import { productListWatcher } from '../features/productList/ProductListReducer/sagas';
import { appReducer } from './app';
import { authReducer } from './auth';
import { authWatcher } from './auth/sagas';

const reduxSagaMonitorOptions = {};
const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);

const middlewares = [sagaMiddleware];

export const store = configureStore({
  devTools: true,
  reducer: {
    app: appReducer,
    auth: authReducer,
    productList: productListReducer,
  },
  middleware: [...middlewares],
});

export function* rootSaga(): Generator<AllEffect<SagaIterator<any>>> {
  yield all([authWatcher(), productListWatcher()]);
}

sagaMiddleware.run(rootSaga);
