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
import { getPathByName } from '../../../router';
import { appActions } from '../../../store/app';
import { NEW_ENTITY_ITEM_ID } from '../../../config/config';
import { useCategoryListFields } from './hooks';
import { CategoryListFormProps } from './types';

export const CategoryListForm: React.FC<CategoryListFormProps> = ({
  isModal = false,
  selectCb,
}) => {
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
    const path = getPathByName('category', { id: NEW_ENTITY_ITEM_ID });
    dispatch(appActions.redirect(path));
  };

  const handleRowEdit = (id: number) => {
    logger('categoryList Edit', id);
    const path = getPathByName('category', { id });
    dispatch(appActions.redirect(path));
  };

  const handleRowDelete = (id: number) => {
    dispatch(categoryListWorkers.deleteCategory(id));
  };

  const handleRowSelect = (id: number) => {
    if (!categoryList) {
      return;
    }
    const row = categoryList.data.filter((row) => row.id === id)[0];
    if (selectCb) {
      selectCb(row);
    }
  };

  const actionRowPanelRenderCb = (id: number) => (
    <ActionRowPanelDefault
      isEditBtn={!isModal}
      isDeleteBtn={!isModal}
      isSelectBtn={isModal}
      id={id}
      handleEditCb={handleRowEdit}
      handleDeleteCb={handleRowDelete}
      handleSelectCb={handleRowSelect}
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
      searchNotFoundMsg={t(
        'features__category-list-form__search-not-found-msg',
      )}
      isEmpty={categoryList.total === 0}
      isShowAddBtn={!isModal}
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
