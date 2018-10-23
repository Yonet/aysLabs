import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UiXrModule, CreateAtSurfaceComponent } from '@AysLabs/ui-xr';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: CreateAtSurfaceComponent }
    ]),
    UiXrModule
  ]
})
export class FeatureXrModule {}
