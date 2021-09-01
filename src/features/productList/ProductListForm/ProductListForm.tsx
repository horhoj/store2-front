import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Box, Button, Theme } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import ClearIcon from '@material-ui/icons/Clear';
import UpdateIcon from '@material-ui/icons/Update';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  productListSelectors,
  productListWorkers,
} from '../ProductListReducer';
import { DataGrid } from '../../../components/DataGrid';
import { Product } from '../../../types/product';
import { DebouncedInput } from '../../../components/DebouncedInput';
import { DEFAULT_DEBOUNCED_INPUT_DELAY } from '../../../config/config';
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
    <Wrap>
      <SearchWrap>
        <SearchBtn onClick={handleUpdateBtnClk} disabled={isLoading}>
          <UpdateIcon />
        </SearchBtn>
        <SearchBtn disabled={isLoading} onClick={handleSearchClearBtn}>
          <ClearIcon />
        </SearchBtn>
        <DebouncedInput
          placeholder="find"
          disabled={isLoading}
          handleSearchCb={handleSearchCb}
          value={requestOptions.search}
          delay={DEFAULT_DEBOUNCED_INPUT_DELAY}
        />
      </SearchWrap>
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

const SearchWrap = styled(Box)`
  display: flex;
  width: 100%;
`;

const SearchBtn = styled(Button)`
  min-width: 40px;
  min-height: 40px;
  &:last-child {
    margin-right: 40px;
  }
`;
