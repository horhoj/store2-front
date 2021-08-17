import { List } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import HomeIcon from '@material-ui/icons/Home';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import { getPathByName } from '../../router';
import { NavLink } from './NavLink';

export const AppNav: React.FC = () => {
  return (
    <StyledList component="nav">
      <NavLink
        to={getPathByName('home')}
        icon={<HomeIcon />}
        primary={'home'}
      />
      <NavLink
        to={getPathByName('productList')}
        icon={<DevicesOtherIcon />}
        primary={'productList'}
      />
    </StyledList>
  );
};

const StyledList: typeof List = styled(List)`
  width: 100%;
`;
