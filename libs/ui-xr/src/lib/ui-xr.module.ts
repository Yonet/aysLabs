import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateAtSurfaceComponent } from './create-at-surface/create-at-surface.component';

@NgModule({
  imports: [CommonModule],
  declarations: [CreateAtSurfaceComponent],
  exports: [CreateAtSurfaceComponent]
})
export class UiXrModule {}
