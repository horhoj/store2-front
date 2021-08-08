import { UserData, UserCredentials } from '../../types/user';
import { RequestError } from '../types';

export interface AuthState {
  isLoading: boolean;
  isAuthenticated: boolean;
  requestError: RequestError | null;
  userData: UserData | null;
  isLoadingUserData: boolean;
}

export enum AuthSagaWorkerType {
  AUTH_SIGN_IN_WORKER = 'auth/authSignInWorker',
  AUTH_GET_USER_DATA = 'auth/GetUserData',
}

interface AuthSagaWorker<T, P> {
  type: T;
  payload: P;
}

export type AuthSignInWorker = AuthSagaWorker<
  AuthSagaWorkerType.AUTH_SIGN_IN_WORKER,
  UserCredentials
>;

export type AuthGetUserDataWorker = AuthSagaWorker<
  AuthSagaWorkerType.AUTH_GET_USER_DATA,
  null
>;
