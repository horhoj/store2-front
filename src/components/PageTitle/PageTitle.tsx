import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export const PageTitle: React.FC = ({ children }) => {
  return (
    <>
      <StyledTypography component={'h2'}>{children}</StyledTypography>
    </>
  );
};

const StyledTypography: typeof Typography = styled(Typography)`
  font-size: 150%;
`;
