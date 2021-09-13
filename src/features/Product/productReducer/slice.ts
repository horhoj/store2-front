import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductResponseType } from '../types';
import { RequestError } from '../../../store/types';
import { ProductState } from './types';

const initialState: ProductState = {
  productResponse: null,
  isLoading: false,
  requestError: null,
};

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setProductResponse: (
      state,
      action: PayloadAction<ProductResponseType | null>,
    ) => {
      state.productResponse = action.payload;
    },
    setRequestError: (state, action: PayloadAction<RequestError | null>) => {
      state.requestError = action.payload;
    },
    clear: (state) => {
      state.requestError = null;
    },
  },
});
