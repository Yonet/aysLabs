import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { ProjectState } from './project.reducer';
import {
  LoadProject,
  ProjectLoaded,
  ProjectLoadError,
  ProjectActionTypes
} from './project.actions';

@Injectable()
export class ProjectEffects {
  @Effect()
  loadProject$ = this.dataPersistence.fetch(ProjectActionTypes.LoadProject, {
    run: (action: LoadProject, state: ProjectState) => {
      // Your custom REST 'load' logic goes here. For now just return an empty list...
      return new ProjectLoaded([]);
    },

    onError: (action: LoadProject, error) => {
      console.error('Error', error);
      return new ProjectLoadError(error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<ProjectState>
  ) {}
}
