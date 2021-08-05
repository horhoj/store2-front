import { LinearProgress } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const StyledLinearProgress = styled(LinearProgress)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 4px;
  z-index: 10000;
`;

export const ProgressBar: React.FC = () => {
  const isProgress = false;
  return isProgress ? <StyledLinearProgress /> : null;
};
