import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  productListSelectors,
  productListWorkers,
} from '../ProductListReducer';
import { Product } from '../../../types/product';
import { EntityListForm } from '../../../components/EntityListForm';
import { useFields } from './hooks';

export const ProductListForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const productList = useAppSelector(
    productListSelectors.getProductListResponse,
  );

  const isLoading = useAppSelector(productListSelectors.getIsLoading);
  const requestOptions = useAppSelector(productListSelectors.getRequestOptions);

  useEffect(() => {
    dispatch(productListWorkers.fetchData());
  }, []);

  const fields = useFields();

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

  return productList ? (
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
      searchPlaceholder={'search'}
    />
  ) : null;
};
