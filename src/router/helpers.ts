import { generatePath } from 'react-router';
import { RouteItem, RouteParams, RouterPathNames } from './types';
import { routes } from './routes';

export const getPathByName = (
  name: RouterPathNames,
  routeParams: RouteParams | null = null,
): string => {
  const routeItem: RouteItem | undefined = routes.find(
    (route) =>
      route.name.toString().toLowerCase() === name.toString().toLowerCase(),
  );
  if (routeItem) {
    if (!routeParams) {
      return routeItem.path;
    }
    return generatePath(routeItem.path, routeParams);
  }
  throw new Error('getPathByName: Unknown route!');
};
