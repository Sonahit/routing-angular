import { Route as AngularRoute } from '@angular/router';
/**
 * @internal
 */
type RouteOptions = AngularRoute;
/**
 * @public
 */
export function Route(route: string = '', options?: RouteOptions) {
  return (component: any) => {
    component.routeConfig = {
      path: route,
      component,
      ...options,
    } as AngularRoute;
    return component;
  };
}
