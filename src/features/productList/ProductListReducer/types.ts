import { ProductListResponseType } from '../types';

export interface ProductListState {
  isLoading: boolean;
  productListResponse: ProductListResponseType | null;
}

export enum ProductListWorkerType {
  FETCH_DATA_WORKER = 'productList/fetchDataWorker',
}

interface ProductListWorker<T, P> {
  type: T;
  payload: P;
}

export type FetchDataWorker = ProductListWorker<
  ProductListWorkerType.FETCH_DATA_WORKER,
  null
>;
