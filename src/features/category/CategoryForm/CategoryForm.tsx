import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  categoryActions,
  categorySelectors,
  categoryWorkers,
} from '../categoryReducer';
import { NEW_ENTITY_ITEM_ID } from '../../../config/config';
import { PageTitle } from '../../../components/PageTitle';
import { useAppTranslation } from '../../../i18n/useAppTranslation';
import { CategoryResponseType } from '../types';
import { RequestErrorView } from '../../../components/RequestErrorView';
import { CategoryFormProps } from './types';
import { prepareCategoryFormData } from './helpers';

export const CategoryForm: React.FC<CategoryFormProps> = ({ id }) => {
  const [currentValues, setCurrentValues] = useState<CategoryResponseType>({
    id: 0,
    title: '',
    description: '',
  });

  const dispatch = useAppDispatch();
  const isNew = id === NEW_ENTITY_ITEM_ID;
  const t = useAppTranslation();
  const categoryResponse = useAppSelector(
    categorySelectors.getCategoryResponse,
  );
  const requestError = useAppSelector(categorySelectors.getRequestError);
  const isLoading = useAppSelector(categorySelectors.getIsLoading);

  useEffect(() => {
    if (!isNew) {
      dispatch(categoryWorkers.categoryFetchData(Number(id)));
    }
    return () => {
      dispatch(categoryActions.clear());
    };
  }, []);

  useEffect(() => {
    if (categoryResponse) {
      const data = prepareCategoryFormData(categoryResponse);
      setCurrentValues(data);
    }
  }, [categoryResponse]);

  const titleRender = (
    <PageTitle>
      {isNew
        ? t('features__category-form__page-new-title')
        : t('features__category-form__page-edit-title', { id })}
    </PageTitle>
  );

  const requestErrorRender = requestError ? (
    <RequestErrorView requestError={requestError} />
  ) : null;

  return (
    <>
      {titleRender}
      {requestErrorRender}
      <pre>{JSON.stringify(currentValues, null, 2)}</pre>
    </>
  );
};
