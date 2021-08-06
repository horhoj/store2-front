import { UserCredentials } from '../../types/user';
import { RequestError } from '../types';

export interface AuthState {
  isLoading: boolean;
  isAuthenticated: boolean;
  requestError: RequestError | null;
}

export enum AuthSagaWorkerType {
  AUTH_SIGN_IN_WORKER = 'auth/authSignInWorker',
}

interface AuthSagaWorker<T, P> {
  type: T;
  payload: P;
}

export type AuthSignInWorker = AuthSagaWorker<
  AuthSagaWorkerType.AUTH_SIGN_IN_WORKER,
  UserCredentials
>;
