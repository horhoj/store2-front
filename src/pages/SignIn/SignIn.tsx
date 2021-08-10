import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';
import { FormikConfig, useFormik } from 'formik';
import { FormHelperText, Link } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { UserCredentials } from '../../types/userData';
import {
  DEFAULT_SIGN_IN_EMAIL,
  DEFAULT_SIGN_IN_PASSWORD,
} from '../../config/config';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { authSelectors, authWorkers } from '../../store/auth';
import { User } from '../../components/User';
import { StyledFieldSet } from '../../theme/styled';
import { SignInValidationSchema } from './types';
import { getErrorMessage } from './helpers';

const initialFormValues: UserCredentials = {
  email: DEFAULT_SIGN_IN_EMAIL,
  password: DEFAULT_SIGN_IN_PASSWORD,
};

export const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const requestError = useAppSelector(authSelectors.getRequestError);
  const isLoading = useAppSelector(authSelectors.getIsLoading);

  const formikConfig: FormikConfig<UserCredentials> = {
    enableReinitialize: false,
    initialValues: initialFormValues,
    onSubmit: (values) => {
      dispatch(authWorkers.authSignUp(values));
    },
    validationSchema: SignInValidationSchema,
  };

  const formik = useFormik<UserCredentials>(formikConfig);

  return (
    <Container component="main" maxWidth="xs">
      <Wrap>
        <User />
        <StyledAvatar>
          <LockOutlinedIcon />
        </StyledAvatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <StyledFieldSet disabled={isLoading} fullWidth={true}>
          <Form noValidate onSubmit={formik.handleSubmit}>
            {requestError ? (
              <StyledAlert severity={'error'}>
                <AlertTitle>Sign in Error</AlertTitle>
                {getErrorMessage(requestError)}
              </StyledAlert>
            ) : null}
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              autoComplete="email"
              type="email"
              autoFocus
              label="Email"
              {...formik.getFieldProps('email')}
            />
            <FormHelperText error={true}>{formik.errors.email}</FormHelperText>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              autoComplete="current-password"
              {...formik.getFieldProps('password')}
            />
            <FormHelperText error={true}>
              {formik.errors.password}
            </FormHelperText>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <StyledButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              disabled={isLoading}
            >
              Sign In
            </StyledButton>
            <Grid container>
              <Grid item xs>
                <Link href="#" color={'textSecondary'}>
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" color={'textSecondary'}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Form>
        </StyledFieldSet>
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

const StyledAlert = styled(Alert)`
  margin-top: ${({ theme }) => theme.spacing(2)}px;
  width: 100%;
`;
