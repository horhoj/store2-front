export interface AppState {
  isAuthenticated: boolean;
  isDarkMode: boolean;
}

export enum AppSagaWorkerType {
  APP_TEST_WORKER = 'app/appTestWorker',
}

interface AppSagaWorker<T, P> {
  type: T;
  payload: P;
}

export type AppTestWorker = AppSagaWorker<
  AppSagaWorkerType.APP_TEST_WORKER,
  number
>;
