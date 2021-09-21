import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductListItemKeys, ProductListResponseType } from '../types';
import { RequestError } from '../../../store/types';
import { DEFAULT_ENTITY_LIST_PER_PAGE } from '../../../config/config';
import { ProductListRequestOptions, ProductListState } from './types';

const initialState: ProductListState = {
  isLoading: false,
  productListResponse: null,
  requestOptions: {
    page: 1,
    per_page: DEFAULT_ENTITY_LIST_PER_PAGE,
    search: '',
    sort_asc: 1,
    sort_field: 'id',
  },
  requestError: null,
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

    sort: (state, action: PayloadAction<ProductListItemKeys>) => {
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
    setRequestError: (state, action: PayloadAction<RequestError | null>) => {
      state.requestError = action.payload;
    },
    clear: (state) => {
      // state.productListResponse = null;
      state.requestError = null;
    },
  },
});
