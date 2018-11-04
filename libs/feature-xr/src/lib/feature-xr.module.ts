import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UiXrModule, CreateAtSurfaceComponent } from '@AysLabs/ui-xr';
import { GeoArComponent } from './geo-ar/geo-ar.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: CreateAtSurfaceComponent }
    ]),
    UiXrModule
  ],
  declarations: [GeoArComponent],
  exports: [GeoArComponent]
})
export class FeatureXrModule {}
