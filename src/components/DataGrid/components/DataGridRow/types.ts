import { DataGridColumn, DataGridRow } from '../../types';

export interface DataGridRowProps {
  row: DataGridRow;
  fields: DataGridColumn[];
  searchStr: string;
  actionRowPanelRender(id: number): JSX.Element;
  index: number;
}
