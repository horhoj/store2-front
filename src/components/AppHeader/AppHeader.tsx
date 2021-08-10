import React from 'react';
import { AppBar, Box, Toolbar } from '@material-ui/core';
import styled from 'styled-components';
import { ThemeModeSwitch } from '../ThemeModeSwitch';
import { User } from '../User';

export const AppHeader: React.FC = () => {
  return (
    <StyledAppBar position="static" color={'inherit'}>
      <Toolbar>
        <RightWrap>
          <User />
          <ThemeModeSwitch />
        </RightWrap>
      </Toolbar>
    </StyledAppBar>
  );
};

const StyledAppBar = styled(AppBar)``;

const RightWrap = styled(Box)`
  margin: 0 0 0 auto;
  display: flex;
  justify-content: center;
  align-content: center;
  & > div:not(:last-child) {
    margin-right: 50px;
  }
`;
