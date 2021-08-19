import { RootState } from '../../../store/types';
import { ProductListResponseType } from '../types';

export const getIsLoading = (state: RootState): boolean =>
  state.productList.isLoading;

export const getProductListResponse = (
  state: RootState,
): ProductListResponseType | null => state.productList.productListResponse;
