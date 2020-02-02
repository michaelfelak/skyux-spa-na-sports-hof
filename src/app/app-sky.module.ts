import {
  NgModule
} from '@angular/core';

import {
  SkyAvatarModule
} from '@skyux/avatar';

import {
  SkyAlertModule,
  SkyKeyInfoModule
} from '@skyux/indicators';

import {
  SkyFluidGridModule
} from '@skyux/layout';

import {
  SkyNavbarModule
} from '@skyux/navbar';
import { RouterModule, Routes } from '@angular/router';
import { GuidelinesComponent } from './guidelines/guidelines.component';
import { InducteesComponent } from './inductees/inductees.component';
import { ContactComponent } from './contact/contact.component';
import { BanquetComponent } from './banquet/banquet.component';

const routes: Routes = [
  { path: 'guidelines', component: GuidelinesComponent },
  { path: 'inductees', component: InducteesComponent },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'banquet',
    component: BanquetComponent
  }
];

@NgModule({
  exports: [
    SkyAvatarModule,
    SkyAlertModule,
    SkyKeyInfoModule,
    SkyFluidGridModule,
    SkyNavbarModule
  ],
  imports: [
    RouterModule.forRoot(routes,
      { useHash: true }
    )
  ]
})
export class AppSkyModule { }
