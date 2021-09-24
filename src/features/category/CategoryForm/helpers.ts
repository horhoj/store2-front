import { CategoryResponseType } from '../types';

export const prepareCategoryFormData = (
  categoryData: CategoryResponseType,
): CategoryResponseType => ({
  ...categoryData,
  description: categoryData.description || '',
});
