import { DataGridColumn } from '../../types';

export interface DataGridHeadRowProps {
  fields: DataGridColumn[];
  handleColumnHeaderClkCb(fieldName: string): void;
  sortField: string;
  sortAsc: boolean;
  disabled: boolean;
  actionColumnTitle: string;
}
