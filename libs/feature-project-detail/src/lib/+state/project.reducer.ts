import { ProjectAction, ProjectActionTypes } from './project.actions';

/**
 * Interface for the 'Project' data used in
 *  - ProjectState, and
 *  - projectReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface ProjectState {
  list: Entity[]; // list of Project; analogous to a sql normalized table
  selectedId?: string | number; // which Project record has been selected
  loaded: boolean; // has the Project list been loaded
  error?: any; // last none error (if any)
}

export const initialState: ProjectState = {
  list: [],
  loaded: false
};

export function projectReducer(
  state: ProjectState = initialState,
  action: ProjectAction
): ProjectState {
  switch (action.type) {
    case ProjectActionTypes.ProjectLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
