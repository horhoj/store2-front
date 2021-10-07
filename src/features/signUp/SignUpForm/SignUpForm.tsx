import React from 'react';
import { FormikConfig, useFormik } from 'formik';
import styled from 'styled-components';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { Container, Typography } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import { getSignUpFormValidationSchema, SignUpData } from '../types';
import { useAppTranslation } from '../../../i18n/useAppTranslation';
import { StyledFieldSet } from '../../../theme/styled';
import { getPathByName } from '../../../router';
import { appActions } from '../../../store/app';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { signUpSelectors, signUpWorkers } from '../signUpReducer';
import { RequestErrorView } from '../../../components/RequestErrorView';
import { RequestErrorMessageList } from '../../../components/RequestErrorView/types';
import { QueryFieldsError } from './QueryFieldsError';

const initialValues: SignUpData = {
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
};

const localOverrideRequestErrorMessageList: RequestErrorMessageList = {
  422: 'page__sign-up__request-error-status-422',
};

export const SignUpForm: React.FC = () => {
  const t = useAppTranslation();

  const validationSchema = getSignUpFormValidationSchema(t);
  const isLoading = useAppSelector(signUpSelectors.getIsLoading);
  const requestError = useAppSelector(signUpSelectors.getRequestError);

  const formikConfig: FormikConfig<SignUpData> = {
    enableReinitialize: true,
    initialValues,
    onSubmit: (values) => {
      dispatch(signUpWorkers.addNewUser(values));
    },
    validationSchema,
  };

  const formik = useFormik(formikConfig);
  const dispatch = useAppDispatch();

  const handleSignInLinkClk = (e: React.MouseEvent) => {
    e.preventDefault();
    const path = getPathByName('signIn');
    dispatch(appActions.redirect(path));
  };

  const requestErrorRender = requestError ? (
    <RequestErrorView
      requestError={requestError}
      localOverrideRequestErrorMessageList={
        localOverrideRequestErrorMessageList
      }
    >
      <QueryFieldsError requestError={requestError} />
    </RequestErrorView>
  ) : null;

  return (
    <Container component="main" maxWidth="xs">
      <Wrap>
        <StyledAvatar>
          <LockOutlinedIcon />
        </StyledAvatar>
        <Typography component="h1" variant="h5">
          {t('page__sign-up__page-title')}
        </Typography>
        <StyledFieldSet disabled={isLoading} fullWidth={true}>
          <Form noValidate onSubmit={formik.handleSubmit} autoComplete={'off'}>
            {requestErrorRender}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              type="text"
              label={t('page__sign-up__form-label__name')}
              {...formik.getFieldProps('name')}
              helperText={formik.touched.name && formik.errors.name}
              error={Boolean(formik.touched.name && formik.errors.name)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              type="email"
              label={t('page__sign-up__form-label__email')}
              {...formik.getFieldProps('email')}
              helperText={formik.touched.email && formik.errors.email}
              error={Boolean(formik.touched.email && formik.errors.email)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              type="password"
              label={t('page__sign-up__form-label__password')}
              {...formik.getFieldProps('password')}
              helperText={formik.touched.password && formik.errors.password}
              error={Boolean(formik.touched.password && formik.errors.password)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              type="password"
              label={t('page__sign-up__form-label__password-confirm')}
              {...formik.getFieldProps('password_confirmation')}
              helperText={
                formik.touched.password_confirmation &&
                formik.errors.password_confirmation
              }
              error={Boolean(
                formik.touched.password_confirmation &&
                  formik.errors.password_confirmation,
              )}
            />
            <StyledButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={isLoading}
            >
              {t('page__sign-up__form-label__submit-btn')}
            </StyledButton>
          </Form>
        </StyledFieldSet>
        <Typography>
          <Link href="#" onClick={handleSignInLinkClk}>
            {t('page__sign-up__sign-in-link')}
          </Link>
        </Typography>
      </Wrap>
    </Container>
  );
};

const Wrap = styled(Box)`
  margin-top: ${({ theme }) => theme.spacing(8)}px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledAvatar = styled(Avatar)`
  margin: ${({ theme }) => theme.spacing(1)}px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
`;

const Form = styled.form`
  width: 100%;
  margin-top: ${({ theme }) => theme.spacing(1)}px;
`;

const StyledButton = styled(Button)`
  margin: ${({ theme }) => theme.spacing(3, 0, 2)};
`;
