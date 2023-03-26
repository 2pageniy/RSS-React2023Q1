import { RoutesEnum } from '../../../shared/const/routes';

export function findPath(path: string) {
  const routes = Object.entries(RoutesEnum);
  const findRoute = routes.find((item) => item[1] === path);
  return findRoute ? findRoute[0] : '';
}
