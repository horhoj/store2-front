import { RootState } from '../../../store/types';
import { ProductResponseType } from '../types';

export const getProductResponse = (
  state: RootState,
): ProductResponseType | null => state.product.productResponse;

export const getIsLoading = (state: RootState): boolean =>
  state.product.isLoading;
