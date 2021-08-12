import React from 'react';
import { useAppSelector } from '../../store/hooks';
import { authSelectors } from '../../store/auth';
import { UserComponent } from './UserComponent';

export const User: React.FC = () => {
  const isAuthenticated = useAppSelector(authSelectors.getIsAuthenticated);

  return isAuthenticated ? <UserComponent /> : null;
};
