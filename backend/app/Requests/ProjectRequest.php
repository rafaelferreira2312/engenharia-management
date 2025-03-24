<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProjectRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }
    
    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
            'description' => 'required|string',
            'start_date' => 'required|date',
            'end_date' => 'nullable|date|after:start_date',
            'status' => 'required|in:planning,in_progress,completed,on_hold',
            'engineer_id' => 'required|exists:users,id',
            'client_id' => 'required|exists:clients,id',
            'technical_specifications' => 'nullable|array',
        ];
    }
}