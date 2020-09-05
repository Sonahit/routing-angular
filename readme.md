# Angular routing

## Overview

Nest like routing in angular

## Usage

```js

// users.components.ts
...imports

import { Route } from 'ng-routing-utils';

@Route() // Or explicitly @Route('')
@Component(...)
export class UsersComponent implements OnInit {
 ...
}

// users.module.ts
...imports

import { ComponentRouterModule } from 'ng-routing-utils';

@NgModule({
  declarations: [UsersComponent],
  imports: [
    CommonModule,
    ComponentRouterModule.forFeature({
      root: {
        path: 'users',
      },
      components: [UsersComponent], //The Components that are decorated with @Route()
    }),
  ],
  exports: [RouterModule], // You must include @angular/router module to get ComponentRouterModule work
})
export class UsersModule {
  ...
}


```
