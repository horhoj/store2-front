import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import styled from 'styled-components';

export const AppFooter: React.FC = () => {
  return (
    <StyledAppBar position="static" color={'inherit'}>
      <StyledToolBar>
        <Typography noWrap={true}>
          Copyright © {new Date().getFullYear()} cool29horhoj.&nbsp;
        </Typography>
        <Typography noWrap={true}>All rights reserved.</Typography>
      </StyledToolBar>
    </StyledAppBar>
  );
};

const StyledToolBar = styled(Toolbar)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledAppBar = styled(AppBar)``;
