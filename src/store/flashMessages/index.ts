import { flashMessagesSlice } from './slice';
import * as selectors from './selectors';
import * as workers from './workers';

export const { actions: flashMessagesActions, reducer: flashMessagesReducer } =
  flashMessagesSlice;

export const flashMessagesSelectors = selectors;

export const flashMessagesWorkers = workers;
