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

# Copiar configuración y código de users
COPY apps/users/package*.json ./apps/users/
COPY apps/users/rsbuild.config.ts ./apps/users/
COPY apps/users/src ./apps/users/src

# Copiar types
COPY types ./types

# Instalar dependencias
RUN npm ci --legacy-peer-deps

# Instalar dependencias de users
WORKDIR /app/apps/users
RUN npm ci --legacy-peer-deps

# Build de la aplicación users
RUN npm run build

# Etapa 2: Producción con nginx
FROM nginx:alpine

# Copiar configuración de nginx
COPY apps/users/nginx.conf /etc/nginx/conf.d/default.conf

# Copiar archivos construidos
COPY --from=builder /app/apps/users/dist /usr/share/nginx/html

# Exponer puerto
EXPOSE 80

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost/health || exit 1

CMD ["nginx", "-g", "daemon off;"]

