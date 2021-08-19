import { SagaIterator } from 'redux-saga';
import { call, put, SagaReturnType } from 'redux-saga/effects';
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { AnyObjectSchema, Asserts } from 'yup';
import { ACCESS_TOKEN_LS_KEY } from '../config/config';
import { ajax } from '../api/transport';
import {
  addBearerTokenToRequestConfig,
  getDefaultRequestConfig,
  getErrorData,
  validateData,
} from './helpers';
import { authActions } from './auth';

export function* requestExecutor(
  requestConfig: AxiosRequestConfig,
  validationSchema: AnyObjectSchema,
): SagaIterator {
  try {
    const defaultRequestConfig: ReturnType<typeof getDefaultRequestConfig> =
      yield call(getDefaultRequestConfig);
    const token: SagaReturnType<typeof localStorage.getItem> = yield call(
      [localStorage, localStorage.getItem],
      ACCESS_TOKEN_LS_KEY,
    );
    const fullRequestConfig: ReturnType<typeof addBearerTokenToRequestConfig> =
      yield call(addBearerTokenToRequestConfig, token || '', {
        ...requestConfig,
        ...defaultRequestConfig,
      });

    const response: AxiosResponse<Asserts<typeof validationSchema>> =
      yield call(ajax, fullRequestConfig);

    yield call(validateData, validationSchema, response.data);

    return response.data;
  } catch (e) {
    const unauthorizedAccessStatusCode = 401;
    if (getErrorData(e).responseData?.status === unauthorizedAccessStatusCode) {
      yield put(authActions.setIsAuthenticated(false));
      yield put(authActions.SetUserData(null));
    }
    throw e;
  }
}
