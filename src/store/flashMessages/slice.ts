import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FlashMessage, FlashMessagesState } from './types';

const initialState: FlashMessagesState = {
  flashMessageList: [],
  currentId: 0,
};

export const flashMessagesSlice = createSlice({
  initialState,
  name: 'flashMessage',
  reducers: {
    addMessage: (state, action: PayloadAction<FlashMessage>) => {
      state.flashMessageList.push(action.payload);
    },
    setCurrentId: (state, action: PayloadAction<number>) => {
      state.currentId = action.payload;
    },
  },
});
