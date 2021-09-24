import React from 'react';
import { useParams } from 'react-router';
import { CategoryForm } from '../../features/category/CategoryForm';

export const CategoryPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  return <CategoryForm id={id} />;
};
