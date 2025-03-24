import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { ProjectsRoutes } from './projects.routes';
import { ProjectListComponent } from './components/project-list/project-list.component';
import { ProjectDetailComponent } from './components/project-detail/project-detail.component';
import { ProjectFormComponent } from './components/project-form/project-form.component';
import { ProjectsService } from './services/projects.service';
import { projectsReducer } from './state/projects.reducer';
import { ProjectsEffects } from './state/projects.effects';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ProjectListComponent,
    ProjectDetailComponent,
    ProjectFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(ProjectsRoutes),
    ReactiveFormsModule,
    SharedModule,
    StoreModule.forFeature('projects', projectsReducer),
    EffectsModule.forFeature([ProjectsEffects])
  ],
  providers: [
    ProjectsService
  ]
})
export class ProjectsModule { }