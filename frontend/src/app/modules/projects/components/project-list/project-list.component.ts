import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Project } from '../../shared/models/project.model';
import { AppState } from '../../state/app.state';
import { loadProjects } from '../state/projects.actions';
import { selectProjects, selectLoading } from '../state/projects.selectors';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  projects$: Observable<Project[]>;
  loading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.projects$ = this.store.select(selectProjects);
    this.loading$ = this.store.select(selectLoading);
  }

  ngOnInit(): void {
    this.store.dispatch(loadProjects());
  }

  trackByProjectId(index: number, project: Project): number {
    return project.id;
  }
}