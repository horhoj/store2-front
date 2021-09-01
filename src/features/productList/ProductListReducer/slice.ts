import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductListResponseType } from '../types';
import { Product } from '../../../types/product';
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
      action: PayloadAction<Partial<ProductListRequestOptions>>,
    ) => {
      state.requestOptions = { ...state.requestOptions, ...action.payload };
    },

    sort: (state, action: PayloadAction<keyof Product>) => {
      const { sort_field, sort_asc } = state.requestOptions;
      const newSortField = action.payload;
      state.requestOptions.page = 1;
      if (sort_field === newSortField) {
        state.requestOptions.sort_asc = sort_asc === 1 ? 0 : 1;
      } else {
        state.requestOptions.sort_field = newSortField;
        state.requestOptions.sort_asc = 1;
      }
    },
  },
});