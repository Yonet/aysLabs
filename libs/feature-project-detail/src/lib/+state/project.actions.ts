import { Action } from '@ngrx/store';
import { Entity } from './project.reducer';

export enum ProjectActionTypes {
  LoadProject = '[Project] Load Project',
  ProjectLoaded = '[Project] Project Loaded',
  ProjectLoadError = '[Project] Project Load Error'
}

export class LoadProject implements Action {
  readonly type = ProjectActionTypes.LoadProject;
}

export class ProjectLoadError implements Action {
  readonly type = ProjectActionTypes.ProjectLoadError;
  constructor(public payload: any) {}
}

export class ProjectLoaded implements Action {
  readonly type = ProjectActionTypes.ProjectLoaded;
  constructor(public payload: Entity[]) {}
}

export type ProjectAction = LoadProject | ProjectLoaded | ProjectLoadError;

export const fromProjectActions = {
  LoadProject,
  ProjectLoaded,
  ProjectLoadError
};
