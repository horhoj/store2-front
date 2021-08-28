import * as yup from 'yup';
import { useAppTranslation } from '../../i18n/useAppTranslation';

export const useSignInValidationSchema = (): yup.AnyObjectSchema => {
  const t = useAppTranslation();

  return yup.object({
    email: yup
      .string()
      .required(t('validation__required'))
      .email(t('validation__email')),
    password: yup
      .string()
      .required(t('validation__required'))
      .min(8, t('validation__min_x_symbol', { x: 8 }))
      .max(30, t('validation__max_x_symbol', { x: 30 })),
  });
};
