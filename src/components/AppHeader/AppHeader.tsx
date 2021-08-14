import React from 'react';
import { AppBar, Box, Toolbar } from '@material-ui/core';
import styled from 'styled-components';
import { ThemeModeSwitcher } from '../ThemeModeSwitcher';
import { User } from '../User';
import { LangSwitcher } from '../LangSwitcher';

export const AppHeader: React.FC = () => {
  return (
    <AppBar position="static" color={'inherit'}>
      <StyledToolBar>
        <Box>Logo</Box>
        <RightWrap>
          <User />
          <ThemeModeSwitcher />
          <LangSwitcher />
        </RightWrap>
      </StyledToolBar>
    </AppBar>
  );
};

const StyledToolBar = styled(Toolbar)`
  display: flex;
  justify-content: space-between;
`;

const RightWrap = styled(Box)`
  display: flex;
  justify-content: center;
  align-content: center;
`;
