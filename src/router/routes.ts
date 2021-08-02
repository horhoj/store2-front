import { Home } from '../pages/Home';
import { SignIn } from '../pages/SignIn';
import { RouteNotFound } from '../pages/RouteNotFound/';
import { RouteItem } from './types';

export const routes: RouteItem[] = [
  {
    name: 'home',
    path: '/',
    exact: true,
    private: true,
    always: false,
    component: Home,
  },
  {
    name: 'signIn',
    path: '/sign-in',
    exact: true,
    private: false,
    always: false,
    component: SignIn,
  },
  {
    name: 'routeNotFound',
    path: '*',
    exact: false,
    private: false,
    always: true,
    component: RouteNotFound,
  },
];
