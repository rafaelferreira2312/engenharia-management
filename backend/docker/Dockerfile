FROM php:8.2-fpm

# 1. Instalar dependências do sistema
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    libzip-dev \
    libssl-dev

# 2. Instalar extensão MongoDB
RUN pecl install mongodb && \
    docker-php-ext-enable mongodb

# 3. Instalar outras extensões PHP
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd zip

# 4. Limpar cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# 5. Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# 6. Configurar diretório de trabalho
WORKDIR /var/www

# 7. Copiar APENAS os arquivos do composer primeiro (caminho corrigido)
COPY ./backend/composer.* ./

# 8. Instalar dependências
RUN composer install --no-dev --optimize-autoloader --ignore-platform-reqs

# 9. Copiar o resto do código do backend
COPY ./backend .

# 10. Configurar permissões
RUN chown -R www-data:www-data storage
RUN chmod -R 775 storage

EXPOSE 8000
CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]