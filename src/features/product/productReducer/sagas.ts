import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import { logger } from '../../../utils/logger';
import { getErrorData } from '../../../store/helpers';
import { ProductResponseType, ProductResponseSchema } from '../types';
import { requestExecutor } from '../../../store/sagas';
import { appActions } from '../../../store/app';
import { getPathByName } from '../../../router';
import {
  ProductFetchDataWorker,
  ProductNewWorker,
  ProductPatchDataWorker,
  ProductWorkerType,
} from './types';
import {
  getNewProductRequestConfig,
  getProductFetchDataRequestConfig,
  getProductPatchDataRequestConfig,
} from './helpers';
import { productActions } from './index';

export function* productWatcher(): SagaIterator {
  yield takeEvery(ProductWorkerType.fetchData, productFetchDataWorker);
  yield takeEvery(ProductWorkerType.patchData, productPatchDataWorker);
  yield takeEvery(ProductWorkerType.new, productNewWorker);
}

export function* productFetchDataWorker(
  action: ProductFetchDataWorker,
): SagaIterator {
  try {
    yield put(productActions.setIsLoading(true));
    yield put(productActions.setRequestError(null));
    const requestConfig: ReturnType<typeof getProductFetchDataRequestConfig> =
      yield call(getProductFetchDataRequestConfig, action.payload);
    const result: ProductResponseType = yield call(
      requestExecutor,
      requestConfig,
      ProductResponseSchema,
    );
    yield put(productActions.setProductResponse(result));
  } catch (e) {
    const errorData: ReturnType<typeof getErrorData> = yield call(
      getErrorData,
      e,
    );
    yield call(logger, 'fetchDataWorker', errorData);
    yield put(productActions.setRequestError(errorData));
  } finally {
    yield put(productActions.setIsLoading(false));
  }
}

export function* productPatchDataWorker(
  action: ProductPatchDataWorker,
): SagaIterator {
  try {
    yield put(productActions.setIsLoading(true));
    yield put(productActions.setRequestError(null));
    const requestConfig: ReturnType<typeof getProductPatchDataRequestConfig> =
      yield call(
        getProductPatchDataRequestConfig,
        action.payload.id,
        action.payload,
      );
    yield call(requestExecutor, requestConfig, null);
    const path: ReturnType<typeof getPathByName> = yield call(
      getPathByName,
      'productList',
    );
    yield put(appActions.redirect(path));
  } catch (e) {
    const errorData: ReturnType<typeof getErrorData> = yield call(
      getErrorData,
      e,
    );
    yield call(logger, 'fetchDataWorker', errorData);
    yield put(productActions.setRequestError(errorData));
  } finally {
    yield put(productActions.setIsLoading(false));
  }
}

export function* productNewWorker(action: ProductNewWorker): SagaIterator {
  try {
    yield put(productActions.setIsLoading(true));
    yield put(productActions.setRequestError(null));
    const requestConfig: ReturnType<typeof getNewProductRequestConfig> =
      yield call(getNewProductRequestConfig, action.payload.id, action.payload);
    yield call(requestExecutor, requestConfig, null);
    const path: ReturnType<typeof getPathByName> = yield call(
      getPathByName,
      'productList',
    );
    yield put(appActions.redirect(path));
  } catch (e) {
    const errorData: ReturnType<typeof getErrorData> = yield call(
      getErrorData,
      e,
    );
    yield call(logger, 'fetchDataWorker', errorData);
    yield put(productActions.setRequestError(errorData));
  } finally {
    yield put(productActions.setIsLoading(false));
  }
}