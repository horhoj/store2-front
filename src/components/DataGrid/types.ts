export interface DataGridProps {
  fields: DataGridColumn[];
  rows: DataGridRow[];
  disabled: boolean;
  columnClkCb(fieldName: string): void;
  sortField: string;
  sortAsc: boolean;
  searchStr: string;
  actionColumnTitle: string;
  actionRowPanelRender(id: number): JSX.Element;
}

export interface DataGridColumn<T = string> {
  id: number;
  name: T;
  title: string;
}

export interface DataGridRow {
  id: number;

  [keys: string]: number | string | null | undefined;
}
