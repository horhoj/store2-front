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
import { UserData, UserDataValidationSchema } from '../../types/user';
import { ajax } from '../../api/transport';
import { AuthSagaWorkerType, AuthSignInWorker } from './types';
import { getTokenRequestConfig, getUserDataRequestConfig } from './helpers';
import { authActions } from './index';

export function* authWatcher(): SagaIterator {
  yield takeEvery(AuthSagaWorkerType.AUTH_SIGN_IN_WORKER, authSignUpWorker);
  yield takeEvery(AuthSagaWorkerType.AUTH_GET_USER_DATA, getUserDataWorker);
}

export function* authSignUpWorker(action: AuthSignInWorker): SagaIterator {
  try {
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
    yield call(logger, 'authSignUpWorker errors', errorData);
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
