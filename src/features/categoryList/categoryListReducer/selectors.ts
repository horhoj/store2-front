import { RequestError, RootState } from '../../../store/types';
import { CategoryListResponseType } from '../types';
import { CategoryListRequestOptions } from './types';

export const getIsLoading = (state: RootState): boolean =>
  state.categoryList.isLoading;

export const getCategoryListResponse = (
  state: RootState,
): CategoryListResponseType | null => state.categoryList.categoryListResponse;

export const getRequestOptions = (
  state: RootState,
): CategoryListRequestOptions => state.categoryList.requestOptions;

export const getRequestError = (state: RootState): RequestError | null =>
  state.categoryList.requestError;
