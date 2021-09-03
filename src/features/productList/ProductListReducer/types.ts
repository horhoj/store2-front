import { ProductListResponseType } from '../types';
import { EntityListRequestOptions } from '../../../types/commonTypes';
import { Product } from '../../../types/product';
import { RequestError } from '../../../store/types';

export type ProductListRequestOptions = EntityListRequestOptions<keyof Product>;

export interface ProductListState {
  isLoading: boolean;
  productListResponse: ProductListResponseType | null;
  requestOptions: ProductListRequestOptions;
  requestError: RequestError | null;
}

export enum ProductListWorkerType {
  FETCH_DATA_WORKER = 'productList/fetchDataWorker',
  SORT_WORKER = 'productList/sortWorker',
  GO_TO_PAGE = 'productList/goToPageWorker',
  SEARCH = 'productList/searchWorker',
}

interface ProductListWorker<T, P> {
  type: T;
  payload: P;
}

export type FetchDataWorker = ProductListWorker<
  ProductListWorkerType.FETCH_DATA_WORKER,
  null
>;

export type SortWorker = ProductListWorker<
  ProductListWorkerType.SORT_WORKER,
  keyof Product
>;

export type GoToPageWorker = ProductListWorker<
  ProductListWorkerType.GO_TO_PAGE,
  number
>;

export type SearchWorker = ProductListWorker<
  ProductListWorkerType.SEARCH,
  string
>;
