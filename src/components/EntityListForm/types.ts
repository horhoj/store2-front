import { DataGridColumn, DataGridRow } from '../DataGrid/types';

export interface EntityListFormProps {
  disabled: boolean;
  updateCb(): void;
  searchClearCb(): void;
  searchCb(searchStr: string): void;
  searchStr: string;
  rows: DataGridRow[];
  fields: DataGridColumn<string>[];
  columnHeaderClkCb(fieldName: string): void;
  sortField: string;
  sortAsc: boolean;
  pageCount: number;
  page: number;
  paginationBtnClkCb(page: number): void;
  searchPlaceholder: string;
  searchNotFoundMsg: string;
  perPage: number;
  changePerPageCb(perPage: number): void;
  actionColumnTitle: string;
  actionRowPanelRender(id: number): JSX.Element;
  addCb(): void;
}
