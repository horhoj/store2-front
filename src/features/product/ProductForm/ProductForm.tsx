import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import { Box, Button, Theme } from '@material-ui/core';
import { FormikConfig, useFormik } from 'formik';
import {
  productActions,
  productSelectors,
  productWorkers,
} from '../productReducer';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { useAppTranslation } from '../../../i18n/useAppTranslation';
import { getProductResponseSchema, ProductResponseType } from '../types';
import { getPathByName } from '../../../router';
import { appActions } from '../../../store/app';
import { PageTitle } from '../../../components/PageTitle';
import { RequestErrorView } from '../../../components/RequestErrorView';
import { StyledFieldSet } from '../../../theme/styled';
import { NEW_ENTITY_ITEM_ID } from '../../../config/config';
import { ProductFormProps } from './types';
import { prepareProductFormData, prepareProductRequestData } from './helpers';

export const ProductForm: React.FC<ProductFormProps> = ({ id }) => {
  const [currentValues, setCurrentValues] = useState<ProductResponseType>({
    id: 0,
    title: '',
    description: '',
    options: '',
    categories: [],
  });
  const dispatch = useAppDispatch();
  const t = useAppTranslation();
  const productResponse = useAppSelector(productSelectors.getProductResponse);
  const requestError = useAppSelector(productSelectors.getRequestError);
  const isLoading = useAppSelector(productSelectors.getIsLoading);

  const isNew = id === NEW_ENTITY_ITEM_ID;

  useEffect(() => {
    if (productResponse) {
      const data = prepareProductFormData(productResponse);
      setCurrentValues(data);
    }
  }, [productResponse]);

  useEffect(() => {
    if (!isNew) {
      dispatch(productWorkers.productFetchData(Number(id)));
    }
    return () => {
      dispatch(productActions.clear());
    };
  }, []);

  const validationSchema = getProductResponseSchema(t);

  const formikConfig: FormikConfig<ProductResponseType> = {
    enableReinitialize: true,
    initialValues: currentValues,
    onSubmit: (values) => {
      const requestData = prepareProductRequestData(values);
      if (isNew) {
        dispatch(productWorkers.productNew(requestData));
        return;
      }
      dispatch(productWorkers.productPatchData(requestData));
    },
    validationSchema,
  };

  const formik = useFormik<ProductResponseType>(formikConfig);

  const handlePreviousBtnClk = () => {
    const path = getPathByName('productList');
    dispatch(appActions.redirect(path));
  };

  const titleRender = (
    <PageTitle>
      {isNew
        ? t('features__product-form__page-new-title')
        : t('features__product-form__page-edit-title', { id })}
    </PageTitle>
  );

  const requestErrorRender = requestError ? (
    <RequestErrorView requestError={requestError} />
  ) : null;

  const productFormRender = (
    <StyledFieldSet disabled={isLoading} fullWidth={true}>
      <form noValidate onSubmit={formik.handleSubmit}>
        <StyledTextField
          variant="outlined"
          fullWidth={true}
          required
          label={t('features__product-form__input-label-title')}
          {...formik.getFieldProps('title')}
          helperText={formik.errors.title}
          error={Boolean(formik.errors.title)}
        />

        <StyledTextField
          variant="outlined"
          fullWidth={true}
          label={t('features__product-form__input-label-description')}
          {...formik.getFieldProps('description')}
          helperText={formik.errors.description}
          error={Boolean(formik.errors.description)}
        />
        <StyledTextField
          variant="outlined"
          fullWidth={true}
          label={t('features__product-form__input-label-options')}
          {...formik.getFieldProps('options')}
          helperText={formik.errors.options}
          error={Boolean(formik.errors.options)}
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
      {productFormRender}
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
