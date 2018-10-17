import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UiModule } from '@AysLabs/ui';
import { ShellComponent } from './shell/shell.component';

@NgModule({
  imports: [CommonModule, RouterModule, UiModule],
  declarations: [ShellComponent],
  exports: [ShellComponent]
})
export class UiShellModule {}
