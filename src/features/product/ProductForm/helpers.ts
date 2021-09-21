import { ProductRequestType, ProductResponseType } from '../types';

export const prepareProductRequestData = (
  productData: ProductResponseType,
): ProductRequestType => {
  const categories = productData.categories.map((category) => category.id);
  return {
    ...productData,
    categories,
  };
};

export const prepareProductFormData = (
  productData: ProductResponseType,
): ProductResponseType => {
  return {
    ...productData,
    description: productData.description || '',
    options: productData.options || '',
  };
};
