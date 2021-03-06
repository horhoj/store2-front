import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import { FormikConfig, useFormik } from 'formik';
import { FormHelperText, Typography } from '@material-ui/core';
import Link from '@material-ui/core/Link';
import { UserCredentials } from '../../types/userData';
import {
  DEFAULT_SIGN_IN_EMAIL,
  DEFAULT_SIGN_IN_PASSWORD,
} from '../../config/config';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { authSelectors, authWorkers } from '../../store/auth';
import { StyledFieldSet } from '../../theme/styled';
import { useAppTranslation } from '../../i18n/useAppTranslation';
import { RequestErrorView } from '../../components/RequestErrorView';
import { getPathByName } from '../../router';
import { appActions } from '../../store/app';
import { useSignInValidationSchema } from './hooks';

const initialValues: UserCredentials = {
  email: DEFAULT_SIGN_IN_EMAIL,
  password: DEFAULT_SIGN_IN_PASSWORD,
};

export const SignInPage: React.FC = () => {
  const t = useAppTranslation();
  const dispatch = useAppDispatch();
  const requestError = useAppSelector(authSelectors.getRequestError);
  const isLoading = useAppSelector(authSelectors.getIsLoading);

  const validationSchema = useSignInValidationSchema();

  const formikConfig: FormikConfig<UserCredentials> = {
    enableReinitialize: false,
    initialValues,
    onSubmit: (values) => {
      dispatch(authWorkers.authSignUp(values));
    },
    validationSchema,
  };

  const formik = useFormik<UserCredentials>(formikConfig);

  const handleSignUpLinkClk = (e: React.MouseEvent) => {
    e.preventDefault();
    const path = getPathByName('signUp');
    dispatch(appActions.redirect(path));
  };

  const requestErrorRender = requestError ? (
    <RequestErrorView requestError={requestError} />
  ) : null;

  return (
    <Container component="main" maxWidth="xs">
      <Wrap>
        <StyledAvatar>
          <LockOutlinedIcon />
        </StyledAvatar>
        <Typography component="h1" variant="h5">
          {t('page__sign-in__page-title')}
        </Typography>
        <StyledFieldSet disabled={isLoading} fullWidth={true}>
          <Form noValidate onSubmit={formik.handleSubmit}>
            {requestErrorRender}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              autoComplete="email"
              type="email"
              label={t('page__sign-in__form-label__email')}
              {...formik.getFieldProps('email')}
            />
            <FormHelperText error={true}>{formik.errors.email}</FormHelperText>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label={t('page__sign-in__form-label__password')}
              type="password"
              autoComplete="current-password"
              {...formik.getFieldProps('password')}
            />
            <FormHelperText error={true}>
              {formik.errors.password}
            </FormHelperText>
            <StyledButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={isLoading}
            >
              {t('page__sign-in__form-label__submit-btn')}
            </StyledButton>
          </Form>
        </StyledFieldSet>
        <Typography>
          <Link href="#" onClick={handleSignUpLinkClk}>
            {t('page__sign-in__sign-up-link')}
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
