import { RequestError, RootState } from '../../../store/types';

export const getIsLoading = (state: RootState): boolean =>
  state.signUp.isLoading;

export const getRequestError = (state: RootState): RequestError | null =>
  state.signUp.requestError;
