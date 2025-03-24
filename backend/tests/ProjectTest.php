<?php

namespace Tests\Feature;

use App\Models\Project;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ProjectTest extends TestCase
{
    use RefreshDatabase;
    
    protected function setUp(): void
    {
        parent::setUp();
        $this->user = User::factory()->create(['role' => 'engineer']);
        $this->actingAs($this->user, 'api');
    }
    
    /** @test */
    public function can_create_project()
    {
        $response = $this->postJson('/api/v1/projects', [
            'name' => 'Bridge Construction',
            'description' => 'Construction of a new bridge over the river',
            'start_date' => '2023-01-01',
            'status' => 'planning',
            'engineer_id' => $this->user->id,
            'client_id' => \App\Models\Client::factory()->create()->id,
        ]);
        
        $response->assertStatus(201)
            ->assertJsonStructure([
                'data' => [
                    'id', 'name', 'description', 'status'
                ]
            ]);
        
        $this->assertDatabaseHas('projects', [
            'name' => 'Bridge Construction'
        ]);
    }
    
    /** @test */
    public function can_list_projects()
    {
        Project::factory()->count(3)->create(['engineer_id' => $this->user->id]);
        
        $response = $this->getJson('/api/v1/projects');
        
        $response->assertStatus(200)
            ->assertJsonCount(3, 'data');
    }
}