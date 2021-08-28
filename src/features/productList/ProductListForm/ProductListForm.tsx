import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import {
  productListSelectors,
  productListWorkers,
} from '../ProductListReducer';
import { DataGrid } from '../../../components/DataGrid';
import { useFields } from './hooks';

export const ProductListForm: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(productListWorkers.fetchData({}));
  }, []);
  const productList = useAppSelector(
    productListSelectors.getProductListResponse,
  );

  const fields = useFields();

  return (
    <Wrap>
      {productList ? (
        <DataGrid rows={productList.data} fields={fields} />
      ) : null}
    </Wrap>
  );
};

const Wrap = styled(Box)`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;
