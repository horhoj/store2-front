import * as yup from 'yup';
import { getCommonResponseSchemaFieldsForAnEntityList } from '../../types/helpers';

export const CategoryListItemSchema = yup.object({
  id: yup.number().required(),
  title: yup.string().required(),
  description: yup.string().nullable(),
});

interface CategoryListItem extends yup.Asserts<typeof CategoryListItemSchema> {}

export type CategoryListItemKeys = keyof CategoryListItem;

export const CategoryListResponseSchema = yup.object({
  data: yup.array(CategoryListItemSchema).required(),
  ...getCommonResponseSchemaFieldsForAnEntityList(),
});

export interface CategoryListResponseType
  extends yup.Asserts<typeof CategoryListResponseSchema> {}
