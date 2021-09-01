import React, { useState } from 'react';
import { Box, Button, Menu, MenuItem } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import styled from 'styled-components';
import { authSelectors, authWorkers } from '../../store/auth';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { useAppTranslation } from '../../i18n/useAppTranslation';

export const UserComponent: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const userData = useAppSelector(authSelectors.getUserData);
  const dispatch = useAppDispatch();
  const t = useAppTranslation();

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
      <StyledButton
        onClick={handleMenuBtnClk}
        aria-controls="customized-menu"
        aria-haspopup="true"
      >
        <PersonIcon />
      </StyledButton>
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
            <Box>{`${t('app__user__user-id')}: ${userData.id}`}</Box>
            <Box>{`${t('app__user__user-email')}: ${userData.email}`}</Box>
            <Box>{`${t('app__user__user-name')}: ${userData.name}`}</Box>
          </UserDataBox>
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          {t('app__user__user-logout-btn')}
        </MenuItem>
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

const StyledButton = styled(Button)`
  min-width: 40px;
  min-height: 40px;
`;
