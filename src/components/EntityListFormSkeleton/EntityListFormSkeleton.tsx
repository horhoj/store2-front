import React from 'react';
import styled from 'styled-components';
import { Box } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';

export const EntityListFormSkeleton: React.FC = () => {
  return (
    <Wrap>
      <StyledSkeleton variant="rect" />
      <StyledSkeleton variant="rect" />
      <StyledSkeleton variant="rect" />
      <StyledSkeleton variant="rect" />
    </Wrap>
  );
};

const Wrap = styled(Box)`
  display: grid;
  grid-template-rows: 60px 1fr 0.1fr 0.1fr;
  grid-gap: 10px;
  height: 100%;
`;

const StyledSkeleton = styled(Skeleton)`
  height: 100%;
`;
