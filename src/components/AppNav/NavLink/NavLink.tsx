import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { appActions, appSelectors } from '../../../store/app';
import { NavLinkProps } from './types';

export const NavLink: React.FC<NavLinkProps> = ({
  to,
  icon,
  primary,
  secondary = null,
}) => {
  const dispatch = useAppDispatch();

  const isSmallWidth = useAppSelector(appSelectors.getIsSmallWidth);

  const handleLinkClk = () => {
    if (isSmallWidth) {
      dispatch(appActions.setIsOpenMenu(false));
    }
  };

  return (
    <li>
      <StyledListItem
        button
        component={RouterLink}
        to={to}
        onClick={handleLinkClk}
      >
        <StyledListItemIcon>{icon}</StyledListItemIcon>
        <ListItemText
          primary={primary}
          className={'link-text'}
          secondary={secondary}
        />
      </StyledListItem>
    </li>
  );
};

const StyledListItem: typeof ListItem = styled(ListItem)`
  &.active svg,
  &.active .link-text {
    color: magenta;
  }
`;

const StyledListItemIcon = styled(ListItemIcon)`
  min-width: 40px;
`;
