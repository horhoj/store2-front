import React from 'react';
import { useCategoryListFields } from '../../../../categoryList/CategoryListForm/hooks';
import { EntityListSubform } from '../../../../../components/EntityListSubform';
import { logger } from '../../../../../utils/logger';
import { useAppTranslation } from '../../../../../i18n/useAppTranslation';
import { CategoryListSubformProps } from './types';

export const CategoryListSubform: React.FC<CategoryListSubformProps> = ({
  entityList,
  changeCb,
}) => {
  const categoryListSubformFields = useCategoryListFields();
  const t = useAppTranslation();
  logger('CategoryListSubform RERENDER!');
  return (
    <>
      <EntityListSubform
        entityList={entityList}
        fields={categoryListSubformFields}
        defaultSortFieldName={'id'}
        searchPlaceholder={t(
          'features__product-form__category-list-subform__action-column-title',
        )}
        actionColumnTitle={t(
          'features__product-form__category-list-subform__search-placeholder',
        )}
        changeCb={changeCb}
      />
    </>
  );
};
