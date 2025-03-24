import { Project } from '../../shared/models/project.model';

export interface ProjectsState {
  projects: Project[];
  loading: boolean;
  error: string | null;
}

export const initialState: ProjectsState = {
  projects: [],
  loading: false,
  error: null
};