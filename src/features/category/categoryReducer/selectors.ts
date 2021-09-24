import { RequestError, RootState } from '../../../store/types';
import { CategoryResponseType } from '../types';

export const getCategoryResponse = (
  state: RootState,
): CategoryResponseType | null => state.category.categoryResponse;

export const getIsLoading = (state: RootState): boolean =>
  state.category.isLoading;

export const getRequestError = (state: RootState): RequestError | null =>
  state.category.requestError;
