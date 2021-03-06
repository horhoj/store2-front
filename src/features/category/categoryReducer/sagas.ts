import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import { logger } from '../../../utils/logger';
import { getErrorData } from '../../../store/helpers';
import { CategoryResponseSchema, CategoryResponseType } from '../types';
import { requestExecutor } from '../../../store/sagas';
import { productActions } from '../../product/productReducer';
import { getPathByName } from '../../../router';
import { appActions } from '../../../store/app';
import { FlashMessage } from '../../../store/app/types';
import {
  CategoryFetchDataWorker,
  CategoryNewWorker,
  CategoryPatchDataWorker,
  CategoryWorkerType,
} from './types';
import {
  getCategoryFetchDataRequestConfig,
  getCategoryPatchDataRequestConfig,
  getNewCategoryRequestConfig,
} from './helpers';
import { categoryActions } from './index';

export function* categoryWatcher(): SagaIterator {
  yield takeEvery(CategoryWorkerType.FETCH_DATA, categoryFetchDataWorker);
  yield takeEvery(CategoryWorkerType.PATCH_DATA, categoryPatchDataWorker);
  yield takeEvery(CategoryWorkerType.NEW, categoryNewWorker);
}

export function* categoryFetchDataWorker(
  action: CategoryFetchDataWorker,
): SagaIterator {
  try {
    yield put(categoryActions.setIsLoading(true));
    yield put(categoryActions.setRequestError(null));
    const requestConfig: ReturnType<typeof getCategoryFetchDataRequestConfig> =
      yield call(getCategoryFetchDataRequestConfig, action.payload);

    const result: CategoryResponseType = yield call(
      requestExecutor,
      requestConfig,
      CategoryResponseSchema,
    );

    yield put(categoryActions.setCategoryResponse(result));
  } catch (e) {
    const errorData: ReturnType<typeof getErrorData> = yield call(
      getErrorData,
      e,
    );
    yield call(logger, 'categoryFetchDataWorker', errorData);
    yield put(categoryActions.setRequestError(errorData));
  } finally {
    yield put(categoryActions.setIsLoading(false));
  }
}

export function* categoryPatchDataWorker(
  action: CategoryPatchDataWorker,
): SagaIterator {
  try {
    yield put(categoryActions.setIsLoading(true));
    yield put(categoryActions.setRequestError(null));
    const requestConfig: ReturnType<typeof getCategoryPatchDataRequestConfig> =
      yield call(
        getCategoryPatchDataRequestConfig,
        action.payload.id,
        action.payload,
      );
    yield call(requestExecutor, requestConfig, null);
    const path: ReturnType<typeof getPathByName> = yield call(
      getPathByName,
      'categoryList',
    );
    yield put(appActions.redirect(path));
    const msg: FlashMessage = {
      msg: 'features__category-form__msg-category-update',
      type: 'success',
      data: {
        id: action.payload.id,
      },
    };
    yield put(appActions.addFlashMessage(msg));
  } catch (e) {
    const errorData: ReturnType<typeof getErrorData> = yield call(
      getErrorData,
      e,
    );
    yield call(logger, 'fetchDataWorker', errorData);
    yield put(productActions.setRequestError(errorData));
  } finally {
    yield put(categoryActions.setIsLoading(false));
  }
}

export function* categoryNewWorker(action: CategoryNewWorker): SagaIterator {
  try {
    yield put(categoryActions.setIsLoading(true));
    yield put(categoryActions.setRequestError(null));
    const requestConfig: ReturnType<typeof getNewCategoryRequestConfig> =
      yield call(getNewCategoryRequestConfig, action.payload);
    yield call(requestExecutor, requestConfig, null);
    const path: ReturnType<typeof getPathByName> = yield call(
      getPathByName,
      'categoryList',
    );
    yield put(appActions.redirect(path));
    const msg: FlashMessage = {
      msg: 'features__category-form__msg-category-add',
      type: 'success',
    };
    yield put(appActions.addFlashMessage(msg));
  } catch (e) {
    const errorData: ReturnType<typeof getErrorData> = yield call(
      getErrorData,
      e,
    );
    yield call(logger, 'fetchDataWorker', errorData);
    yield put(productActions.setRequestError(errorData));
  } finally {
    yield put(categoryActions.setIsLoading(false));
  }
}
