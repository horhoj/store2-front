import { UserCredentials } from '../../types/user';
import {
  AuthGetUserDataWorker,
  AuthSagaWorkerType,
  AuthSignInWorker,
} from './types';

export const authSignUp = (payload: UserCredentials): AuthSignInWorker => ({
  type: AuthSagaWorkerType.AUTH_SIGN_IN_WORKER,
  payload,
});

export const authGetUserData = (): AuthGetUserDataWorker => ({
  type: AuthSagaWorkerType.AUTH_GET_USER_DATA,
  payload: null,
});
