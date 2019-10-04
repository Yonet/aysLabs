// Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 3rd party imports
import { NxModule } from '@nrwl/angular';

// Lib imports


// Local imports
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

export const routes: Routes = [
    // { path: '', redirectTo: '/xr', pathMatch: 'full' }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
