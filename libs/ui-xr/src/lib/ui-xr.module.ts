import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAtSurfaceComponent } from './create-at-surface/create-at-surface.component';
import { DisplayAtLocationComponent } from './display-at-location/display-at-location.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CreateAtSurfaceComponent, DisplayAtLocationComponent],
  exports: [CreateAtSurfaceComponent, DisplayAtLocationComponent]
})
export class UiXrModule {}
