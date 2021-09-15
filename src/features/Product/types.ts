import * as yup from 'yup';

export const ProductResponseSchema = yup.object({
  id: yup.number().required(),
  title: yup.string().required(),
  description: yup.string().nullable(),
  options: yup.string().nullable(),
  categories: yup
    .array(
      yup.object({
        id: yup.number().required(),
        title: yup.string().required(),
        description: yup.string().nullable(),
      }),
    )
    .required(),
});

export const ProductRequestSchema = ProductResponseSchema.shape({
  categories: yup.array(yup.number()).defined(),
});

export interface ProductRequestType
  extends yup.Asserts<typeof ProductRequestSchema> {}

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
//
// const y: ProductRequestType = {
//   id: 1,
//   title: 'product title 1',
//   description: 'product description 1',
//   options: 'product options 1',
//   categories: [1],
// };
