import { ModuleWithProviders, Type } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
/**
 * @public
 */
export type Options = {
  root: Route;
  components: (Type<any> & { routeConfig?: Route })[];
};
/**
 * @public
 */
export class ComponentRouterModule {
  static forFeature({
    root,
    components,
  }: Options): ModuleWithProviders<RouterModule> {
    const routes = components.map((c) => c.routeConfig);
    return RouterModule.forChild([
      {
        ...root,
        children: routes,
      },
    ]);
  }
}
