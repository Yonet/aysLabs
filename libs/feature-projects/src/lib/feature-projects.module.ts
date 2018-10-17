import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  initialState as projectsInitialState,
  projectsReducer
} from './+state/projects.reducer';
import { ProjectsEffects } from './+state/projects.effects';
import { ProjectsComponent } from './projects/projects.component';
import { UiModule } from '@AysLabs/ui';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', pathMatch: 'full', component: ProjectsComponent }
    ]),
    StoreModule.forFeature('projects', projectsReducer, {
      initialState: projectsInitialState
    }),
    EffectsModule.forFeature([ProjectsEffects]),
    UiModule
  ],
  declarations: [ProjectsComponent],
  entryComponents: [ProjectsComponent]
})
export class FeatureProjectsModule {}
