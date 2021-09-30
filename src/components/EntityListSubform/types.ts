import { DataGridColumn, DataGridRow } from '../DataGrid/types';

export interface EntityListSubformProps {
  entityList: DataGridRow[];
  fields: DataGridColumn<string>[];
  defaultSortFieldName: string;
  actionColumnTitle: string;
  searchPlaceholder: string;
  changeCb(values: DataGridRow[]): void;
  isLoading: boolean;
  searchNotFoundMsg: string;
  addCb(): void;
}
