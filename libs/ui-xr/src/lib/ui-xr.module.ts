import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAtSurfaceComponent } from './create-at-surface/create-at-surface.component';
import { DisplayAtLocationComponent } from './display-at-location/display-at-location.component';
import { ArButtonComponent } from './ar-button/ar-button.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CreateAtSurfaceComponent, DisplayAtLocationComponent, ArButtonComponent],
  exports: [CreateAtSurfaceComponent, DisplayAtLocationComponent, ArButtonComponent]
})
export class UiXrModule {}
