import { ProductListItemKeys, ProductListResponseType } from '../types';
import { EntityListRequestOptions } from '../../../types/commonTypes';
import { RequestError } from '../../../store/types';

export type ProductListRequestOptions =
  EntityListRequestOptions<ProductListItemKeys>;

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

export type ProductListFetchDataWorker = ProductListWorker<
  ProductListWorkerType.FETCH_DATA,
  null
>;

export type ProductListSortWorker = ProductListWorker<
  ProductListWorkerType.SORT,
  ProductListItemKeys
>;

export type ProductListGoToPageWorker = ProductListWorker<
  ProductListWorkerType.GO_TO_PAGE,
  number
>;

export type ProductListSearchWorker = ProductListWorker<
  ProductListWorkerType.SEARCH,
  string
>;

export type ProductListChangePerPageWorker = ProductListWorker<
  ProductListWorkerType.CHANGE_PER_PAGE,
  number
>;

export type ProductListDeleteProductWorker = ProductListWorker<
  ProductListWorkerType.DELETE,
  number
>;
