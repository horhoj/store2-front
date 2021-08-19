import { UserData, UserCredentials } from '../../types/userData';
import { RequestError } from '../types';

export interface AuthState {
  isLoading: boolean;
  isAuthenticated: boolean;
  requestError: RequestError | null;
  userData: UserData | null;
  isLoadingUserData: boolean;
}

export enum AuthSagaWorkerType {
  SIGN_IN_WORKER = 'auth/authSignInWorker',
  GET_USER_DATA = 'auth/getUserDataWorker',
  SIGN_OUT = 'auth/signOutWorker',
}

interface AuthSagaWorker<T, P> {
  type: T;
  payload: P;
}

export type AuthSignInWorker = AuthSagaWorker<
  AuthSagaWorkerType.SIGN_IN_WORKER,
  UserCredentials
>;

export type AuthGetUserDataWorker = AuthSagaWorker<
  AuthSagaWorkerType.GET_USER_DATA,
  null
>;

export type AuthSignOutWorker = AuthSagaWorker<
  AuthSagaWorkerType.SIGN_OUT,
  null
>;
