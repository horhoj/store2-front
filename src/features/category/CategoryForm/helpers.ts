import { CategoryRequestType, CategoryResponseType } from '../types';

export const prepareCategoryFormData = (
  categoryData: CategoryResponseType,
): CategoryResponseType => ({
  ...categoryData,
  description: categoryData.description || '',
});

export const prepareCategoryRequestData = (
  categoryData: CategoryResponseType,
): CategoryRequestType => ({
  ...categoryData,
});
