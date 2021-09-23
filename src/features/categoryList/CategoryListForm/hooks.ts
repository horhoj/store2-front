import { DataGridColumn } from '../../../components/DataGrid/types';
import { CategoryListItemKeys } from '../types';
import { useAppTranslation } from '../../../i18n/useAppTranslation';

export const useCategoryListFields =
  (): DataGridColumn<CategoryListItemKeys>[] => {
    const t = useAppTranslation();

    return [
      {
        id: 1,
        name: 'id',
        title: t('features__category-list-form__data-grid-column__id'),
      },
      {
        id: 2,
        name: 'title',
        title: t('features__category-list-form__data-grid-column__title'),
      },
      {
        id: 3,
        name: 'description',
        title: t('features__category-list-form__data-grid-column__description'),
      },
    ];
  };
