import { SagaIterator } from 'redux-saga';
import { call, put, SagaReturnType, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { logger } from '../../utils/logger';
import { ACCESS_TOKEN_LS_KEY } from '../../config/config';
import {
  addBearerTokenToRequestConfig,
  getErrorData,
  validateData,
} from '../helpers';
import { UserData, UserDataValidationSchema } from '../../types/userData';
import { ajax } from '../../api/transport';
import { AuthSagaWorkerType, AuthSignInWorker } from './types';
import {
  getTokenRequestConfig,
  getTokenRevokeRequestConfig,
  getUserDataRequestConfig,
} from './helpers';
import { authActions } from './index';

export function* authWatcher(): SagaIterator {
  yield takeEvery(AuthSagaWorkerType.SIGN_IN_WORKER, signUpWorker);
  yield takeEvery(AuthSagaWorkerType.GET_USER_DATA, getUserDataWorker);
  yield takeEvery(AuthSagaWorkerType.SIGN_OUT, signOutWorker);
}

export function* signUpWorker(action: AuthSignInWorker): SagaIterator {
  try {
    yield call(logger, 'test xxx');
    yield put(authActions.setIsLoading(true));
    yield put(authActions.SetUserData(null));
    yield put(authActions.SetRequestError(null));
    const responseToTokenRequest: AxiosResponse<{ token: string }> = yield call(
      ajax,
      getTokenRequestConfig(action.payload),
    );
    const token = responseToTokenRequest.data.token;
    yield call(
      [localStorage, localStorage.setItem],
      ACCESS_TOKEN_LS_KEY,
      token,
    );
    const responseToUserDataRequest: AxiosResponse<UserData> = yield call(
      ajax,
      addBearerTokenToRequestConfig(token, getUserDataRequestConfig()),
    );
    yield call(
      validateData,
      UserDataValidationSchema,
      responseToUserDataRequest.data,
    );
    yield put(authActions.SetUserData(responseToUserDataRequest.data));
    yield put(authActions.setIsAuthenticated(true));
  } catch (e) {
    const errorData = getErrorData(e);
    yield call(logger, 'signUpWorker errors', errorData);
    yield put(authActions.SetRequestError(errorData));
  } finally {
    yield put(authActions.setIsLoading(false));
  }
}

export function* getUserDataWorker(): SagaIterator {
  try {
    yield put(authActions.SetIsLoadingUserData(true));
    const token: SagaReturnType<typeof localStorage.getItem> = yield call(
      [localStorage, localStorage.getItem],
      ACCESS_TOKEN_LS_KEY,
    );
    const responseToUserDataRequest: AxiosResponse<UserData> = yield call(
      ajax,
      addBearerTokenToRequestConfig(token || '', getUserDataRequestConfig()),
    );
    yield call(
      validateData,
      UserDataValidationSchema,
      responseToUserDataRequest.data,
    );
    yield put(authActions.SetUserData(responseToUserDataRequest.data));
    yield put(authActions.setIsAuthenticated(true));
  } catch (e) {
    yield call(logger, 'getUserDataWorker errors', getErrorData(e));
  } finally {
    yield put(authActions.SetIsLoadingUserData(false));
  }
}

export function* signOutWorker(): SagaIterator {
  try {
    yield put(authActions.setIsLoading(true));
    yield put(authActions.SetUserData(null));
    yield put(authActions.setIsAuthenticated(false));
    const token: SagaReturnType<typeof localStorage.getItem> = yield call(
      [localStorage, localStorage.getItem],
      ACCESS_TOKEN_LS_KEY,
    );
    yield call(
      ajax,
      addBearerTokenToRequestConfig(token || '', getTokenRevokeRequestConfig()),
    );

    yield call([localStorage, localStorage.removeItem], ACCESS_TOKEN_LS_KEY);
  } catch (e) {
    yield call(logger, 'signOutWorker errors', getErrorData(e));
  } finally {
    yield put(authActions.setIsLoading(false));
  }
}
