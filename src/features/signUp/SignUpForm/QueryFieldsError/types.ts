import { RequestError } from '../../../../store/types';

export interface QueryFieldsErrorProps {
  requestError: RequestError;
}

export interface Errors {
  [keys: string]: string[];
}
