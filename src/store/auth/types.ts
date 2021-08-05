export interface AuthState {
  isLoading: boolean;
  isAuthenticated: boolean;
}

export enum AuthSagaWorkerType {
  AUTH_TEST_WORKER = 'app/appTestWorker',
}

interface AuthSagaWorker<T, P> {
  type: T;
  payload: P;
}

export type AuthTestWorker = AuthSagaWorker<
  AuthSagaWorkerType.AUTH_TEST_WORKER,
  number
>;
