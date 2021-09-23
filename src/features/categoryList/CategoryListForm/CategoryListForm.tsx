import React, { useEffect } from 'react';
import { PageTitle } from '../../../components/PageTitle';
import { useAppTranslation } from '../../../i18n/useAppTranslation';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  categoryListActions,
  categoryListSelectors,
  categoryListWorkers,
} from '../categoryListReducer';
import { EntityListForm } from '../../../components/EntityListForm';
import { CategoryListItemKeys } from '../types';
import { ActionRowPanelDefault } from '../../../components/ActionRowPanelDefault';
import { EntityListFormSkeleton } from '../../../components/EntityListFormSkeleton';
import { RequestErrorView } from '../../../components/RequestErrorView';
import { logger } from '../../../utils/logger';
import { useCategoryListFields } from './hooks';

export const CategoryListForm: React.FC = () => {
  const t = useAppTranslation();
  const dispatch = useAppDispatch();
  const categoryList = useAppSelector(
    categoryListSelectors.getCategoryListResponse,
  );
  const isLoading = useAppSelector(categoryListSelectors.getIsLoading);
  const requestOptions = useAppSelector(
    categoryListSelectors.getRequestOptions,
  );
  const requestError = useAppSelector(categoryListSelectors.getRequestError);
  const fields = useCategoryListFields();

  useEffect(() => {
    dispatch(categoryListWorkers.fetchData());
    return () => {
      dispatch(categoryListActions.clear());
    };
  }, []);

  const handleUpdateBtnClk = () => {
    dispatch(categoryListWorkers.fetchData());
  };

  const handleSearchClearBtn = () => {
    dispatch(categoryListWorkers.search(''));
  };

  const handleSearchCb = (searchStr: string) => {
    dispatch(categoryListWorkers.search(searchStr));
  };

  const handleColumnHeaderClk = (fieldName: CategoryListItemKeys) => {
    dispatch(categoryListWorkers.sort(fieldName));
  };

  const handlePaginationBtnClk = (page: number) => {
    dispatch(categoryListWorkers.goToPage(page));
  };

  const handleChangePerPage = (perPage: number) => {
    dispatch(categoryListWorkers.changePerPage(perPage));
  };

  const handleAdd = () => {
    logger('categoryList new');
  };

  const handleRowEdit = (id: number) => {
    logger('categoryList Edit', id);
  };

  const handleRowDelete = (id: number) => {
    dispatch(categoryListWorkers.deleteCategory(id));
  };

  const actionRowPanelRenderCb = (id: number) => (
    <ActionRowPanelDefault
      id={id}
      handleEditCb={handleRowEdit}
      handleDeleteCb={handleRowDelete}
      disabled={isLoading}
    />
  );

  const categoryListFormRender = categoryList ? (
    <EntityListForm
      disabled={isLoading}
      updateCb={handleUpdateBtnClk}
      searchClearCb={handleSearchClearBtn}
      searchCb={handleSearchCb}
      searchStr={requestOptions.search}
      rows={categoryList.data}
      fields={fields}
      columnHeaderClkCb={handleColumnHeaderClk}
      sortField={requestOptions.sort_field}
      page={categoryList.current_page}
      paginationBtnClkCb={handlePaginationBtnClk}
      searchPlaceholder={t('features__category-list-form__search-placeholder')}
      perPage={categoryList.per_page}
      changePerPageCb={handleChangePerPage}
      actionColumnTitle={t('features__category-list-form__action-column-title')}
      addCb={handleAdd}
      actionRowPanelRender={actionRowPanelRenderCb}
      pageCount={categoryList.last_page}
      sortAsc={Boolean(requestOptions.sort_asc)}
    />
  ) : null;

  const requestErrorRender = requestError ? (
    <RequestErrorView requestError={requestError} />
  ) : null;

  const skeletonFormRender =
    isLoading && !categoryList ? <EntityListFormSkeleton /> : null;

  return (
    <>
      <PageTitle>{t('features__category-list-form__page-title')}</PageTitle>
      {requestErrorRender}
      {categoryListFormRender}
      {skeletonFormRender}
    </>
  );
};