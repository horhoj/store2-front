import { RequestError, RootState } from '../../../store/types';
import { ProductListResponseType } from '../types';
import { ProductListRequestOptions } from './types';

export const getIsLoading = (state: RootState): boolean =>
  state.productList.isLoading;

export const getProductListResponse = (
  state: RootState,
): ProductListResponseType | null => state.productList.productListResponse;

export const getRequestOptions = (
  state: RootState,
): ProductListRequestOptions => state.productList.requestOptions;

export const getRequestError = (state: RootState): RequestError | null =>
  state.productList.requestError;
