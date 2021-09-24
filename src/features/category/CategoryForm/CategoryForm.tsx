import React, { useEffect } from 'react';
import { FormikConfig, useFormik } from 'formik';
import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import { Box, Button, Theme } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  categoryActions,
  categorySelectors,
  categoryWorkers,
} from '../categoryReducer';
import { NEW_ENTITY_ITEM_ID } from '../../../config/config';
import { PageTitle } from '../../../components/PageTitle';
import { useAppTranslation } from '../../../i18n/useAppTranslation';
import { CategoryResponseType, getCategoryResponseSchema } from '../types';
import { RequestErrorView } from '../../../components/RequestErrorView';
import { StyledFieldSet } from '../../../theme/styled';
import { getPathByName } from '../../../router';
import { appActions } from '../../../store/app';
import { CategoryFormProps } from './types';
import { prepareCategoryFormData, prepareCategoryRequestData } from './helpers';

export const CategoryForm: React.FC<CategoryFormProps> = ({ id }) => {
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

  const currentValues: CategoryResponseType = categoryResponse
    ? prepareCategoryFormData(categoryResponse)
    : {
        id: 0,
        title: '',
        description: '',
      };

  const formikConfig: FormikConfig<CategoryResponseType> = {
    enableReinitialize: true,
    initialValues: currentValues,
    onSubmit: (values) => {
      const requestData = prepareCategoryRequestData(values);
      if (isNew) {
        dispatch(categoryWorkers.categoryNew(requestData));
        return;
      }
      dispatch(categoryWorkers.categoryPatchData(requestData));
    },
    validationSchema: getCategoryResponseSchema(t),
  };

  const formik = useFormik<CategoryResponseType>(formikConfig);

  const handlePreviousBtnClk = () => {
    const path = getPathByName('categoryList');
    dispatch(appActions.redirect(path));
  };

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

  const categoryFormRender = (
    <StyledFieldSet disabled={isLoading} fullWidth={true}>
      <form noValidate onSubmit={formik.handleSubmit}>
        <StyledTextField
          variant="outlined"
          fullWidth={true}
          required
          label={t('features__category-form__input-label-title')}
          {...formik.getFieldProps('title')}
          helperText={formik.errors.title}
          error={Boolean(formik.errors.title)}
        />
        <StyledTextField
          variant="outlined"
          fullWidth={true}
          label={t('features__category-form__input-label-description')}
          {...formik.getFieldProps('description')}
          helperText={formik.errors.description}
          error={Boolean(formik.errors.description)}
        />
        <ButtonWrap>
          <StyledButton
            type={'submit'}
            color={'primary'}
            variant={'contained'}
            disabled={isLoading}
          >
            {t('features__product-form__button-title-save')}
          </StyledButton>
          <StyledButton
            type={'button'}
            color={'primary'}
            variant={'contained'}
            onClick={handlePreviousBtnClk}
            disabled={isLoading}
          >
            {t('features__product-form__button-title-previous')}
          </StyledButton>
        </ButtonWrap>
      </form>
    </StyledFieldSet>
  );

  return (
    <>
      {titleRender}
      {requestErrorRender}
      {categoryFormRender}
    </>
  );
};

const StyledTextField = styled(TextField)`
  margin-top: ${({ theme }) => (theme as Theme).spacing(2)}px;
`;
const ButtonWrap = styled(Box)`
  margin-top: ${({ theme }) => (theme as Theme).spacing(2)}px;
`;

const StyledButton = styled(Button)`
  &:not(:last-child) {
    margin-right: ${({ theme }) => (theme as Theme).spacing(2)}px;
  }
  min-width: 130px;
`;
