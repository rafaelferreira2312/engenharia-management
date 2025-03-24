<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ProjectController;
use App\Http\Controllers\API\AuthController;

Route::prefix('v1')->group(function () {
    // Autenticação
    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'register']);
    
    // Rotas autenticadas
    Route::middleware('auth:api')->group(function () {
        // Projetos
        Route::apiResource('projects', ProjectController::class);
        
        // Documentos
        Route::prefix('projects/{project}')->group(function () {
            Route::apiResource('documents', ProjectDocumentController::class);
            Route::post('documents/{document}/upload', [ProjectDocumentController::class, 'upload']);
        });
        
        // Chat
        Route::prefix('chat')->group(function () {
            Route::get('projects/{project}/messages', [ChatController::class, 'getMessages']);
            Route::post('projects/{project}/messages', [ChatController::class, 'sendMessage']);
        });
    });
});