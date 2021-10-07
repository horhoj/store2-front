import * as yup from 'yup';
import { appTranslationTStub } from '../../i18n/useAppTranslation';
import { AppTranslationHookTType } from '../../i18n/types';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getProductResponseSchema = (t: AppTranslationHookTType) => {
  return yup.object({
    id: yup.number().required(),
    title: yup.string().required(t('validation__required')),
    description: yup.string().nullable(),
    options: yup.string().nullable(),
    categories: yup
      .array(
        yup.object({
          id: yup.number().required(),
          title: yup.string().required(t('validation__required')),
          description: yup.string().nullable(),
        }),
      )
      .required(),
  });
};

export const ProductResponseSchema =
  getProductResponseSchema(appTranslationTStub);

export interface ProductResponseType
  extends yup.Asserts<typeof ProductResponseSchema> {}

export const ProductRequestSchema = ProductResponseSchema.shape({
  categories: yup.array(yup.number()).required(),
});

export interface ProductRequestType
  extends yup.Asserts<typeof ProductRequestSchema> {}
