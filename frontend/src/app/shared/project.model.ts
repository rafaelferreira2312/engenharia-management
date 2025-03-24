export interface Project {
    id: number;
    name: string;
    description: string;
    start_date: string;
    end_date?: string;
    status: 'planning' | 'in_progress' | 'completed' | 'on_hold';
    engineer_id: number;
    client_id: number;
    technical_specifications?: any;
    created_at?: string;
    updated_at?: string;
  }