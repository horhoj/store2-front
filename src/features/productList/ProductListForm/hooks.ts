import { useAppTranslation } from '../../../i18n/useAppTranslation';
import { DataGridColumn } from '../../../components/DataGrid/types';
import { ProductListItemKeys } from '../types';

export const useFields = (): DataGridColumn<ProductListItemKeys>[] => {
  const t = useAppTranslation();

  return [
    {
      id: 1,
      name: 'id',
      title: t('features__product-list-form__data-grid-column__id'),
    },
    {
      id: 2,
      name: 'title',
      title: t('features__product-list-form__data-grid-column__title'),
    },
    {
      id: 3,
      name: 'description',
      title: t('features__product-list-form__data-grid-column__description'),
    },
    {
      id: 4,
      name: 'options',
      title: t('features__product-list-form__data-grid-column__options'),
    },
  ];
};
