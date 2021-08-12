import React, { useState } from 'react';
import { Box, Button, Menu, MenuItem } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import styled from 'styled-components';
import { authSelectors, authWorkers } from '../../store/auth';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

export const UserComponent: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const userData = useAppSelector(authSelectors.getUserData);
  const dispatch = useAppDispatch();

  const handleLogout = () => {
    dispatch(authWorkers.authSignOut());
  };

  const handleMenuBtnClk = (e: React.SyntheticEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return userData ? (
    <Wrap>
      <Button
        onClick={handleMenuBtnClk}
        aria-controls="customized-menu"
        aria-haspopup="true"
      >
        <PersonIcon />
      </Button>
      <StyledMenu
        id="customized-menu"
        open={Boolean(anchorEl)}
        keepMounted
        anchorEl={anchorEl}
        onClose={handleMenuClose}
        variant={'selectedMenu'}
      >
        <MenuItem button={false} style={{ outline: 'none' }}>
          <UserDataBox>
            <Box>UserID: {userData.id}</Box>
            <Box>Email: {userData.email}</Box>
            <Box>Name: {userData.name}</Box>
          </UserDataBox>
        </MenuItem>
        <MenuItem onClick={handleLogout}>logout</MenuItem>
      </StyledMenu>
    </Wrap>
  ) : null;
};

const Wrap = styled(Box)``;

const UserDataBox = styled(Box)`
  min-width: 200px;
  min-height: 100px;
`;

const StyledMenu = styled(Menu)``;
