<?php

namespace App\Models;

use Jenssegers\Mongodb\Eloquent\Model;

class ProjectDocument extends Model
{
    protected $connection = 'mongodb';
    protected $collection = 'project_documents';
    
    protected $fillable = [
        'project_id',
        'name',
        'type',
        'content',
        'versions',
        'metadata',
    ];
    
    protected $casts = [
        'versions' => 'array',
        'metadata' => 'array',
    ];
}