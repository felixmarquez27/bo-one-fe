#!/bin/sh
set -e

# Reemplazar variables de entorno en los archivos JS
# Esto permite configurar las URLs de los micro frontends en tiempo de ejecución

echo "Configurando URLs de Module Federation..."
echo "USERS_URL: ${USERS_URL:-http://localhost:2001}"

# Buscar y reemplazar URLs en archivos JavaScript
find /usr/share/nginx/html -type f -name "*.js" -exec sed -i "s|http://localhost:2001|${USERS_URL}|g" {} \;

echo "Configuración completada. Iniciando nginx..."

# Ejecutar el comando original de nginx
exec "$@"

