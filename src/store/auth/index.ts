import * as selectors from './selectors';
import { authSlice } from './slice';
import * as workers from './workers';

export const authSelectors = selectors;

export const { actions: authActions, reducer: authReducer } = authSlice;

export const authWorkers = workers;
