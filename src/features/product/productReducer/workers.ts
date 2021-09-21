import { ProductRequestType } from '../types';
import {
  ProductFetchDataWorker,
  ProductNewWorker,
  ProductPatchDataWorker,
  ProductWorkerType,
} from './types';

export const productFetchData = (id: number): ProductFetchDataWorker => ({
  type: ProductWorkerType.fetchData,
  payload: id,
});

export const productPatchData = (
  data: ProductRequestType,
): ProductPatchDataWorker => ({
  type: ProductWorkerType.patchData,
  payload: data,
});

export const productNew = (data: ProductRequestType): ProductNewWorker => ({
  type: ProductWorkerType.new,
  payload: data,
});
