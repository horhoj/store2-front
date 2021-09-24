import { categorySlice } from './slice';
import * as selectors from './selectors';
import * as workers from './workers';

export const { actions: categoryActions, reducer: categoryReducer } =
  categorySlice;

export const categorySelectors = selectors;

export const categoryWorkers = workers;
