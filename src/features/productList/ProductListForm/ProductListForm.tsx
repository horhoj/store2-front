import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  productListSelectors,
  productListWorkers,
} from '../ProductListReducer';

export const ProductListForm: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(productListWorkers.fetchData());
  }, []);
  const productList = useAppSelector(
    productListSelectors.getProductListResponse,
  );

  return <pre>{JSON.stringify(productList, null, 2)}</pre>;
};
