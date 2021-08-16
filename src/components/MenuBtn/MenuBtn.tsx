import React from 'react';
import { Box, Button } from '@material-ui/core';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { authSelectors } from '../../store/auth';
import { appActions } from '../../store/app';

export const MenuBtn: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(authSelectors.getIsAuthenticated);

  const handleMenuBtnClk = () => {
    dispatch(appActions.toggleMenuMode());
  };
  return isAuthenticated ? (
    <Wrap>
      <StyledButton onClick={handleMenuBtnClk}>
        <MenuIcon />
      </StyledButton>
    </Wrap>
  ) : null;
};

export const Wrap = styled(Box)``;

export const StyledButton = styled(Button)`
  min-width: 40px;
  min-height: 40px;
`;
