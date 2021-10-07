import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import { logger } from '../../../utils/logger';
import { getErrorData } from '../../../store/helpers';
import { requestExecutor } from '../../../store/sagas';
import { FlashMessage } from '../../../store/app/types';
import { appActions } from '../../../store/app';
import { getPathByName } from '../../../router';
import { AddNewUserWorker, SignUpWorkerType } from './types';
import { getSignUpAddNewUserRequestConfig } from './helpers';
import { signUpAction } from './index';

export function* signUpWatcher(): SagaIterator {
  yield takeEvery(SignUpWorkerType.addNewUser, addNewUserWorker);
}

export function* addNewUserWorker(action: AddNewUserWorker): SagaIterator {
  try {
    yield put(signUpAction.setIsLoading(true));
    yield put(signUpAction.setRequestError(null));
    const requestConfig: ReturnType<typeof getSignUpAddNewUserRequestConfig> =
      yield call(getSignUpAddNewUserRequestConfig, action.payload);
    yield call(requestExecutor, requestConfig, null);
    const msg: FlashMessage = {
      msg: 'page__sign-up__add-user-success',
      type: 'success',
      data: {
        name: action.payload.name,
      },
    };
    yield put(appActions.addFlashMessage(msg));
    const path = getPathByName('home');
    yield put(appActions.redirect(path));
  } catch (e) {
    const errorData: ReturnType<typeof getErrorData> = yield call(
      getErrorData,
      e,
    );
    yield call(logger, 'fetchDataWorker', errorData);
    yield put(signUpAction.setRequestError(errorData));
    const msg: FlashMessage = {
      msg: 'page__sign-up__add-user-error',
      type: 'error',
      data: {
        name: action.payload.name,
      },
    };
    yield put(appActions.addFlashMessage(msg));
  } finally {
    yield put(signUpAction.setIsLoading(false));
  }
}
