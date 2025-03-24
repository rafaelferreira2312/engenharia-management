<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Jenssegers\Mongodb\Eloquent\HybridRelations;

class Project extends Model
{
    use HybridRelations;
    
    protected $connection = 'mysql';
    
    protected $fillable = [
        'name',
        'description',
        'start_date',
        'end_date',
        'status',
        'engineer_id',
        'client_id',
        'technical_specifications',
    ];
    
    protected $casts = [
        'start_date' => 'datetime',
        'end_date' => 'datetime',
        'technical_specifications' => 'array',
    ];
    
    public function engineer()
    {
        return $this->belongsTo(User::class, 'engineer_id');
    }
    
    public function client()
    {
        return $this->belongsTo(Client::class);
    }
    
    public function documents()
    {
        return $this->hasMany(ProjectDocument::class);
    }
    
    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
}