import { DataGridRow } from '../../../../../components/DataGrid/types';

export interface CategoryListSubformProps {
  entityList: DataGridRow[];
  changeCb(values: DataGridRow[]): void;
  isLoading: boolean;
}
