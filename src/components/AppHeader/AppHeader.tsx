import React from 'react';
import styled from 'styled-components';
import { AppBar, Theme, Toolbar } from '@material-ui/core';
import { ThemeModeSwitch } from '../ThemeModeSwitch';

const StyledAppBar = styled(AppBar)`
  width: 100%;
  min-height: 50px;
  background-color: ${({ theme }) => {
    return (theme as Theme).palette.type === 'dark' ? '#605ca8' : '#eeeeee';
  }};

  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
`;

export const AppHeader: React.FC = () => {
  return (
    <StyledAppBar position="static">
      <Toolbar>
        <ThemeModeSwitch />
      </Toolbar>
    </StyledAppBar>
  );
};
