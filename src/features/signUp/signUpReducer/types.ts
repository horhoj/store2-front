import { RequestError } from '../../../store/types';
import { SignUpData } from '../types';

export interface SignUpState {
  isLoading: boolean;
  requestError: RequestError | null;
}

export enum SignUpWorkerType {
  addNewUser = 'signUp/addNewUser',
}

interface SignUpWorker<T, P> {
  type: T;
  payload: P;
}

export type AddNewUserWorker = SignUpWorker<
  SignUpWorkerType.addNewUser,
  SignUpData
>;
