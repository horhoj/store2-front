import { AuthSagaWorkerType, AuthTestWorker } from './types';

export const authTest = (payload: number): AuthTestWorker => ({
  type: AuthSagaWorkerType.AUTH_TEST_WORKER,
  payload,
});
