import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
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
    name: 'login',
    path: '/login',
    exact: true,
    private: false,
    always: false,
    component: Login,
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
