import { createAction, props } from '@ngrx/store';
import { Project } from '../../shared/models/project.model';

export const loadProjects = createAction('[Projects] Load Projects');
export const loadProjectsSuccess = createAction(
  '[Projects] Load Projects Success',
  props<{ projects: Project[] }>()
);
export const loadProjectsFailure = createAction(
  '[Projects] Load Projects Failure',
  props<{ error: string }>()
);

export const createProject = createAction(
  '[Projects] Create Project',
  props<{ project: Project }>()
);
export const createProjectSuccess = createAction(
  '[Projects] Create Project Success',
  props<{ project: Project }>()
);
export const createProjectFailure = createAction(
  '[Projects] Create Project Failure',
  props<{ error: string }>()
);