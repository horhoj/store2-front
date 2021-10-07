import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware, { SagaIterator } from 'redux-saga';
import { all, AllEffect } from 'redux-saga/effects';
import { productListReducer } from '../features/productList/ProductListReducer';
import { productListWatcher } from '../features/productList/ProductListReducer/sagas';
import { productReducer } from '../features/product/productReducer';
import { productWatcher } from '../features/product/productReducer/sagas';
import { categoryListReducer } from '../features/categoryList/categoryListReducer';
import { categoryListWatcher } from '../features/categoryList/categoryListReducer/sagas';
import { categoryReducer } from '../features/category/categoryReducer';
import { categoryWatcher } from '../features/category/categoryReducer/sagas';
import { signUpReducer } from '../features/signUp/signUpReducer';
import { signUpWatcher } from '../features/signUp/signUpReducer/sagas';
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
    product: productReducer,
    categoryList: categoryListReducer,
    category: categoryReducer,
    signUp: signUpReducer,
  },
  middleware: [...middlewares],
});

export function* rootSaga(): Generator<AllEffect<SagaIterator<any>>> {
  yield all([
    authWatcher(),
    productListWatcher(),
    productWatcher(),
    categoryListWatcher(),
    categoryWatcher(),
    signUpWatcher(),
  ]);
}

sagaMiddleware.run(rootSaga);
