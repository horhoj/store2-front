import { CategoryRequestType } from '../types';
import {
  CategoryFetchDataWorker,
  CategoryNewWorker,
  CategoryPatchDataWorker,
  CategoryWorkerType,
} from './types';

export const categoryFetchData = (id: number): CategoryFetchDataWorker => ({
  type: CategoryWorkerType.FETCH_DATA,
  payload: id,
});

export const categoryPatchData = (
  data: CategoryRequestType,
): CategoryPatchDataWorker => ({
  type: CategoryWorkerType.PATCH_DATA,
  payload: data,
});

export const categoryNew = (data: CategoryRequestType): CategoryNewWorker => ({
  type: CategoryWorkerType.NEW,
  payload: data,
});
