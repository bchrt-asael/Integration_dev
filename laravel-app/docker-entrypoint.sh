#!/bin/sh

set -eu

# Si la migration échoue, le backend s’arrête.
php artisan migrate --force

exec php artisan serve --host=0.0.0.0 --port=8000