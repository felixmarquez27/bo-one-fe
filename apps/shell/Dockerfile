# Etapa 1: Build
FROM node:20-alpine AS builder

WORKDIR /app

# Copiar archivos de configuración raíz
COPY package*.json ./
COPY tsconfig.json ./
COPY postcss.config.mjs ./
COPY tailwind.config.js ./

# Copiar estilos globales
COPY styles ./styles

# Copiar configuración y código de shell
COPY apps/shell/package*.json ./apps/shell/
COPY apps/shell/rsbuild.config.ts ./apps/shell/
COPY apps/shell/src ./apps/shell/src

# Copiar types
COPY types ./types

# Instalar dependencias
RUN npm ci --legacy-peer-deps

# Instalar dependencias de shell
WORKDIR /app/apps/shell
RUN npm ci --legacy-peer-deps

# Build de la aplicación shell
RUN npm run build

# Etapa 2: Producción con nginx
FROM nginx:alpine

# Copiar configuración de nginx
COPY apps/shell/nginx.conf /etc/nginx/conf.d/default.conf

# Copiar archivos construidos
COPY --from=builder /app/apps/shell/dist /usr/share/nginx/html

# Exponer puerto
EXPOSE 80

# Variables de entorno para Module Federation
ENV USERS_URL=http://localhost:2001

# Script de inicio para reemplazar variables de entorno
COPY apps/shell/docker-entrypoint.sh /docker-entrypoint.sh
RUN chmod +x /docker-entrypoint.sh

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]

