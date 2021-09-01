import { Product } from '../../../types/product';
import {
  FetchDataWorker,
  GoToPageWorker,
  ProductListWorkerType,
  SearchWorker,
  SortWorker,
} from './types';

export const fetchData = (): FetchDataWorker => ({
  type: ProductListWorkerType.FETCH_DATA_WORKER,
  payload: null,
});

export const sort = (fieldName: keyof Product): SortWorker => ({
  type: ProductListWorkerType.SORT_WORKER,
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
