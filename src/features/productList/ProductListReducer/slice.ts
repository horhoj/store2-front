import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductListResponseType } from '../types';
import { ProductListState } from './types';

const initialState: ProductListState = {
  isLoading: true,
  productListResponse: null,
};

export const productListSlice = createSlice({
  name: 'productList',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setProductListResponse: (
      state,
      action: PayloadAction<ProductListResponseType | null>,
    ) => {
      state.productListResponse = action.payload;
    },
  },
});
