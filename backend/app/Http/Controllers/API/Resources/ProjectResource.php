<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProjectResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'status' => $this->status,
            'dates' => [
                'start' => $this->start_date->format('Y-m-d'),
                'end' => $this->end_date?->format('Y-m-d'),
            ],
            'engineer' => new UserResource($this->whenLoaded('engineer')),
            'client' => new ClientResource($this->whenLoaded('client')),
            'specifications' => $this->technical_specifications,
            'created_at' => $this->created_at->format('Y-m-d H:i:s'),
        ];
    }
}