ARG PHP_VERSION=8.3

FROM php:${PHP_VERSION}-fpm-alpine

WORKDIR /var/www

RUN apk add --no-cache \
    git \
    unzip \
    libpng-dev \
    oniguruma-dev \
    libxml2-dev \
    zip \
    mysql-client

RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

COPY . .

RUN chown -R www-data:www-data storage bootstrap/cache

EXPOSE 8000

CMD ["php", "artisan", "serve", "--host=0.0.0.0", "--port=8000"]