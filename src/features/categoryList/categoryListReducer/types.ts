import { CategoryListItemKeys, CategoryListResponseType } from '../types';
import { EntityListRequestOptions } from '../../../types/commonTypes';
import { RequestError } from '../../../store/types';

export type CategoryListRequestOptions =
  EntityListRequestOptions<CategoryListItemKeys>;

export interface CategoryListState {
  isLoading: boolean;
  categoryListResponse: CategoryListResponseType | null;
  requestOptions: CategoryListRequestOptions;
  requestError: RequestError | null;
}

export enum CategoryListWorkerType {
  FETCH_DATA = 'categoryList/fetchDataWorker',
  SORT = 'categoryList/sortWorker',
  GO_TO_PAGE = 'categoryList/goToPageWorker',
  SEARCH = 'categoryList/searchWorker',
  CHANGE_PER_PAGE = 'categoryList/changePerPageWorker',
  DELETE = 'categoryList/deleteWorker',
}

interface CategoryListWorker<T, P> {
  type: T;
  payload: P;
}

export type CategoryListFetchDataWorker = CategoryListWorker<
  CategoryListWorkerType.FETCH_DATA,
  null
>;

export type CategoryListSortWorker = CategoryListWorker<
  CategoryListWorkerType.SORT,
  CategoryListItemKeys
>;

export type CategoryListGoToPageWorker = CategoryListWorker<
  CategoryListWorkerType.GO_TO_PAGE,
  number
>;

export type CategoryListSearchWorker = CategoryListWorker<
  CategoryListWorkerType.SEARCH,
  string
>;

export type CategoryListChangePerPageWorker = CategoryListWorker<
  CategoryListWorkerType.CHANGE_PER_PAGE,
  number
>;

export type CategoryListDeleteCategoryWorker = CategoryListWorker<
  CategoryListWorkerType.DELETE,
  number
>;
