import { ProductRequestType } from '../types';
import {
  ProductFetchDataWorker,
  ProductNewWorker,
  ProductPatchDataWorker,
  ProductWorkerType,
} from './types';

export const productFetchData = (id: number): ProductFetchDataWorker => ({
  type: ProductWorkerType.FETCH_DATA,
  payload: id,
});

export const productPatchData = (
  data: ProductRequestType,
): ProductPatchDataWorker => ({
  type: ProductWorkerType.PATCH_DATA,
  payload: data,
});

export const productNew = (data: ProductRequestType): ProductNewWorker => ({
  type: ProductWorkerType.NEW,
  payload: data,
});
