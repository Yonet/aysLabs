// Angular imports
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// 3rd party imports
import { EffectsModule } from '@ngrx/effects';
import { MatIconModule, MatIconRegistry } from '@angular/material';
import { NxModule } from '@nrwl/nx';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { storeFreeze } from 'ngrx-store-freeze';
import { StoreModule } from '@ngrx/store';

// Lib imports
import { PageNotFoundComponent, UiModule } from '@AysLabs/ui';
import { UiShellModule } from '@AysLabs/ui-shell';

// Local imports
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';

export const routes: Routes = [
  { path: '', redirectTo: '/xr', pathMatch: 'full' },
  {
    path: 'xr',
    loadChildren: '@AysLabs/feature-xr#FeatureXrModule'
    // canActivate: [AuthGuard],
  },
  // { path: '', redirectTo: '/projects', pathMatch: 'full' },
  // {
  //   path: 'projects',
  //   loadChildren: '@AysLabs/feature-projects#FeatureProjectsModule'
  //   // canActivate: [AuthGuard],
  // },
  // { path: 'login', loadChildren: '@AysLabs/feature-auth#FeatureAuthModule' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    EffectsModule.forRoot([]),
    MatIconModule,
    NxModule.forRoot(),
    RouterModule.forRoot(routes, { initialNavigation: 'enabled' }),
    StoreModule.forRoot(
      {},
      { metaReducers: !environment.production ? [storeFreeze] : [] }
    ),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule,
    UiShellModule,
    UiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(matIconRegistry: MatIconRegistry) {
    matIconRegistry.setDefaultFontSetClass('material-icons-extended');
  }
}
