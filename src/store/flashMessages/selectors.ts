import { RootState } from '../types';
import { FlashMessage } from './types';

export const flashMessageList = (state: RootState): FlashMessage[] =>
  state.flashMessages.flashMessageList;

export const flashMessageCurrentId = (state: RootState): number =>
  state.flashMessages.currentId;
