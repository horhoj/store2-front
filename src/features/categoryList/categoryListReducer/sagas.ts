import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery, select } from 'redux-saga/effects';
import { getErrorData } from '../../../store/helpers';
import { logger } from '../../../utils/logger';
import { CategoryListResponseSchema, CategoryListResponseType } from '../types';
import { requestExecutor } from '../../../store/sagas';
import { FlashMessage } from '../../../store/app/types';
import { appActions } from '../../../store/app';
import {
  CategoryListChangePerPageWorker,
  CategoryListDeleteCategoryWorker,
  CategoryListGoToPageWorker,
  CategoryListSearchWorker,
  CategoryListSortWorker,
  CategoryListWorkerType,
} from './types';
import {
  getCategoryListRequestConfig,
  getDeleteCategoryRequestConfig,
} from './helpers';
import { categoryListActions, categoryListSelectors } from './index';

export function* categoryListWatcher(): SagaIterator {
  yield takeEvery(CategoryListWorkerType.FETCH_DATA, fetchDataWorker);
  yield takeEvery(CategoryListWorkerType.SEARCH, searchWorker);
  yield takeEvery(CategoryListWorkerType.SORT, sortWorker);
  yield takeEvery(CategoryListWorkerType.GO_TO_PAGE, goToPageWorker);
  yield takeEvery(CategoryListWorkerType.CHANGE_PER_PAGE, changePerPageWorker);
  yield takeEvery(CategoryListWorkerType.DELETE, deleteCategoryWorker);
}

export function* fetchDataWorker(): SagaIterator {
  try {
    yield put(categoryListActions.setIsLoading(true));
    yield put(categoryListActions.setRequestError(null));
    const requestOptions = yield select(
      categoryListSelectors.getRequestOptions,
    );
    const requestConfig: ReturnType<typeof getCategoryListRequestConfig> =
      yield call(getCategoryListRequestConfig, requestOptions);
    const result: CategoryListResponseType = yield call(
      requestExecutor,
      requestConfig,
      CategoryListResponseSchema,
    );
    yield call(logger, 'CategoryList fetchDataWorker', result);
    yield put(categoryListActions.setCategoryListResponse(result));
  } catch (e) {
    const errorData: ReturnType<typeof getErrorData> = yield call(
      getErrorData,
      e,
    );
    yield call(logger, 'CategoryList fetchDataWorker', errorData);
    yield put(categoryListActions.setRequestError(errorData));
  } finally {
    yield put(categoryListActions.setIsLoading(false));
  }
}

export function* searchWorker(action: CategoryListSearchWorker): SagaIterator {
  yield put(
    categoryListActions.setRequestOptions({
      search: action.payload,
      page: 1,
      sort_field: 'id',
      sort_asc: 1,
    }),
  );
  yield call(fetchDataWorker);
}

export function* sortWorker(action: CategoryListSortWorker): SagaIterator {
  yield put(categoryListActions.sort(action.payload));
  yield call(fetchDataWorker);
}

export function* goToPageWorker(
  action: CategoryListGoToPageWorker,
): SagaIterator {
  yield put(categoryListActions.setRequestOptions({ page: action.payload }));
  yield call(fetchDataWorker);
}

export function* changePerPageWorker(
  action: CategoryListChangePerPageWorker,
): SagaIterator {
  yield put(
    categoryListActions.setRequestOptions({
      per_page: action.payload,
      page: 1,
    }),
  );
  yield call(fetchDataWorker);
}

export function* deleteCategoryWorker(
  action: CategoryListDeleteCategoryWorker,
): SagaIterator {
  try {
    yield put(categoryListActions.setIsLoading(true));
    yield put(categoryListActions.setRequestError(null));
    const requestConfig: ReturnType<typeof getDeleteCategoryRequestConfig> =
      yield call(getDeleteCategoryRequestConfig, action.payload);
    yield call(requestExecutor, requestConfig, null);
    yield call(fetchDataWorker);

    const categoryListResponse: ReturnType<
      typeof categoryListSelectors.getCategoryListResponse
    > = yield select(categoryListSelectors.getCategoryListResponse);
    if (categoryListResponse) {
      const isEmpty = categoryListResponse.data.length === 0;
      const isNotLastPage =
        categoryListResponse.current_page > categoryListResponse.last_page;
      if (isEmpty && isNotLastPage) {
        yield put(
          categoryListActions.setRequestOptions({
            page: categoryListResponse.last_page,
          }),
        );
        yield call(fetchDataWorker);
      }
    }

    const msg: FlashMessage = {
      msg: 'features__category-list-form__msg-successfully-deleted-category',
      type: 'success',
    };
    yield put(appActions.addFlashMessage(msg));
  } catch (e) {
    const errorData: ReturnType<typeof getErrorData> = yield call(
      getErrorData,
      e,
    );
    yield call(logger, 'CategoryList fetchDataWorker', errorData);
    yield put(categoryListActions.setRequestError(errorData));
  } finally {
    yield put(categoryListActions.setIsLoading(false));
  }
}
