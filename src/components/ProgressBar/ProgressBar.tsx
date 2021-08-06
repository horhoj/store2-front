import { LinearProgress } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../../store/hooks';
import { authSelectors } from '../../store/auth';

const StyledLinearProgress = styled(LinearProgress)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 4px;
  z-index: 10000;
`;

export const ProgressBar: React.FC = () => {
  const auth = useAppSelector(authSelectors.getIsLoading);
  const isProgress = auth;
  return isProgress ? <StyledLinearProgress /> : null;
};
