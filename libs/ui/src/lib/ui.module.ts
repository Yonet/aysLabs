import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ListComponent } from './list/list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { VendorModule } from './vendor/vendor.module';

@NgModule({
  imports: [CommonModule, FormsModule, RouterModule, VendorModule],
  declarations: [ListComponent, PageNotFoundComponent],
  exports: [ListComponent, VendorModule, PageNotFoundComponent]
})
export class UiModule {}
