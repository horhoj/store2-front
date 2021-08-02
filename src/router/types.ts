export type RouterPathNames =
  | 'home'
  | 'login'
  | 'routeNotFound'

export interface RouteItem {
  name: RouterPathNames;
  path: string;
  exact: boolean;
  private: boolean;
  always: boolean;
  component: any;
}
