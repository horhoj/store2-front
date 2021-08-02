import { AppSagaWorkerType, AppTestWorker } from './types';

export const appTest = (payload: number): AppTestWorker => ({
  type: AppSagaWorkerType.APP_TEST_WORKER,
  payload,
});
