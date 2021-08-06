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
import { FormHelperText } from '@material-ui/core';
import { Alert, AlertTitle } from '@material-ui/lab';
import { UserCredentials } from '../../types/user';
import {
  DEFAULT_SIGN_IN_EMAIL,
  DEFAULT_SIGN_IN_PASSWORD,
} from '../../config/config';
import { StyledLink } from '../../theme/styled';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { authSelectors, authWorkers } from '../../store/auth';
import { SignInValidationSchema } from './types';
import { getErrorMessage } from './helpers';

const initialFormValues: UserCredentials = {
  email: DEFAULT_SIGN_IN_EMAIL,
  password: DEFAULT_SIGN_IN_PASSWORD,
};

export const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const requestError = useAppSelector(authSelectors.getRequestError);

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
        <StyledAvatar>
          <LockOutlinedIcon />
        </StyledAvatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {requestError ? (
          <StyledAlert severity={'error'}>
            <AlertTitle>Sign in Error</AlertTitle>
            {getErrorMessage(requestError)}
          </StyledAlert>
        ) : null}
        <Form noValidate onSubmit={formik.handleSubmit}>
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
          <FormHelperText error={true}>{formik.errors.password}</FormHelperText>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <StyledButton
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
          >
            Sign In
          </StyledButton>
          <Grid container>
            <Grid item xs>
              <StyledLink href="#">Forgot password?</StyledLink>
            </Grid>
            <Grid item>
              <StyledLink href="#">
                {"Don't have an account? Sign Up"}
              </StyledLink>
            </Grid>
          </Grid>
        </Form>
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
