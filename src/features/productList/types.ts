import * as yup from 'yup';
import { ProductSchema } from '../../types/product';
import { getCommonResponseSchemaFieldsForAnEntityList } from '../../types/helpers';

export const ProductListResponseSchema = yup.object({
  data: yup.array(ProductSchema).required(),
  ...getCommonResponseSchemaFieldsForAnEntityList(),
});

export interface ProductListResponseType
  extends yup.Asserts<typeof ProductListResponseSchema> {}
