import { ProductFetchDataWorker, ProductWorkerType } from './types';

export const productFetchData = (id: number): ProductFetchDataWorker => ({
  type: ProductWorkerType.fetchData,
  payload: id,
});
