import { CategoryListItemKeys } from '../types';
import {
  CategoryListChangePerPageWorker,
  CategoryListDeleteCategoryWorker,
  CategoryListFetchDataWorker,
  CategoryListGoToPageWorker,
  CategoryListSearchWorker,
  CategoryListSortWorker,
  CategoryListWorkerType,
} from './types';

export const fetchData = (): CategoryListFetchDataWorker => ({
  type: CategoryListWorkerType.FETCH_DATA,
  payload: null,
});

export const sort = (
  fieldName: CategoryListItemKeys,
): CategoryListSortWorker => ({
  type: CategoryListWorkerType.SORT,
  payload: fieldName,
});

export const goToPage = (page: number): CategoryListGoToPageWorker => ({
  type: CategoryListWorkerType.GO_TO_PAGE,
  payload: page,
});

export const search = (searchStr: string): CategoryListSearchWorker => ({
  type: CategoryListWorkerType.SEARCH,
  payload: searchStr,
});

export const changePerPage = (
  page: number,
): CategoryListChangePerPageWorker => ({
  type: CategoryListWorkerType.CHANGE_PER_PAGE,
  payload: page,
});

export const deleteCategory = (
  id: number,
): CategoryListDeleteCategoryWorker => ({
  type: CategoryListWorkerType.DELETE,
  payload: id,
});
