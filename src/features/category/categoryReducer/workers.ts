import { CategoryRequestType } from '../types';
import {
  CategoryFetchDataWorker,
  CategoryNewWorker,
  CategoryPatchDataWorker,
  CategoryWorkerType,
} from './types';

export const categoryFetchData = (id: number): CategoryFetchDataWorker => ({
  type: CategoryWorkerType.fetchData,
  payload: id,
});

export const categoryPatchData = (
  data: CategoryRequestType,
): CategoryPatchDataWorker => ({
  type: CategoryWorkerType.patchData,
  payload: data,
});

export const categoryNew = (data: CategoryRequestType): CategoryNewWorker => ({
  type: CategoryWorkerType.new,
  payload: data,
});
