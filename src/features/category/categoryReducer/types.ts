import { CategoryRequestType, CategoryResponseType } from '../types';
import { RequestError } from '../../../store/types';

export interface CategoryState {
  categoryResponse: CategoryResponseType | null;
  isLoading: boolean;
  requestError: RequestError | null;
}

export enum CategoryWorkerType {
  fetchData = 'category/fetchData',
  patchData = 'category/patchData',
  new = 'category/new',
}

interface CategoryWorker<T, P> {
  type: T;
  payload: P;
}

export type CategoryFetchDataWorker = CategoryWorker<
  CategoryWorkerType.fetchData,
  number
>;

export type CategoryPatchDataWorker = CategoryWorker<
  CategoryWorkerType.patchData,
  CategoryRequestType
>;

export type CategoryNewWorker = CategoryWorker<
  CategoryWorkerType.new,
  CategoryRequestType
>;
