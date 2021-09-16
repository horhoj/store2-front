import * as yup from 'yup';
import { getCommonResponseSchemaFieldsForAnEntityList } from '../../types/helpers';

const ProductListItemSchema = yup.object({
  id: yup.number().required(),
  title: yup.string().required(),
  description: yup.string().nullable(),
  options: yup.string().nullable(),
});

interface ProductListItem extends yup.Asserts<typeof ProductListItemSchema> {}

export type ProductListItemKeys = keyof ProductListItem;

export const ProductListResponseSchema = yup.object({
  data: yup.array(ProductListItemSchema).required(),
  ...getCommonResponseSchemaFieldsForAnEntityList(),
});

export interface ProductListResponseType
  extends yup.Asserts<typeof ProductListResponseSchema> {}
