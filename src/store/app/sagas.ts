import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import { AppSagaWorkerType, AppTestWorker } from './types';

export function* appWatcher(): SagaIterator {
  yield takeEvery(AppSagaWorkerType.APP_TEST_WORKER, appTestWorker);
}

export function* appTestWorker(action: AppTestWorker): SagaIterator {
  // eslint-disable-next-line no-console
}
