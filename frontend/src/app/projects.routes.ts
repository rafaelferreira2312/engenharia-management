import { Routes } from '@angular/router';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';

export const ProjectsRoutes: Routes = [
  {
    path: '',
    component: ProjectListComponent
  },
  {
    path: 'new',
    component: ProjectFormComponent
  },
  {
    path: ':id',
    component: ProjectDetailComponent
  },
  {
    path: ':id/edit',
    component: ProjectFormComponent
  }
];