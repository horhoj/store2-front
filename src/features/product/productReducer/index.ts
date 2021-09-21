import * as selectors from './selectors';
import { productSlice } from './slice';
import * as workers from './workers';

export const productSelectors = selectors;

export const { actions: productActions, reducer: productReducer } =
  productSlice;

export const productWorkers = workers;
