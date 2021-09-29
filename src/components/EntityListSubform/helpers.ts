import { DataGridColumn, DataGridRow } from '../DataGrid/types';

export const searchFilter = (
  searchStr: string,
  entityList: DataGridRow[],
  fields: DataGridColumn<string>[],
): DataGridRow[] => {
  if (searchStr === '') {
    return entityList;
  }
  return entityList.filter((item) => {
    const fieldNames = fields.map((field) => field.name);

    return (
      fieldNames
        .map((fieldName) => String(item[fieldName]).includes(searchStr))
        .filter((rowResult) => rowResult).length > 0
    );
  });
};

export const rowsOnCurrentPageFilter = (
  offset: number,
  perPage: number,
  rows: DataGridRow[],
): DataGridRow[] =>
  rows.filter((row, index) => index >= offset && index < offset + perPage);

export const sortRows = (
  sortField: string,
  sortAsc: boolean,
  rows: DataGridRow[],
): DataGridRow[] => {
  //клонируем массив, что бы не допустить мутации
  const clonedRows = [...rows];

  //если массив пустой то незачем выполнять лишние операции
  if (rows.length === 0) {
    return clonedRows;
  }

  clonedRows.sort((a, b) => {
    const aSortValue = a[sortField];
    const bSortValue = b[sortField];

    if (aSortValue === bSortValue) {
      return 0;
    }

    if (aSortValue === null || bSortValue === null) {
      return 0;
    }

    if (aSortValue === undefined || bSortValue === undefined) {
      return 0;
    }

    return aSortValue > bSortValue ? 1 : -1;
  });

  if (!sortAsc) {
    clonedRows.reverse();
  }

  return clonedRows;
};

export const deleteRow = (
  id: number,
  entityList: DataGridRow[],
): DataGridRow[] => entityList.filter((row) => row.id !== id);
