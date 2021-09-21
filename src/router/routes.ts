import { HomePage } from '../pages/HomePage';
import { SignInPage } from '../pages/SignInPage';
import { RouteNotFoundPage } from '../pages/RouteNotFoundPage';
import { ProductListPage } from '../pages/ProductListPage';
import { ProductPage } from '../pages/ProductPage';
import { CategoryList } from '../pages/CategoryList';
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
    path: '/products',
    exact: true,
    private: true,
    always: false,
    component: ProductListPage,
  },
  {
    name: 'product',
    path: '/products/:id',
    exact: true,
    private: true,
    always: false,
    component: ProductPage,
  },
  {
    name: 'categoryList',
    path: '/category',
    exact: true,
    private: true,
    always: false,
    component: CategoryList,
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
