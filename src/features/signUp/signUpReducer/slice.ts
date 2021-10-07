import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RequestError } from '../../../store/types';
import { SignUpState } from './types';

const initialState: SignUpState = {
  isLoading: false,
  requestError: null,
};

export const signUpSlice = createSlice({
  name: 'signUp',
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    setRequestError: (state, action: PayloadAction<RequestError | null>) => {
      state.requestError = action.payload;
    },
  },
});
