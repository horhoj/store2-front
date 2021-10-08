import React from 'react';
import UpdateIcon from '@material-ui/icons/Update';
import ClearIcon from '@material-ui/icons/Clear';
import AddIcon from '@material-ui/icons/Add';
import styled from 'styled-components';
import {
  Box,
  Button,
  MenuItem,
  Select,
  Theme,
  Typography,
} from '@material-ui/core';
import Pagination from '@material-ui/lab/Pagination';
import { DebouncedInput } from '../DebouncedInput';
import {
  DEFAULT_DEBOUNCED_INPUT_DELAY,
  DEFAULT_ENTITY_LIST_ALLOWABLE_VALUES,
} from '../../config/config';
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
  perPage,
  changePerPageCb,
  actionColumnTitle,
  actionRowPanelRender,
  addCb,
  searchNotFoundMsg,
  isEmpty,
}) => {
  const handleChangeSearchStr = (newSearchStr: string) => {
    if (searchStr.trim() !== newSearchStr.trim()) {
      searchCb(newSearchStr.trim());
    }
  };

  return (
    <Wrap>
      <SearchWrap>
        <StyledBtn disabled={disabled} onClick={addCb}>
          <AddIcon />
        </StyledBtn>
        <StyledBtn onClick={updateCb} disabled={disabled}>
          <UpdateIcon />
        </StyledBtn>
        {isEmpty && searchStr === '' ? null : (
          <>
            <StyledBtn disabled={disabled} onClick={searchClearCb}>
              <ClearIcon />
            </StyledBtn>
            <DebouncedInput
              placeholder={searchPlaceholder}
              disabled={disabled}
              handleSearchCb={handleChangeSearchStr}
              value={searchStr}
              delay={DEFAULT_DEBOUNCED_INPUT_DELAY}
            />
          </>
        )}
      </SearchWrap>
      {isEmpty && searchStr !== '' ? (
        <Typography>{searchNotFoundMsg}</Typography>
      ) : null}
      {isEmpty ? null : (
        <>
          <DataGrid
            rows={rows}
            fields={fields}
            disabled={disabled}
            columnClkCb={columnHeaderClkCb}
            sortField={sortField}
            sortAsc={sortAsc}
            searchStr={searchStr}
            actionColumnTitle={actionColumnTitle}
            actionRowPanelRender={actionRowPanelRender}
            perPage={perPage}
            page={page}
          />
          <PerPageSelect
            value={perPage}
            disabled={disabled}
            onChange={(e) => {
              changePerPageCb(Number(e.target.value));
            }}
          >
            {DEFAULT_ENTITY_LIST_ALLOWABLE_VALUES.map((value) => (
              <MenuItem value={value} key={value}>
                {value}
              </MenuItem>
            ))}
          </PerPageSelect>
          <StyledPagination
            count={pageCount}
            page={page}
            onChange={(e, page: number) => paginationBtnClkCb(page)}
            disabled={disabled}
          />
        </>
      )}
    </Wrap>
  );
};

const Wrap = styled(Box)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

const StyledPagination = styled(Pagination)`
  margin-top: ${({ theme }) => (theme as Theme).spacing(2)}px;
`;

const SearchWrap = styled(Box)`
  display: flex;
  width: 100%;
`;

const StyledBtn = styled(Button)`
  min-width: 40px;
  min-height: 40px;

  &:last-child {
    margin-right: 40px;
  }
`;

const PerPageSelect = styled(Select)`
  margin-top: ${({ theme }) => (theme as Theme).spacing(2)}px;
`;
