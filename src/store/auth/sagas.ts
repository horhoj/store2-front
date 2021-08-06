import { SagaIterator } from 'redux-saga';
import { call, put, takeEvery } from 'redux-saga/effects';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { log } from '../../utils/log';
import {
  ACCESS_TOKEN_LS_KEY,
  API_URL,
  DEFAULT_REQUEST_HEADERS,
} from '../../config/config';
import { getErrorData } from '../helpers';
import { AuthSagaWorkerType, AuthSignInWorker } from './types';
import { authActions } from './index';

export function* authWatcher(): SagaIterator {
  yield takeEvery(AuthSagaWorkerType.AUTH_SIGN_IN_WORKER, authSignUpWorker);
}

export function* authSignUpWorker(action: AuthSignInWorker): SagaIterator {
  try {
    yield put(authActions.setIsLoading(true));
    yield put(authActions.SetRequestError(null));
    const requestConfig: AxiosRequestConfig = {
      baseURL: API_URL,
      headers: DEFAULT_REQUEST_HEADERS,
      method: 'post',
      url: '/auth/login',
      data: action.payload,
    };
    const response: AxiosResponse<{ token: string }> = yield call(
      axios.request,
      requestConfig,
    );
    yield call(
      [localStorage, localStorage.setItem],
      ACCESS_TOKEN_LS_KEY,
      response.data.token,
    );
    yield put(authActions.setIsAuthenticated(true));
  } catch (e) {
    const errorData = getErrorData(e);
    log('authSignUpWorker errors', getErrorData(e));
    yield put(authActions.SetRequestError(errorData));
  } finally {
    yield put(authActions.setIsLoading(false));
  }
}
