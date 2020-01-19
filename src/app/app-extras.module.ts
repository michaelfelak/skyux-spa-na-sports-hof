import {
  NgModule
} from '@angular/core';

import {
  AppSkyModule
} from './app-sky.module';
import { InducteeList } from './inductees/inductee-list';
import { SkyCardModule } from '@skyux/layout';
import { SkyAvatarModule } from '@skyux/avatar';

@NgModule({
  exports: [
    AppSkyModule,
    SkyCardModule,
    SkyAvatarModule
  ],
  providers: [
    InducteeList
  ]
})
export class AppExtrasModule { }
