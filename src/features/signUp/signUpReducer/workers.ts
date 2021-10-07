import { SignUpData } from '../types';
import { AddNewUserWorker, SignUpWorkerType } from './types';

export const addNewUser = (signUpData: SignUpData): AddNewUserWorker => ({
  type: SignUpWorkerType.addNewUser,
  payload: signUpData,
});
