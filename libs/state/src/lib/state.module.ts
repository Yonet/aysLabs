import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import {
  initialState as appInitialState,
  appReducer
} from './+state/app.reducer';
import { AppEffects } from './+state/app.effects';
@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('app', appReducer, {
      initialState: appInitialState
    }),
    EffectsModule.forFeature([AppEffects])
  ]
})
export class StateModule {}
