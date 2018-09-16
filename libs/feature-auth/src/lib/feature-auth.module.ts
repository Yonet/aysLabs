import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  initialState as authInitialState,
  authReducer
} from './+state/auth.reducer';
import { AuthEffects } from './+state/auth.effects';
import { LoginComponent } from './login/login.component';
import { UiModule } from '@Code4Good/ui';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: LoginComponent }
    ]),
    StoreModule.forFeature('auth', authReducer, {
      initialState: authInitialState
    }),
    EffectsModule.forFeature([AuthEffects]),
    UiModule
  ],
  declarations: [LoginComponent],
  entryComponents: [LoginComponent]
})
export class FeatureAuthModule {}
