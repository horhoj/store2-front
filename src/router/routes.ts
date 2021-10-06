import { HomePage } from '../pages/HomePage';
import { SignInPage } from '../pages/SignInPage';
import { RouteNotFoundPage } from '../pages/RouteNotFoundPage';
import { ProductListPage } from '../pages/ProductListPage';
import { ProductPage } from '../pages/ProductPage';
import { CategoryListPage } from '../pages/CategoryListPage';
import { CategoryPage } from '../pages/CategoryPage';
import { SignUpPage } from '../pages/SignUpPage';
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
    name: 'signIn',
    path: '/sign-up',
    exact: true,
    private: false,
    always: true,
    component: SignUpPage,
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
    component: CategoryListPage,
  },
  {
    name: 'category',
    path: '/category/:id',
    exact: true,
    private: true,
    always: false,
    component: CategoryPage,
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
