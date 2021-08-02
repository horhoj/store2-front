import { RouteItem, RouterPathNames } from './types';
import { routes } from './routes';

export const getPathByName = (name: RouterPathNames): string => {
  const routeItem: RouteItem | undefined = routes.find(
    (route) =>
      route.name.toString().toLowerCase() === name.toString().toLowerCase(),
  );
  if (routeItem) {
    return routeItem.path;
  }
  throw new Error('getPathByName: Unknown route!');
};
