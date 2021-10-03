import { SagaIterator } from 'redux-saga';
import { put, select, takeEvery } from 'redux-saga/effects';
import {
  FlashMessage,
  FlashMessagesAddMessageWorker,
  FlashMessagesWorkerType,
} from './types';
import { flashMessagesActions, flashMessagesSelectors } from './index';

export function* flashMessagesWatcher(): SagaIterator {
  yield takeEvery(FlashMessagesWorkerType.ADD_MESSAGE, flashMessagesAddMessage);
}

export function* flashMessagesAddMessage(
  action: FlashMessagesAddMessageWorker,
): SagaIterator {
  const currentId: ReturnType<
    typeof flashMessagesSelectors.flashMessageCurrentId
  > = yield select(flashMessagesSelectors.flashMessageCurrentId);
  const newCurrentId = currentId + 1;
  yield put(flashMessagesActions.setCurrentId(newCurrentId));
  const newFlashMessage: FlashMessage = { ...action.payload, id: newCurrentId };
  yield put(flashMessagesActions.addMessage(newFlashMessage));
}
