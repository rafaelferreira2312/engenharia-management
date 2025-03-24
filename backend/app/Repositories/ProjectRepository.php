<?php

namespace App\Repositories;

use App\Models\Project;
use Illuminate\Pagination\LengthAwarePaginator;

class ProjectRepository
{
    public function getFilteredForUser($user, array $filters): LengthAwarePaginator
    {
        return Project::query()
            ->where(function ($query) use ($user) {
                $query->where('engineer_id', $user->id)
                    ->orWhereHas('client', function ($q) use ($user) {
                        $q->where('user_id', $user->id);
                    });
            })
            ->when(isset($filters['status']), function ($query) use ($filters) {
                $query->where('status', $filters['status']);
            })
            ->when(isset($filters['search']), function ($query) use ($filters) {
                $query->where('name', 'like', "%{$filters['search']}%");
            })
            ->with(['engineer', 'client'])
            ->paginate($filters['per_page'] ?? 15);
    }
    
    public function create(array $data): Project
    {
        return Project::create($data);
    }
    
    public function update(Project $project, array $data): Project
    {
        $project->update($data);
        return $project->fresh();
    }
}