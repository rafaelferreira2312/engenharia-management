<#
.SYNOPSIS
    Cria a estrutura de pastas e arquivos vazios para o projeto
.DESCRIPTION
    Versão simplificada que cria apenas a estrutura sem conteúdo
.NOTES
    Autor: RafaelDev
    Versão: 1.0
#>

$projectRoot = ".\engenharia-management"

# Estrutura de diretórios principal
$dirs = @(
    # Backend
    "$projectRoot\backend",
    "$projectRoot\backend\app",
    "$projectRoot\backend\app\Models",
    "$projectRoot\backend\app\Http",
    "$projectRoot\backend\app\Http\Controllers",
    "$projectRoot\backend\app\Http\Controllers\API",
    "$projectRoot\backend\app\Repositories",
    "$projectRoot\backend\app\Services",
    "$projectRoot\backend\config",
    "$projectRoot\backend\database",
    "$projectRoot\backend\database\migrations",
    "$projectRoot\backend\database\seeders",
    "$projectRoot\backend\routes",
    "$projectRoot\backend\tests",
    "$projectRoot\backend\docker",
    
    # Frontend
    "$projectRoot\frontend",
    "$projectRoot\frontend\src",
    "$projectRoot\frontend\src\app",
    "$projectRoot\frontend\src\app\core",
    "$projectRoot\frontend\src\app\modules",
    "$projectRoot\frontend\src\app\shared",
    "$projectRoot\frontend\src\assets",
    "$projectRoot\frontend\src\environments",
    
    # Docker e infra
    "$projectRoot\docker",
    "$projectRoot\.github",
    "$projectRoot\.github\workflows",
    
    # Documentação
    "$projectRoot\docs"
)

# Arquivos principais a serem criados vazios
$files = @(
    # Backend
    "$projectRoot\backend\config\database.php",
    "$projectRoot\backend\app\Models\Project.php",
    "$projectRoot\backend\app\Models\ProjectDocument.php",
    "$projectRoot\backend\app\Http\Controllers\API\ProjectController.php",
    "$projectRoot\backend\app\Services\ProjectService.php",
    "$projectRoot\backend\app\Repositories\ProjectRepository.php",
    "$projectRoot\backend\routes\api.php",
    "$projectRoot\backend\docker\Dockerfile",
    
    # Frontend
    "$projectRoot\frontend\src\app\app.module.ts",
    "$projectRoot\frontend\src\app\core\core.module.ts",
    
    # Docker
    "$projectRoot\docker-compose.yml",
    
    # Documentação
    "$projectRoot\docs\INSTALLATION.md",
    "$projectRoot\docs\ARCHITECTURE.md",
    "$projectRoot\README.md"
)

# Criar diretórios
Write-Host "Criando estrutura de diretórios..." -ForegroundColor Cyan
foreach ($dir in $dirs) {
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
        Write-Host "Diretório criado: $dir" -ForegroundColor Green
    }
}

# Criar arquivos vazios
Write-Host "Criando arquivos vazios..." -ForegroundColor Cyan
foreach ($file in $files) {
    if (-not (Test-Path $file)) {
        New-Item -ItemType File -Path $file -Force | Out-Null
        Write-Host "Arquivo criado: $file" -ForegroundColor Yellow
    }
}

Write-Host "Estrutura criada com sucesso em $projectRoot!" -ForegroundColor Green