import * as selectors from './selectors';
import { categoryListSlice } from './slice';
import * as workers from './workers';

export const { actions: categoryListActions, reducer: categoryListReducer } =
  categoryListSlice;

export const categoryListWorkers = workers;

export const categoryListSelectors = selectors;
