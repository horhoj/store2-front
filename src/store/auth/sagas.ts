import { SagaIterator } from 'redux-saga';
import { call, takeEvery } from 'redux-saga/effects';
import { AuthSagaWorkerType, AuthTestWorker } from './types';

export function* authWatcher(): SagaIterator {
  yield takeEvery(AuthSagaWorkerType.AUTH_TEST_WORKER, authTestWorker);
}

export function* authTestWorker(action: AuthTestWorker): SagaIterator {
  // eslint-disable-next-line no-console
  yield call(console.log, action.payload);
}
