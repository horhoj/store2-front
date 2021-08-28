import { ProductListResponseType } from '../types';
import { EntityListRequestOptions } from '../../../types/commonTypes';
import { Product } from '../../../types/product';

export type ProductListRequestOptions = EntityListRequestOptions<keyof Product>;

export interface ProductListState {
  isLoading: boolean;
  productListResponse: ProductListResponseType | null;
  requestOptions: ProductListRequestOptions;
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
  Partial<ProductListRequestOptions>
>;
