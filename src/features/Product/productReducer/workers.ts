import { ProductRequestType } from '../types';
import {
  ProductFetchDataWorker,
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
