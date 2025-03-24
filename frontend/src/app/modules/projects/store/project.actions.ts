import { createAction, props } from '@ngrx/store';
import { Project } from '../models/project.model';

export const loadProjects = createAction('[Projects] Load Projects');
export const loadProjectsSuccess = createAction(
  '[Projects] Load Projects Success',
  props<{ projects: Project[] }>()
);
export const loadProjectsFailure = createAction(
  '[Projects] Load Projects Failure',
  props<{ error: string }>()
);

export const loadProjectDetails = createAction(
  '[Projects] Load Project Details',
  props<{ projectId: string }>()
);
export const loadProjectDetailsSuccess = createAction(
  '[Projects] Load Project Details Success',
  props<{ project: Project }>()
);
export const loadProjectDetailsFailure = createAction(
  '[Projects] Load Project Details Failure',
  props<{ error: string }>()
);