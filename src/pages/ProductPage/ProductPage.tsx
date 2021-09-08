import React from 'react';
import { useParams } from 'react-router';
import { ProductEditForm } from '../../features/ProductEdit/ProductEditForm';

export const ProductPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return <ProductEditForm id={id} />;
};
