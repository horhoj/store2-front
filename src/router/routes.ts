import { HomePage } from '../pages/HomePage';
import { SignInPage } from '../pages/SignInPage';
import { RouteNotFoundPage } from '../pages/RouteNotFoundPage';
import { ProductListPage } from '../pages/ProductListPage';
import { RouteItem } from './types';

export const routes: RouteItem[] = [
  {
    name: 'home',
    path: '/home',
    exact: true,
    private: true,
    always: false,
    component: HomePage,
  },
  {
    name: 'signIn',
    path: '/sign-in',
    exact: true,
    private: false,
    always: false,
    component: SignInPage,
  },
  {
    name: 'productList',
    path: '/product-list',
    exact: true,
    private: true,
    always: false,
    component: ProductListPage,
  },
  {
    name: 'routeNotFound',
    path: '*',
    exact: false,
    private: false,
    always: true,
    component: RouteNotFoundPage,
  },
];
