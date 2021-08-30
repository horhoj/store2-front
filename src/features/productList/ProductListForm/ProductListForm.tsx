import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Box, Theme } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  productListSelectors,
  productListWorkers,
} from '../ProductListReducer';
import { DataGrid } from '../../../components/DataGrid';
import { Product } from '../../../types/product';
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

  const handlePaginationBtnClk = (
    e: React.ChangeEvent<unknown>,
    page: number,
  ) => {
    dispatch(productListWorkers.goToPage(page));
  };

  return productList ? (
    <Wrap>
      <DataGrid
        rows={productList.data}
        fields={fields}
        disabled={isLoading}
        handleColumnClkCb={handleColumnHeaderClk}
        sortField={requestOptions.sort_field}
        sortAsc={Boolean(requestOptions.sort_asc)}
      />
      <StyledPagination
        count={productList.last_page}
        page={productList.current_page}
        onChange={handlePaginationBtnClk}
        disabled={isLoading}
      />
    </Wrap>
  ) : null;
};

const Wrap = styled(Box)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const StyledPagination = styled(Pagination)`
  margin: ${({ theme }) => (theme as Theme).spacing(2)}px auto 0;
`;
