export type RouterPathNames = 'home' | 'signIn' | 'routeNotFound';

export interface RouteItem {
  name: RouterPathNames;
  path: string;
  exact: boolean;
  private: boolean;
  always: boolean;
  component: any;
}
