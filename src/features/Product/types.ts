import * as yup from 'yup';

export const ProductResponseSchema = yup.object({
  id: yup.number().required(),
  title: yup.string().required(),
  description: yup.string().nullable().defined(),
  options: yup.string().nullable().defined(),
  categories: yup.array(
    yup.object({
      id: yup.number().required(),
      title: yup.string().required(),
      description: yup.string().nullable().defined(),
    }),
  ),
});

export interface ProductResponseType
  extends yup.Asserts<typeof ProductResponseSchema> {}

// const x: ProductResponseType = {
//   id: 1,
//   title: 'product title 1',
//   description: 'product description 1',
//   options: 'product options 1',
//   categories: [
//     {
//       id: 1,
//       title: 'category title 1',
//       description: 'category description 1',
//     },
//   ],
// };

export const ProductRequestSchema = yup.object({
  id: yup.number().required(),
  title: yup.string().required(),
  description: yup.string().nullable().defined(),
  options: yup.string().nullable().defined(),
  categories: yup.array(yup.number()).defined(),
});

export interface ProductRequestType
  extends yup.Asserts<typeof ProductRequestSchema> {}

// const y: ProductRequestType = {
//   id: 1,
//   title: 'product title 1',
//   description: 'product description 1',
//   options: 'product options 1',
//   categories: [],
// };
