import { LinearProgress } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../store/hooks';
import { authSelectors } from '../../store/auth';
import { productListSelectors } from '../../features/productList/ProductListReducer';

const StyledLinearProgress = styled(LinearProgress)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 4px;
  z-index: 10000;
`;

export const ProgressBar: React.FC = () => {
  const authIsLoading = useAppSelector(authSelectors.getIsLoading);
  const authIsLoadingUserData = useAppSelector(
    authSelectors.getIsLoadingUserData,
  );
  const productList = useAppSelector(productListSelectors.getIsLoading);
  const isProgress = authIsLoading || authIsLoadingUserData || productList;
  return isProgress ? <StyledLinearProgress /> : null;
};
