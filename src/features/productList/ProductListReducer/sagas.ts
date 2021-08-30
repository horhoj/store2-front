import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery, select } from 'redux-saga/effects';
import { logger } from '../../../utils/logger';
import { requestExecutor } from '../../../store/sagas';
import { ProductListResponseSchema, ProductListResponseType } from '../types';
import { getErrorData } from '../../../store/helpers';
import { GoToPageWorker, ProductListWorkerType, SortWorker } from './types';
import { getProductListRequestConfig } from './helpers';
import { productListActions, productListSelectors } from './index';

export function* productListWatcher(): SagaIterator {
  yield takeEvery(ProductListWorkerType.FETCH_DATA_WORKER, fetchDataWorker);
  yield takeEvery(ProductListWorkerType.SORT_WORKER, sortWorker);
  yield takeEvery(ProductListWorkerType.GO_TO_PAGE, goToPageWorker);
}

export function* fetchDataWorker(): SagaIterator {
  try {
    yield put(productListActions.setIsLoading(true));
    const requestOptions = yield select(productListSelectors.getRequestOptions);

    const requestConfig: ReturnType<typeof getProductListRequestConfig> =
      yield call(getProductListRequestConfig, requestOptions);
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

export function* sortWorker(action: SortWorker): SagaIterator {
  yield put(productListActions.sort(action.payload));
  yield call(fetchDataWorker);
}

export function* goToPageWorker(action: GoToPageWorker): SagaIterator {
  yield put(productListActions.setRequestOptions({ page: action.payload }));
  yield call(fetchDataWorker);
}
