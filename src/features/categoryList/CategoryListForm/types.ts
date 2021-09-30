import { CategoryListItem } from '../types';

export interface CategoryListFormProps {
  isModal?: boolean;
  selectCb?(category: CategoryListItem): void;
}
