import { CategoryRequestType, CategoryResponseType } from '../types';
import { RequestError } from '../../../store/types';

export interface CategoryState {
  categoryResponse: CategoryResponseType | null;
  isLoading: boolean;
  requestError: RequestError | null;
}

export enum CategoryWorkerType {
  FETCH_DATA = 'category/fetchDataWorker',
  PATCH_DATA = 'category/patchDataWorker',
  NEW = 'category/newWorker',
}

interface CategoryWorker<T, P> {
  type: T;
  payload: P;
}

export type CategoryFetchDataWorker = CategoryWorker<
  CategoryWorkerType.FETCH_DATA,
  number
>;

export type CategoryPatchDataWorker = CategoryWorker<
  CategoryWorkerType.PATCH_DATA,
  CategoryRequestType
>;

export type CategoryNewWorker = CategoryWorker<
  CategoryWorkerType.NEW,
  CategoryRequestType
>;
