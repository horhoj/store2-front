import React, { useState } from 'react';
import { useCategoryListFields } from '../../../../categoryList/CategoryListForm/hooks';
import { EntityListSubform } from '../../../../../components/EntityListSubform';
import { logger } from '../../../../../utils/logger';
import { useAppTranslation } from '../../../../../i18n/useAppTranslation';
import { AppModal } from '../../../../../components/AppModal';
import { CategoryListForm } from '../../../../categoryList/CategoryListForm';
import { CategoryListItem } from '../../../../categoryList/types';
import { useAppDispatch } from '../../../../../store/hooks';
import { flashMessagesWorkers } from '../../../../../store/flashMessages';
import { CategoryListSubformProps } from './types';

export const CategoryListSubform: React.FC<CategoryListSubformProps> = ({
  entityList,
  changeCb,
  isLoading,
}) => {
  const categoryListSubformFields = useCategoryListFields();
  const t = useAppTranslation();
  logger('CategoryListSubform RERENDER!');

  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const addCb = () => {
    setOpen(true);
  };

  const closeModalCb = () => {
    setOpen(false);
  };

  const selectCb = (category: CategoryListItem) => {
    const isSelected =
      entityList.filter((item) => item.id === category.id).length > 0;
    if (!isSelected) {
      changeCb([...entityList, category]);
      setOpen(false);
    } else {
      dispatch(
        flashMessagesWorkers.addMessageWorker({
          msg: 'features__product-form__category-list-subform__category-subform__msg__category_already-been-selected',
          type: 'warning',
        }),
      );
    }
  };

  return (
    <>
      <AppModal open={open} closeCb={closeModalCb}>
        <CategoryListForm isModal={true} selectCb={selectCb} />
      </AppModal>
      <EntityListSubform
        entityList={entityList}
        addCb={addCb}
        fields={categoryListSubformFields}
        defaultSortFieldName={'id'}
        searchPlaceholder={t(
          'features__product-form__category-list-subform__action-column-title',
        )}
        actionColumnTitle={t(
          'features__product-form__category-list-subform__search-placeholder',
        )}
        changeCb={changeCb}
        isLoading={isLoading}
        searchNotFoundMsg={t(
          'features__product-form__category-list-subform__search-not-found-msg',
        )}
      />
    </>
  );
};
