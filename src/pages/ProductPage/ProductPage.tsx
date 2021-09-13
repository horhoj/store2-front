import React from 'react';
import { useParams } from 'react-router';
import { ProductForm } from '../../features/Product/ProductForm';

export const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return <ProductForm id={id} />;
};
