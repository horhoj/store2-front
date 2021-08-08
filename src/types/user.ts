import * as yup from 'yup';

export interface UserCredentials {
  email: string;
  password: string;
}

export const UserDataValidationSchema = yup.object({
  id: yup.string().required(),
  name: yup.string().required(),
  email: yup.string().required(),
});

export interface UserData
  extends yup.Asserts<typeof UserDataValidationSchema> {}
