import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  productListActions,
  productListSelectors,
  productListWorkers,
} from '../ProductListReducer';
import { Product } from '../../../types/product';
import { EntityListForm } from '../../../components/EntityListForm';
import { useAppTranslation } from '../../../i18n/useAppTranslation';
import { RequestErrorView } from '../../../components/RequestErrorView';
import { useFields } from './hooks';

export const ProductListForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const productList = useAppSelector(
    productListSelectors.getProductListResponse,
  );

  const isLoading = useAppSelector(productListSelectors.getIsLoading);
  const requestOptions = useAppSelector(productListSelectors.getRequestOptions);
  const requestError = useAppSelector(productListSelectors.getRequestError);

  useEffect(() => {
    dispatch(productListWorkers.fetchData());
    return () => {
      dispatch(productListActions.clear());
    };
  }, []);

  const fields = useFields();
  const t = useAppTranslation();

  const handleColumnHeaderClk = (fieldName: keyof Product) => {
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
      sortField={requestOptions.sort_field}
      sortAsc={Boolean(requestOptions.sort_asc)}
      pageCount={productList.last_page}
      page={productList.current_page}
      paginationBtnClkCb={handlePaginationBtnClk}
      searchPlaceholder={t('features__product-list-form__search-placeholder')}
      perPage={productList.per_page}
      changePerPageCb={handleChangePerPage}
    />
  ) : null;

  const requestErrorRender = requestError ? (
    <RequestErrorView requestError={requestError} />
  ) : null;

  return (
    <>
      {requestErrorRender}
      {productListFormRender}
    </>
  );
};
