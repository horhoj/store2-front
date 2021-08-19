import * as yup from 'yup';

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getCommonResponseSchemaFieldsForAnEntityList = () => ({
  current_page: yup.number().required(),
  last_page: yup.number().required(),
  per_page: yup.number().required(),
  total: yup.number().required(),
});
