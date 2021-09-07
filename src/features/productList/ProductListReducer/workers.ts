import { Product } from '../../../types/product';
import {
  ChangePerPageWorker,
  DeleteProductWorker,
  FetchDataWorker,
  GoToPageWorker,
  ProductListWorkerType,
  SearchWorker,
  SortWorker,
} from './types';

export const fetchData = (): FetchDataWorker => ({
  type: ProductListWorkerType.FETCH_DATA,
  payload: null,
});

export const sort = (fieldName: keyof Product): SortWorker => ({
  type: ProductListWorkerType.SORT,
  payload: fieldName,
});

export const goToPage = (page: number): GoToPageWorker => ({
  type: ProductListWorkerType.GO_TO_PAGE,
  payload: page,
});

export const search = (searchStr: string): SearchWorker => ({
  type: ProductListWorkerType.SEARCH,
  payload: searchStr,
});

export const changePerPage = (perPage: number): ChangePerPageWorker => ({
  type: ProductListWorkerType.CHANGE_PER_PAGE,
  payload: perPage,
});

export const deleteProduct = (id: number): DeleteProductWorker => ({
  type: ProductListWorkerType.DELETE,
  payload: id,
});
