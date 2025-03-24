import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AppState } from '../../../../store/app.reducer';
import { Project } from '../../models/project.model';
import { loadProjectDetails } from '../../store/project.actions';
import { selectCurrentProject } from '../../store/project.selectors';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project$: Observable<Project | null>;
  
  constructor(
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
    this.project$ = this.store.select(selectCurrentProject);
  }

  ngOnInit(): void {
    const projectId = this.route.snapshot.paramMap.get('id');
    if (projectId) {
      this.store.dispatch(loadProjectDetails({ projectId }));
    }
  }
}