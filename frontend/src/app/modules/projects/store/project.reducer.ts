import { createReducer, on } from '@ngrx/store';
import { Project } from '../models/project.model';

import * as ProjectsActions from './project.actions';

export interface ProjectsState {
  projects: Project[];
  currentProject: Project | null;
  loading: boolean;
  error: string | null;
}

export const initialState: ProjectsState = {
  projects: [],
  currentProject: null,
  loading: false,
  error: null
};

export const reducer = createReducer(
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
    error,
    loading: false
  })),
  
  on(ProjectsActions.loadProjectDetails, state => ({
    ...state,
    loading: true,
    error: null
  })),
  
  on(ProjectsActions.loadProjectDetailsSuccess, (state, { project }) => ({
    ...state,
    currentProject: project,
    loading: false
  })),
  
  on(ProjectsActions.loadProjectDetailsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false
  }))
);