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
import { ProductResponseType } from '../types';
import { logger } from '../../../utils/logger';
import { getPathByName } from '../../../router';
import { appActions } from '../../../store/app';
import { PageTitle } from '../../../components/PageTitle';
import { ProductFormProps } from './types';

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

  useEffect(() => {
    if (productResponse) {
      setCurrentValues(productResponse);
    }
  }, [productResponse]);

  useEffect(() => {
    dispatch(productWorkers.productFetchData(Number(id)));
    return () => {
      dispatch(productActions.clear());
    };
  }, []);

  const formikConfig: FormikConfig<ProductResponseType> = {
    enableReinitialize: true,
    initialValues: currentValues,
    onSubmit: (values) => {
      logger('ProductForm formSubmit', values);
    },
  };

  const formik = useFormik<ProductResponseType>(formikConfig);

  const handlePreviousBtnClk = () => {
    const path = getPathByName('productList');
    dispatch(appActions.redirect(path));
  };

  return (
    <>
      <PageTitle>
        {t('features__product-form__page-edit-title', { id })}
      </PageTitle>
      <form noValidate onSubmit={formik.handleSubmit}>
        <StyledTextField
          variant="outlined"
          fullWidth={true}
          required
          label={t('features__product-form__input-label-title')}
          {...formik.getFieldProps('title')}
        />
        <StyledTextField
          variant="outlined"
          fullWidth={true}
          label={t('features__product-form__input-label-description')}
          {...formik.getFieldProps('description')}
        />
        <StyledTextField
          variant="outlined"
          fullWidth={true}
          label={t('features__product-form__input-label-options')}
          {...formik.getFieldProps('options')}
        />
        <ButtonWrap>
          <StyledButton type={'submit'} color={'primary'} variant={'contained'}>
            {t('features__product-form__button-title-save')}
          </StyledButton>
          <StyledButton
            type={'button'}
            color={'primary'}
            variant={'contained'}
            onClick={handlePreviousBtnClk}
          >
            {t('features__product-form__button-title-previous')}
          </StyledButton>
        </ButtonWrap>
      </form>
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
