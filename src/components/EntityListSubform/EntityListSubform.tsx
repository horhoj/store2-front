import React, { useState } from 'react';
import { EntityListForm } from '../EntityListForm';
import { ActionRowPanelDefault } from '../ActionRowPanelDefault';
import { EntityListSubformProps } from './types';
import {
  deleteRow,
  rowsOnCurrentPageFilter,
  searchFilter,
  sortRows,
} from './helpers';

export const EntityListSubform: React.FC<EntityListSubformProps> = ({
  entityList,
  fields,
  defaultSortFieldName,
  actionColumnTitle,
  searchPlaceholder,
  changeCb,
  isLoading,
  searchNotFoundMsg,
  addCb,
}) => {
  const [page, setPage] = useState<number>(1);
  const [perPage, setPerPage] = useState<number>(5);
  const [searchStr, setSearchStr] = useState<string>('');
  const [sortField, setSortField] = useState<string>(defaultSortFieldName);
  const [sortAsc, setSortAsc] = useState<boolean>(true);

  const getRows = () => {
    //получаем фильтрованные по searchStr значения
    const foundRows = searchFilter(searchStr, entityList, fields);
    const foundAndSortRows = sortRows(sortField, sortAsc, foundRows);
    const pageCount = Math.ceil(foundAndSortRows.length / perPage);
    const offset = (page - 1) * perPage;
    const foundAndSortRowsOnCurrentPage = rowsOnCurrentPageFilter(
      offset,
      perPage,
      foundAndSortRows,
    );

    return { rows: foundAndSortRowsOnCurrentPage, pageCount };
  };

  const changePerPageCb = (perPage: number) => {
    setPage(1);
    setPerPage(perPage);
  };

  const columnHeaderClkCb = (fieldName: string) => {
    if (sortField === fieldName) {
      setSortAsc((prev) => !prev);
      return;
    }
    setSortField(fieldName);
    setSortAsc(true);
  };

  const handleDeleteCategory = (id: number) => {
    const newValues = deleteRow(id, entityList);
    changeCb(newValues);
  };

  const searchClearCb = () => {
    setPage(1);
    setSearchStr('');
  };

  const actionRowPanelRender = (id: number) => {
    return (
      <ActionRowPanelDefault
        isDeleteBtn={true}
        isEditBtn={false}
        isSelectBtn={false}
        disabled={false}
        id={id}
        handleDeleteCb={handleDeleteCategory}
      />
    );
  };

  return (
    <>
      <EntityListForm
        fields={fields}
        rows={getRows().rows}
        page={page}
        sortAsc={sortAsc}
        perPage={perPage}
        sortField={sortField}
        pageCount={getRows().pageCount}
        actionRowPanelRender={actionRowPanelRender}
        addCb={addCb}
        actionColumnTitle={actionColumnTitle}
        changePerPageCb={changePerPageCb}
        searchPlaceholder={searchPlaceholder}
        disabled={isLoading}
        searchStr={searchStr}
        paginationBtnClkCb={setPage}
        columnHeaderClkCb={columnHeaderClkCb}
        searchCb={setSearchStr}
        searchClearCb={searchClearCb}
        updateCb={() => {}}
        searchNotFoundMsg={searchNotFoundMsg}
      />
    </>
  );
};
