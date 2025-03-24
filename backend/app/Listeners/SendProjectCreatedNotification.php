<?php

namespace App\Listeners;

use App\Events\ProjectCreated;
use App\Notifications\NewProjectNotification;

class SendProjectCreatedNotification
{
    public function handle(ProjectCreated $event)
    {
        $project = $event->project;
        
        // Notificar o engenheiro responsável
        $project->engineer->notify(new NewProjectNotification($project));
        
        // Notificar os administradores
        // ...
    }
}