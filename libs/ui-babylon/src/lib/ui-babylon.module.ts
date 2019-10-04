import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { BabylonService } from './babylon-service/babylon-service';
import { ArComponent } from './ar/ar.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ArComponent }
    ])
  ],
  providers: [BabylonService],
  declarations: [ArComponent],
  exports: [ArComponent],
  entryComponents: [ArComponent]
})
export class UiBabylonModule {}
