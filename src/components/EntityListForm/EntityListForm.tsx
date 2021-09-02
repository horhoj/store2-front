import React from 'react';
import UpdateIcon from '@material-ui/icons/Update';
import ClearIcon from '@material-ui/icons/Clear';
import styled from 'styled-components';
import { Box, Button, Theme } from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { DebouncedInput } from '../DebouncedInput';
import { DEFAULT_DEBOUNCED_INPUT_DELAY } from '../../config/config';
import { DataGrid } from '../DataGrid';
import { EntityListFormProps } from './types';

export const EntityListForm: React.FC<EntityListFormProps> = ({
  disabled,
  updateCb,
  searchClearCb,
  searchCb,
  searchStr,
  rows,
  fields,
  columnHeaderClkCb,
  sortField,
  sortAsc,
  pageCount,
  page,
  paginationBtnClkCb,
  searchPlaceholder,
}) => {
  return (
    <Wrap>
      <SearchWrap>
        <SearchBtn onClick={updateCb} disabled={disabled}>
          <UpdateIcon />
        </SearchBtn>
        <SearchBtn disabled={disabled} onClick={searchClearCb}>
          <ClearIcon />
        </SearchBtn>
        <DebouncedInput
          placeholder={searchPlaceholder}
          disabled={disabled}
          handleSearchCb={searchCb}
          value={searchStr}
          delay={DEFAULT_DEBOUNCED_INPUT_DELAY}
        />
      </SearchWrap>
      <DataGrid
        rows={rows}
        fields={fields}
        disabled={disabled}
        handleColumnClkCb={columnHeaderClkCb}
        sortField={sortField}
        sortAsc={sortAsc}
        searchStr={searchStr}
      />
      <StyledPagination
        count={pageCount}
        page={page}
        onChange={(e, page: number) => paginationBtnClkCb(page)}
        disabled={disabled}
      />
    </Wrap>
  );
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
