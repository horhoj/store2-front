export interface DataGridProps {
  fields: DataGridColumn[];
  rows: DataGridRow[];
  disabled: boolean;
}

export interface DataGridColumn<T = string> {
  id: number;
  name: T;
  title: string;
}

export interface DataGridRow {
  id: number;
  [keys: string]: any;
}
