import { createReducer, on } from '@ngrx/store';
import { ProjectsState, initialState } from './projects.state';
import * as ProjectsActions from './projects.actions';

export const projectsReducer = createReducer(
  initialState,
  on(ProjectsActions.loadProjects, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(ProjectsActions.loadProjectsSuccess, (state, { projects }) => ({
    ...state,
    projects,
    loading: false
  })),
  on(ProjectsActions.loadProjectsFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
  on(ProjectsActions.createProject, state => ({
    ...state,
    loading: true,
    error: null
  })),
  on(ProjectsActions.createProjectSuccess, (state, { project }) => ({
    ...state,
    projects: [...state.projects, project],
    loading: false
  })),
  on(ProjectsActions.createProjectFailure, (state, { error }) => ({
    ...state,
    loading: false,
    error
  }))
);