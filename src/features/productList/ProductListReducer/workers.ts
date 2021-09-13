import { ProductListItemKeys } from '../types';
import {
  ProductListChangePerPageWorker,
  ProductListDeleteProductWorker,
  ProductListFetchDataWorker,
  ProductListGoToPageWorker,
  ProductListWorkerType,
  ProductListSearchWorker,
  ProductListSortWorker,
} from './types';

export const fetchData = (): ProductListFetchDataWorker => ({
  type: ProductListWorkerType.FETCH_DATA,
  payload: null,
});

export const sort = (
  fieldName: ProductListItemKeys,
): ProductListSortWorker => ({
  type: ProductListWorkerType.SORT,
  payload: fieldName,
});

export const goToPage = (page: number): ProductListGoToPageWorker => ({
  type: ProductListWorkerType.GO_TO_PAGE,
  payload: page,
});

export const search = (searchStr: string): ProductListSearchWorker => ({
  type: ProductListWorkerType.SEARCH,
  payload: searchStr,
});

export const changePerPage = (
  perPage: number,
): ProductListChangePerPageWorker => ({
  type: ProductListWorkerType.CHANGE_PER_PAGE,
  payload: perPage,
});

export const deleteProduct = (id: number): ProductListDeleteProductWorker => ({
  type: ProductListWorkerType.DELETE,
  payload: id,
});
