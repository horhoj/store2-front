import { UserCredentials } from '../../types/user';
import { AuthSagaWorkerType, AuthSignInWorker } from './types';

export const authSignUp = (payload: UserCredentials): AuthSignInWorker => ({
  type: AuthSagaWorkerType.AUTH_SIGN_IN_WORKER,
  payload,
});
