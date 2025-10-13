# 🐳 Configuración Docker - BO-ONE

Esta carpeta contiene toda la configuración necesaria para desplegar los micro frontends con Docker.

## 📁 Estructura

```
bo-one-fe/
├── docker/                     # 🐳 Configuración Docker general
│   ├── docker-compose.yml      # Orquestación producción
│   ├── docker-compose.dev.yml  # Orquestación desarrollo
│   ├── nginx-proxy.conf        # Reverse proxy (opcional)
│   ├── deploy.sh               # Script de despliegue
│   └── README.md               # Este archivo
│
├── apps/
│   ├── shell/
│   │   ├── Dockerfile          # Build producción
│   │   ├── Dockerfile.dev      # Build desarrollo
│   │   ├── nginx.conf          # Configuración nginx
│   │   └── docker-entrypoint.sh
│   └── users/
│       ├── Dockerfile          # Build producción
│       ├── Dockerfile.dev      # Build desarrollo
│       └── nginx.conf          # Configuración nginx
```

## 🚀 Uso Rápido

### Desarrollo

```bash
cd docker
./deploy.sh dev

# O con docker-compose directamente
docker-compose -f docker-compose.dev.yml up
```

### Producción

```bash
cd docker
./deploy.sh prod

# O con docker-compose directamente
docker-compose -f docker-compose.yml up -d
```

### Detener

```bash
cd docker
./deploy.sh stop
```

## 📋 Comandos

Todos los comandos deben ejecutarse desde la carpeta `docker/`:

```bash
# Desarrollo
./deploy.sh dev

# Producción
./deploy.sh prod

# Detener servicios
./deploy.sh stop

# Limpieza completa
./deploy.sh clean

# Ver logs
./deploy.sh logs [dev|prod]

# Ayuda
./deploy.sh help
```

## 🔧 Configuración Manual

### Build de imágenes individuales

```bash
# Desde la raíz del proyecto

# Shell
docker build -f apps/shell/Dockerfile -t bo-one-shell .

# Users
docker build -f apps/users/Dockerfile -t bo-one-users .
```

### Ejecutar contenedores individuales

```bash
# Shell
docker run -d \
  --name bo-one-shell \
  -p 3000:80 \
  -e USERS_URL=http://localhost:3001 \
  bo-one-shell

# Users
docker run -d \
  --name bo-one-users \
  -p 3001:80 \
  bo-one-users
```

## 🌐 URLs

### Desarrollo
- Shell: http://localhost:2000
- Users: http://localhost:2001

### Producción
- Shell: http://localhost:3000
- Users: http://localhost:3001
- Proxy: http://localhost:80

## 📝 Variables de Entorno

Puedes configurar las URLs de Module Federation:

```yaml
environment:
  - USERS_URL=http://users/mf-manifest.json
```

Para producción:

```yaml
environment:
  - USERS_URL=https://users.midominio.com/mf-manifest.json
```

## 🐛 Troubleshooting

### Ver logs
```bash
docker-compose -f docker-compose.yml logs -f
```

### Reiniciar un servicio
```bash
docker-compose -f docker-compose.yml restart shell
```

### Reconstruir sin caché
```bash
docker-compose -f docker-compose.yml build --no-cache
```

### Health checks
```bash
curl http://localhost:3000/health
curl http://localhost:3001/health
```

## 📚 Documentación

Para más información, consulta:
- [DOCKER_DEPLOYMENT.md](../DOCKER_DEPLOYMENT.md) - Guía completa
- [QUICK_START.md](../QUICK_START.md) - Inicio rápido
- [README.md](../README.md) - Documentación general

## 🔒 Seguridad

- Las imágenes usan Node 20 Alpine (ligera y segura)
- Multi-stage builds para reducir tamaño
- Health checks configurados
- CORS configurado para Module Federation
- Variables de entorno para secretos

