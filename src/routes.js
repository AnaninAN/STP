import { HomePage } from 'pages/HomePage';
import { MyRoutesPage } from 'pages/MyRoutesPage';
import { LoginPage } from 'pages/LoginPage';
import { RouteSinglePage } from 'pages/RouteSinglePage';

export const routes = [
  {
    path: '/',
    exact: true,
    component: HomePage,
  },
  {
    path: '/myroutes',
    exact: true,
    component: MyRoutesPage,
  },
  {
    path: '/login',
    exact: true,
    component: LoginPage,
  },
  {
    path: '/routes/:id',
    exact: true,
    component: RouteSinglePage,
  },
];