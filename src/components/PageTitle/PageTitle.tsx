import React from 'react';
import { Box, Theme, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const PageTitle: React.FC = ({ children }) => {
  return (
    <Wrap>
      <StyledTypography component={'h2'}>{children}</StyledTypography>
    </Wrap>
  );
};

const StyledTypography: typeof Typography = styled(Typography)`
  font-size: 150%;
`;

const Wrap = styled(Box)`
  padding: ${({ theme }) => (theme as Theme).spacing(2, 0)};
`;
