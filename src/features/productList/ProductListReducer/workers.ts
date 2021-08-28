import {
  FetchDataWorker,
  ProductListRequestOptions,
  ProductListWorkerType,
} from './types';

export const fetchData = (
  requestOptions: Partial<ProductListRequestOptions>,
): FetchDataWorker => ({
  type: ProductListWorkerType.FETCH_DATA_WORKER,
  payload: requestOptions,
});
