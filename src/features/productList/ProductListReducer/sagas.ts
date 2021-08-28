import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery, select } from 'redux-saga/effects';
import { logger } from '../../../utils/logger';
import { requestExecutor } from '../../../store/sagas';
import { ProductListResponseSchema, ProductListResponseType } from '../types';
import { getErrorData } from '../../../store/helpers';
import {
  FetchDataWorker,
  ProductListRequestOptions,
  ProductListWorkerType,
} from './types';
import { getProductListRequestConfig } from './helpers';
import { productListActions, productListSelectors } from './index';

export function* productListWatcher(): SagaIterator {
  yield takeEvery(ProductListWorkerType.FETCH_DATA_WORKER, fetchDataWorker);
}

export function* fetchDataWorker(action: FetchDataWorker): SagaIterator {
  try {
    yield put(productListActions.setIsLoading(true));
    const requestOptions = yield select(productListSelectors.getRequestOptions);
    const newRequestOptions: ProductListRequestOptions = {
      ...requestOptions,
      ...action.payload,
    };
    yield put(productListActions.setRequestOptions(newRequestOptions));
    const requestConfig: ReturnType<typeof getProductListRequestConfig> =
      yield call(getProductListRequestConfig, newRequestOptions);
    const result: ProductListResponseType = yield call(
      requestExecutor,
      requestConfig,
      ProductListResponseSchema,
    );
    yield call(logger, 'fetchDataWorker', result);
    yield put(productListActions.setProductListResponse(result));
  } catch (e) {
    yield call(logger, 'fetchDataWorker', getErrorData(e));
  } finally {
    yield put(productListActions.setIsLoading(false));
  }
}
