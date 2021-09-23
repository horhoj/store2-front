import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { DEFAULT_ENTITY_LIST_PER_PAGE } from '../../../config/config';
import { CategoryListItemKeys, CategoryListResponseType } from '../types';
import { RequestError } from '../../../store/types';
import { CategoryListState, CategoryListRequestOptions } from './types';

const initialState: CategoryListState = {
  isLoading: false,
  categoryListResponse: null,
  requestOptions: {
    page: 1,
    per_page: DEFAULT_ENTITY_LIST_PER_PAGE,
    search: '',
    sort_asc: 1,
    sort_field: 'id',
  },
  requestError: null,
};

export const categoryListSlice = createSlice({
  name: 'categoryList',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },

    setCategoryListResponse: (
      state,
      action: PayloadAction<CategoryListResponseType | null>,
    ) => {
      state.categoryListResponse = action.payload;
    },

    setRequestOptions: (
      state,
      action: PayloadAction<Partial<CategoryListRequestOptions>>,
    ) => {
      state.requestOptions = { ...state.requestOptions, ...action.payload };
    },

    sort: (state, action: PayloadAction<CategoryListItemKeys>) => {
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
      state.requestError = null;
    },
  },
});
