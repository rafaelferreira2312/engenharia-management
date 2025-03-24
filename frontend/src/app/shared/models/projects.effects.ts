import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ProjectsService } from '../services/projects.service';
import * as ProjectsActions from './projects.actions';

@Injectable()
export class ProjectsEffects {
  loadProjects$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectsActions.loadProjects),
      mergeMap(() =>
        this.projectsService.getProjects().pipe(
          map(projects => ProjectsActions.loadProjectsSuccess({ projects })),
          catchError(error => of(ProjectsActions.loadProjectsFailure({ error: error.message })))
        )
      )
    )
  );

  createProject$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProjectsActions.createProject),
      mergeMap(({ project }) =>
        this.projectsService.createProject(project).pipe(
          map(createdProject => ProjectsActions.createProjectSuccess({ project: createdProject })),
          catchError(error => of(ProjectsActions.createProjectFailure({ error: error.message })))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private projectsService: ProjectsService
  ) {}
}