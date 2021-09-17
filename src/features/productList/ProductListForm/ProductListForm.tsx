import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  productListActions,
  productListSelectors,
  productListWorkers,
} from '../ProductListReducer';
import { ProductListItemKeys } from '../types';
import { EntityListForm } from '../../../components/EntityListForm';
import { useAppTranslation } from '../../../i18n/useAppTranslation';
import { RequestErrorView } from '../../../components/RequestErrorView';
import { EntityListFormSkeleton } from '../../../components/EntityListFormSkeleton';
import { ActionRowPanelDefault } from '../../../components/ActionRowPanelDefault';
import { getPathByName } from '../../../router';
import { appActions } from '../../../store/app';
import { useFields } from './hooks';

export const ProductListForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const productList = useAppSelector(
    productListSelectors.getProductListResponse,
  );
  const isLoading = useAppSelector(productListSelectors.getIsLoading);
  const requestOptions = useAppSelector(productListSelectors.getRequestOptions);
  const requestError = useAppSelector(productListSelectors.getRequestError);
  const fields = useFields();
  const t = useAppTranslation();

  useEffect(() => {
    dispatch(productListWorkers.fetchData());
    return () => {
      dispatch(productListActions.clear());
    };
  }, []);

  const handleColumnHeaderClk = (fieldName: ProductListItemKeys) => {
    dispatch(productListWorkers.sort(fieldName));
  };

  const handlePaginationBtnClk = (page: number) => {
    dispatch(productListWorkers.goToPage(page));
  };

  const handleUpdateBtnClk = () => {
    dispatch(productListWorkers.fetchData());
  };

  const handleSearchClearBtn = () => {
    dispatch(productListWorkers.search(''));
  };

  const handleSearchCb = (searchStr: string) => {
    dispatch(productListWorkers.search(searchStr));
  };

  const handleChangePerPage = (perPage: number) => {
    dispatch(productListWorkers.changePerPage(perPage));
  };

  const handleRowEdit = (id: number) => {
    const path = getPathByName('product', { id });
    dispatch(appActions.redirect(path));
  };

  const handleDeleteEdit = (id: number) => {
    dispatch(productListWorkers.deleteProduct(id));
  };

  const actionRowPanelRender = (id: number) => (
    <ActionRowPanelDefault
      id={id}
      handleEditCb={handleRowEdit}
      handleDeleteCb={handleDeleteEdit}
      disabled={isLoading}
    />
  );

  const productListFormRender = productList ? (
    <EntityListForm
      disabled={isLoading}
      updateCb={handleUpdateBtnClk}
      searchClearCb={handleSearchClearBtn}
      searchCb={handleSearchCb}
      searchStr={requestOptions.search}
      rows={productList.data}
      fields={fields}
      columnHeaderClkCb={handleColumnHeaderClk}
      sortField={String(requestOptions.sort_field)}
      sortAsc={Boolean(requestOptions.sort_asc)}
      pageCount={productList.last_page}
      page={productList.current_page}
      paginationBtnClkCb={handlePaginationBtnClk}
      searchPlaceholder={t('features__product-list-form__search-placeholder')}
      perPage={productList.per_page}
      changePerPageCb={handleChangePerPage}
      actionColumnTitle={t('features__product-list-form__action-column-title')}
      actionRowPanelRender={actionRowPanelRender}
    />
  ) : null;

  const requestErrorRender = requestError ? (
    <RequestErrorView requestError={requestError} />
  ) : null;

  const skeletonFormRender =
    isLoading && !productList ? <EntityListFormSkeleton /> : null;

  return (
    <>
      {requestErrorRender}
      {productListFormRender}
      {skeletonFormRender}
    </>
  );
};
