import {
  NgModule
} from '@angular/core';

import {
  AppSkyModule
} from './app-sky.module';
import { SkyCardModule } from '@skyux/layout';
import { SkyAvatarModule } from '@skyux/avatar';

@NgModule({
  exports: [
    AppSkyModule,
    SkyCardModule,
    SkyAvatarModule
  ]
})
export class AppExtrasModule { }
