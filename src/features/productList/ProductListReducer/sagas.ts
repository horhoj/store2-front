import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery, select } from 'redux-saga/effects';
import { logger } from '../../../utils/logger';
import { requestExecutor } from '../../../store/sagas';
import { ProductListResponseSchema, ProductListResponseType } from '../types';
import { getErrorData } from '../../../store/helpers';
import {
  ProductListChangePerPageWorker,
  ProductListDeleteProductWorker,
  ProductListGoToPageWorker,
  ProductListWorkerType,
  ProductListSearchWorker,
  ProductListSortWorker,
} from './types';
import {
  getDeleteProductRequestConfig,
  getProductListRequestConfig,
} from './helpers';
import { productListActions, productListSelectors } from './index';

export function* productListWatcher(): SagaIterator {
  yield takeEvery(ProductListWorkerType.FETCH_DATA, fetchDataWorker);
  yield takeEvery(ProductListWorkerType.SORT, sortWorker);
  yield takeEvery(ProductListWorkerType.GO_TO_PAGE, goToPageWorker);
  yield takeEvery(ProductListWorkerType.SEARCH, searchWorker);
  yield takeEvery(ProductListWorkerType.CHANGE_PER_PAGE, changePerPageWorker);
  yield takeEvery(ProductListWorkerType.DELETE, deleteProductWorker);
}

export function* fetchDataWorker(): SagaIterator {
  try {
    yield put(productListActions.setIsLoading(true));
    yield put(productListActions.setRequestError(null));
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
    const errorData: ReturnType<typeof getErrorData> = yield call(
      getErrorData,
      e,
    );
    yield call(logger, 'fetchDataWorker', errorData);
    yield put(productListActions.setRequestError(errorData));
  } finally {
    yield put(productListActions.setIsLoading(false));
  }
}

export function* sortWorker(action: ProductListSortWorker): SagaIterator {
  yield put(productListActions.sort(action.payload));
  yield call(fetchDataWorker);
}

export function* goToPageWorker(
  action: ProductListGoToPageWorker,
): SagaIterator {
  yield put(productListActions.setRequestOptions({ page: action.payload }));
  yield call(fetchDataWorker);
}

export function* searchWorker(action: ProductListSearchWorker): SagaIterator {
  yield put(
    productListActions.setRequestOptions({
      search: action.payload,
      page: 1,
      sort_field: 'id',
      sort_asc: 1,
    }),
  );
  yield call(fetchDataWorker);
}

export function* changePerPageWorker(
  action: ProductListChangePerPageWorker,
): SagaIterator {
  yield put(
    productListActions.setRequestOptions({ per_page: action.payload, page: 1 }),
  );
  yield call(fetchDataWorker);
}

export function* deleteProductWorker(
  action: ProductListDeleteProductWorker,
): SagaIterator {
  try {
    yield put(productListActions.setIsLoading(true));
    yield put(productListActions.setRequestError(null));
    const requestConfig: ReturnType<typeof getDeleteProductRequestConfig> =
      yield call(getDeleteProductRequestConfig, action.payload);
    yield call(requestExecutor, requestConfig, null);
    yield call(fetchDataWorker);
  } catch (e) {
    const errorData: ReturnType<typeof getErrorData> = yield call(
      getErrorData,
      e,
    );
    yield call(logger, 'fetchDataWorker', errorData);
    yield put(productListActions.setRequestError(errorData));
  } finally {
    yield put(productListActions.setIsLoading(false));
  }
}
