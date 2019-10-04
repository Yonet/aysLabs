import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArButtonComponent } from './ar-button/ar-button.component';
import { CreateAtSurfaceComponent } from './create-at-surface/create-at-surface.component';
import { DisplayAtLocationComponent } from './display-at-location/display-at-location.component';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CreateAtSurfaceComponent,
    DisplayAtLocationComponent,
    ArButtonComponent
  ],
  exports: [
    CreateAtSurfaceComponent,
    DisplayAtLocationComponent,
    ArButtonComponent
  ]
})
export class UiXrModule {}
