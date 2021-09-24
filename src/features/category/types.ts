import * as yup from 'yup';
import { AppTranslationHookTType } from '../../i18n/types';
import { appTranslationTStub } from '../../i18n/useAppTranslation';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getCategoryResponseSchema = (t: AppTranslationHookTType) => {
  return yup.object({
    id: yup.number().required(),
    title: yup.string().required(t('validation__required')),
    description: yup.string().nullable(),
  });
};

export const CategoryResponseSchema =
  getCategoryResponseSchema(appTranslationTStub);

export interface CategoryResponseType
  extends yup.Asserts<typeof CategoryResponseSchema> {}

export const CategoryRequestSchema = CategoryResponseSchema.shape({});

export interface CategoryRequestType
  extends yup.Asserts<typeof CategoryRequestSchema> {}
