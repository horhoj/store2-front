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
import { useFields } from './hooks';

export const ProductListForm: React.FC = () => {
  const dispatch = useAppDispatch();
  const productList = useAppSelector(
    productListSelectors.getProductListResponse,
  );

  const isLoading = useAppSelector(productListSelectors.getIsLoading);

  useEffect(() => {
    dispatch(productListWorkers.fetchData({}));
  }, []);

  const fields = useFields();

  const handlePaginationBtnClk = (
    e: React.ChangeEvent<unknown>,
    page: number,
  ) => {
    dispatch(productListWorkers.fetchData({ page }));
  };

  return productList ? (
    <Wrap>
      {productList ? (
        <DataGrid
          rows={productList.data}
          fields={fields}
          disabled={isLoading}
        />
      ) : null}
      <StyledPagination
        count={productList.per_page}
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
  margin-top: ${({ theme }) => (theme as Theme).spacing(2)}px;
  margin-left: auto;
  margin-right: auto;
`;
