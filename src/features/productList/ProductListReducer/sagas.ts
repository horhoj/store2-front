import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import { AxiosRequestConfig } from 'axios';
import { logger } from '../../../utils/logger';
import { requestExecutor } from '../../../store/sagas';
import { ProductListResponseSchema, ProductListResponseType } from '../types';
import { getErrorData } from '../../../store/helpers';
import { FetchDataWorker, ProductListWorkerType } from './types';
import { productListActions } from './index';

export function* productListWatcher(): SagaIterator {
  yield takeEvery(ProductListWorkerType.FETCH_DATA_WORKER, fetchDataWorker);
}

export function* fetchDataWorker(action: FetchDataWorker): SagaIterator {
  try {
    yield put(productListActions.setIsLoading(true));
    const requestConfig: AxiosRequestConfig = {
      url: '/products',
      method: 'get',
    };
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
