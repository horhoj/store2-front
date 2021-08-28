import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductListResponseType } from '../types';
import { ProductListRequestOptions, ProductListState } from './types';

const initialState: ProductListState = {
  isLoading: false,
  productListResponse: null,
  requestOptions: {
    page: 1,
    per_page: 10,
    search: '',
    sort_asc: 1,
    sort_field: 'id',
  },
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
    setRequestOptions: (
      state,
      action: PayloadAction<ProductListRequestOptions>,
    ) => {
      state.requestOptions = action.payload;
    },
  },
});
