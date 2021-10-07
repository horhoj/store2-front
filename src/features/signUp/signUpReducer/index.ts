import { signUpSlice } from './slice';
import * as workers from './workers';
import * as selectors from './selectors';

export const { actions: signUpAction, reducer: signUpReducer } = signUpSlice;

export const signUpWorkers = workers;

export const signUpSelectors = selectors;
