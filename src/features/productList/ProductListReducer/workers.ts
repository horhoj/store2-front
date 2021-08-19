import { FetchDataWorker, ProductListWorkerType } from './types';

export const fetchData = (): FetchDataWorker => ({
  type: ProductListWorkerType.FETCH_DATA_WORKER,
  payload: null,
});
