import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoryResponseType } from '../types';
import { RequestError } from '../../../store/types';
import { CategoryState } from './types';

const initialState: CategoryState = {
  categoryResponse: null,
  isLoading: false,
  requestError: null,
};

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setCategoryResponse: (
      state,
      action: PayloadAction<CategoryResponseType | null>,
    ) => {
      state.categoryResponse = action.payload;
    },
    setRequestError: (state, action: PayloadAction<RequestError | null>) => {
      state.requestError = action.payload;
    },
    clear: (state) => {
      state.requestError = null;
      state.categoryResponse = null;
    },
  },
});
