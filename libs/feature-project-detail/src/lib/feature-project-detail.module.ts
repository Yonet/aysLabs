import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  initialState as projectInitialState,
  projectReducer
} from './+state/project.reducer';
import { ProjectEffects } from './+state/project.effects';
@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ]),

    StoreModule.forFeature('project', projectReducer, {
      initialState: projectInitialState
    }),

    EffectsModule.forFeature([ProjectEffects])
  ]
})
export class FeatureProjectDetailModule {}
