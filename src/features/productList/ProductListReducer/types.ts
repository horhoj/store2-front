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
  FETCH_DATA = 'productList/fetchDataWorker',
  SORT = 'productList/sortWorker',
  GO_TO_PAGE = 'productList/goToPageWorker',
  SEARCH = 'productList/searchWorker',
  CHANGE_PER_PAGE = 'productList/changePerPage',
  DELETE = 'productList/delete',
}

interface ProductListWorker<T, P> {
  type: T;
  payload: P;
}

export type FetchDataWorker = ProductListWorker<
  ProductListWorkerType.FETCH_DATA,
  null
>;

export type SortWorker = ProductListWorker<
  ProductListWorkerType.SORT,
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

export type ChangePerPageWorker = ProductListWorker<
  ProductListWorkerType.CHANGE_PER_PAGE,
  number
>;

export type DeleteProductWorker = ProductListWorker<
  ProductListWorkerType.DELETE,
  number
>;
