import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';
import { authSelectors } from '../store/auth';
import { routes } from './routes';
import { RouteItem } from './types';
import { getPathByName } from './helpers';
import { RedirectExecutor } from './RedirectExecutor';

export const RoutesStructure: React.FC = () => {
  const userIsAuthenticated = useAppSelector(authSelectors.getIsAuthenticated);

  const getRouteAction = (route: RouteItem) => {
    //вся конфигурация роутов задана в router/routes
    //если  для компонента  задано showAlways то немедленно выводим
    if (route.always) {
      return <route.component />;
    }
    //проверяем предназначен ли компонент для работы, если мы вошли в систему
    if (route.private) {
      //если да, то проверяем залогинены ли мы
      //и если то показываем его
      //иначе делаем редирект на страницу логина
      if (userIsAuthenticated) {
        return <route.component />;
      }
      return <Redirect to={getPathByName('signIn')} />;
    }
    //если нет, то то проверяем залогинены ли мы
    //и если да то делаем редирект на главную страницу
    //иначе показываем компонент
    if (userIsAuthenticated) {
      return <Redirect to={getPathByName('home')} />;
    }
    return <route.component />;
  };

  return (
    <>
      <RedirectExecutor />
      <Switch>
        <Redirect from={'/'} to={getPathByName('signIn')} exact={true} />;
        {routes.map((route) => (
          <Route path={route.path} exact={route.exact} key={route.name}>
            {getRouteAction(route)}
          </Route>
        ))}
      </Switch>
    </>
  );
};
