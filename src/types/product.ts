import * as yup from 'yup';

export const ProductSchema = yup.object({
  id: yup.number().required(),
  title: yup.string().required(),
  description: yup.string().nullable().defined(),
  options: yup.string().nullable().defined(),
});

export interface Product extends yup.Asserts<typeof ProductSchema> {}
