<?php

namespace App\Services;

use App\Models\Project;
use App\Repositories\ProjectRepository;
use Illuminate\Pagination\LengthAwarePaginator;
use Illuminate\Support\Facades\Redis;

class ProjectService
{
    public function __construct(
        private ProjectRepository $projectRepository
    ) {}
    
    public function getFilteredProjects($user, array $filters): LengthAwarePaginator
    {
        $cacheKey = "user_{$user->id}_projects_" . md5(json_encode($filters));
        
        if (Redis::exists($cacheKey)) {
            return unserialize(Redis::get($cacheKey));
        }
        
        $projects = $this->projectRepository->getFilteredForUser($user, $filters);
        
        Redis::setex($cacheKey, 3600, serialize($projects));
        
        return $projects;
    }
    
    public function createProject(array $data): Project
    {
        $project = $this->projectRepository->create($data);
        
        event(new \App\Events\ProjectCreated($project));
        
        return $project;
    }
    
    public function updateProject(Project $project, array $data): Project
    {
        return $this->projectRepository->update($project, $data);
    }
}