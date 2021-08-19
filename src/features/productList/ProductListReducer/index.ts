import * as selectors from './selectors';
import { productListSlice } from './slice';
import * as workers from './workers';

export const productListSelectors = selectors;

export const { actions: productListActions, reducer: productListReducer } =
  productListSlice;

export const productListWorkers = workers;
