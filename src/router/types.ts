export type RouterPathNames =
  | 'home'
  | 'signIn'
  | 'routeNotFound'
  | 'productList'
  | 'product';

export interface RouteItem {
  name: RouterPathNames;
  path: string;
  exact: boolean;
  private: boolean;
  always: boolean;
  component: any;
}
