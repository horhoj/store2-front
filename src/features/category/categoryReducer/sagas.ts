import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import { logger } from '../../../utils/logger';
import { getErrorData } from '../../../store/helpers';
import { CategoryResponseSchema, CategoryResponseType } from '../types';
import { requestExecutor } from '../../../store/sagas';
import { CategoryFetchDataWorker, CategoryWorkerType } from './types';
import { getCategoryFetchDataRequestConfig } from './helpers';
import { categoryActions } from './index';

export function* categoryWatcher(): SagaIterator {
  yield takeEvery(CategoryWorkerType.fetchData, categoryFetchDataWorker);
}

export function* categoryFetchDataWorker(
  action: CategoryFetchDataWorker,
): SagaIterator {
  // yield call(logger, 'categoryFetchDataWorker', action.payload);
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
