import { List } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import HomeIcon from '@material-ui/icons/Home';
import DevicesOtherIcon from '@material-ui/icons/DevicesOther';
import CategoryIcon from '@material-ui/icons/Category';
import { getPathByName } from '../../router';
import { useAppTranslation } from '../../i18n/useAppTranslation';
import { NavLink } from './NavLink';

export const AppNav: React.FC = () => {
  const t = useAppTranslation();

  return (
    <StyledList component="nav">
      <NavLink
        to={getPathByName('home')}
        icon={<HomeIcon />}
        primary={t('nav-link__home')}
      />
      <NavLink
        to={getPathByName('productList')}
        icon={<DevicesOtherIcon />}
        primary={t('nav-link__product-list')}
      />
      <NavLink
        to={getPathByName('categoryList')}
        icon={<CategoryIcon />}
        primary={t('nav-link__category-list')}
      />
    </StyledList>
  );
};

const StyledList: typeof List = styled(List)`
  width: 100%;
`;
