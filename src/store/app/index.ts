import * as selectors from './selectors';
import { appSlice } from './slice';
import * as workers from './workers';

export const appSelectors = selectors;

export const { actions: appActions, reducer: appReducer } = appSlice;

export const appWorkers = workers;
