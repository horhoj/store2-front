import { UserCredentials } from '../../types/userData';
import {
  AuthGetUserDataWorker,
  AuthSagaWorkerType,
  AuthSignInWorker,
  AuthSignOutWorker,
} from './types';

export const authSignUp = (payload: UserCredentials): AuthSignInWorker => ({
  type: AuthSagaWorkerType.SIGN_IN_WORKER,
  payload,
});

export const authGetUserData = (): AuthGetUserDataWorker => ({
  type: AuthSagaWorkerType.GET_USER_DATA,
  payload: null,
});

export const authSignOut = (): AuthSignOutWorker => ({
  type: AuthSagaWorkerType.SIGN_OUT,
  payload: null,
});
