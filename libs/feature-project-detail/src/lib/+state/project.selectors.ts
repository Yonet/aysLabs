import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProjectState } from './project.reducer';

// Lookup the 'Project' feature state managed by NgRx
const getProjectState = createFeatureSelector<ProjectState>('project');

const getLoaded = createSelector(
  getProjectState,
  (state: ProjectState) => state.loaded
);
const getError = createSelector(
  getProjectState,
  (state: ProjectState) => state.error
);

const getAllProject = createSelector(
  getProjectState,
  getLoaded,
  (state: ProjectState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getProjectState,
  (state: ProjectState) => state.selectedId
);
const getSelectedProject = createSelector(
  getAllProject,
  getSelectedId,
  (project, id) => {
    const result = project.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const projectQuery = {
  getLoaded,
  getError,
  getAllProject,
  getSelectedProject
};
