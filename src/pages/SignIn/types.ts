import * as yup from 'yup';

export const SignInValidationSchema = yup.object({
  email: yup.string().required('Не заполнено').email('Не почта'),
  password: yup
    .string()
    .required('Не заполнено')
    .min(8, 'меньше 8')
    .max(30, 'больше 30'),
});
