import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import { logger } from '../../../utils/logger';
import { getErrorData } from '../../../store/helpers';
import { ProductResponseType, ProductResponseSchema } from '../types';
import { requestExecutor } from '../../../store/sagas';
import { ProductFetchDataWorker, ProductWorkerType } from './types';
import { getProductRequestConfig } from './helpers';
import { productActions } from './index';

export function* productWatcher(): SagaIterator {
  yield takeEvery(ProductWorkerType.fetchData, productFetchDataWorker);
}

export function* productFetchDataWorker(
  action: ProductFetchDataWorker,
): SagaIterator {
  try {
    yield put(productActions.setIsLoading(true));
    yield put(productActions.setRequestError(null));
    const requestConfig: ReturnType<typeof getProductRequestConfig> =
      yield call(getProductRequestConfig, action.payload);
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
