import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { ProjectsService } from '../../services/projects.service';
import * as ProjectsActions from './project.actions';

@Injectable()
export class ProjectEffects {
  loadProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectsActions.loadProjects),
      mergeMap(() =>
        this.projectsService.getProjects().pipe(
          map(projects => ProjectsActions.loadProjectsSuccess({ projects })),
          catchError(error => of(ProjectsActions.loadProjectsFailure({ error })))
        )
      )
    )
  );

  loadProjectDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectsActions.loadProjectDetails),
      mergeMap(({ projectId }) =>
        this.projectsService.getProjectDetails(projectId).pipe(
          map(project => ProjectsActions.loadProjectDetailsSuccess({ project })),
          catchError(error => of(ProjectsActions.loadProjectDetailsFailure({ error })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private projectsService: ProjectsService
  ) {}
}