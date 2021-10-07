import * as yup from 'yup';
import { AppTranslationHookTType } from '../../i18n/types';
import { appTranslationTStub } from '../../i18n/useAppTranslation';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getSignUpFormValidationSchema = (t: AppTranslationHookTType) => {
  return yup.object({
    name: yup
      .string()
      .matches(/^[ЁА-Яёа-яA-Za-z ]*$/, t('page__sign-up__validation-name'))
      .required(t('validation__required')),
    email: yup
      .string()
      .required(t('validation__required'))
      .email(t('validation__email')),
    password: yup
      .string()
      .required(t('validation__required'))
      .min(8, t('validation__min_x_symbol', { x: 8 }))
      .max(30, t('validation__max_x_symbol', { x: 30 })),
    password_confirmation: yup
      .string()
      .required(t('validation__required'))
      .oneOf(
        [yup.ref('password'), null],
        t('page__sign-up__validation-password-confirm'),
      ),
  });
};

const SignUpFormValidationSchema =
  getSignUpFormValidationSchema(appTranslationTStub);

export interface SignUpData
  extends yup.Asserts<typeof SignUpFormValidationSchema> {}
