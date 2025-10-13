# 🐳 Comandos Docker - BO-ONE

Guía rápida de comandos Docker para el proyecto.

**Requisitos:**
- Docker (v20.10+)
- Docker Compose (v2.0+)
- Node.js 20+ (imágenes Docker)

## 📍 Desde la Raíz del Proyecto

Todos estos comandos se ejecutan desde la raíz del proyecto (`bo-one-fe/`):

### 🚀 Desarrollo

```bash
# Iniciar en modo desarrollo (con hot-reload)
docker compose -f docker-compose.dev.yml up -d --build

# Ver logs en tiempo real
docker compose -f docker-compose.dev.yml logs -f

# Ver logs de un servicio específico
docker compose -f docker-compose.dev.yml logs -f shell-dev
docker compose -f docker-compose.dev.yml logs -f users-dev

# Detener servicios
docker compose -f docker-compose.dev.yml down

# Detener y eliminar volúmenes
docker compose -f docker-compose.dev.yml down -v

# Reiniciar un servicio
docker compose -f docker-compose.dev.yml restart shell-dev
```

**URLs de desarrollo:**
- Shell: http://localhost:2000
- Users: http://localhost:2001

### 🚢 Producción

```bash
# Iniciar en modo producción
docker compose up -d --build

# Ver logs
docker compose logs -f

# Ver logs de un servicio
docker compose logs -f shell
docker compose logs -f users

# Detener servicios
docker compose down

# Detener y eliminar volúmenes
docker compose down -v

# Reiniciar un servicio
docker compose restart shell
```

**URLs de producción:**
- Shell: http://localhost:3000
- Users: http://localhost:3001
- Proxy: http://localhost:80

## 🔧 Comandos Útiles

### Ver contenedores

```bash
# Ver contenedores corriendo
docker ps

# Ver todos los contenedores (incluyendo detenidos)
docker ps -a

# Ver estadísticas de recursos
docker stats
```

### Ver logs

```bash
# Logs de un contenedor específico
docker logs bo-one-shell-dev
docker logs bo-one-users-dev

# Seguir logs en tiempo real
docker logs -f bo-one-shell-dev

# Ver últimas 100 líneas
docker logs --tail 100 bo-one-shell-dev
```

### Reconstruir imágenes

```bash
# Reconstruir sin caché (desarrollo)
docker compose -f docker-compose.dev.yml build --no-cache

# Reconstruir sin caché (producción)
docker compose build --no-cache

# Reconstruir un servicio específico
docker compose build shell
docker compose -f docker-compose.dev.yml build shell-dev
```

### Ejecutar comandos en contenedores

```bash
# Entrar a un contenedor
docker exec -it bo-one-shell-dev sh

# Ejecutar un comando
docker exec bo-one-shell-dev npm list
```

### Limpieza

```bash
# Eliminar contenedores parados
docker container prune

# Eliminar imágenes sin usar
docker image prune -a

# Eliminar volúmenes sin usar
docker volume prune

# Limpieza completa (¡CUIDADO!)
docker system prune -a --volumes
```

## 🎯 Health Checks

```bash
# Verificar que los servicios estén funcionando
curl http://localhost:2000/health  # Shell Dev
curl http://localhost:2001/health  # Users Dev
curl http://localhost:3000/health  # Shell Prod
curl http://localhost:3001/health  # Users Prod
```

## 📦 Build Individual

```bash
# Build de imágenes individuales
docker build -f apps/shell/Dockerfile -t bo-one-shell .
docker build -f apps/users/Dockerfile -t bo-one-users .

# Build de desarrollo
docker build -f apps/shell/Dockerfile.dev -t bo-one-shell-dev .
docker build -f apps/users/Dockerfile.dev -t bo-one-users-dev .
```

## 🔄 Workflow Típico

### Desarrollo Diario

```bash
# 1. Iniciar servicios
docker compose -f docker-compose.dev.yml up -d --build

# 2. Ver logs si hay problemas
docker compose -f docker-compose.dev.yml logs -f

# 3. Trabajar en el código (hot-reload automático)

# 4. Detener al final del día
docker compose -f docker-compose.dev.yml down
```

### Despliegue a Producción

```bash
# 1. Detener servicios de desarrollo si están corriendo
docker compose -f docker-compose.dev.yml down

# 2. Build y deploy de producción
docker compose up -d --build

# 3. Verificar que todo esté funcionando
docker ps
curl http://localhost:3000/health
curl http://localhost:3001/health

# 4. Ver logs si hay problemas
docker compose logs -f
```

## 🐛 Troubleshooting

### Problema: Puerto en uso

```bash
# Ver qué está usando el puerto
netstat -ano | findstr :2000  # Windows
lsof -i :2000                 # Linux/Mac

# Detener todos los contenedores
docker compose -f docker-compose.dev.yml down
docker compose down
```

### Problema: Cambios no se reflejan

```bash
# Reconstruir sin caché
docker compose -f docker-compose.dev.yml down
docker compose -f docker-compose.dev.yml build --no-cache
docker compose -f docker-compose.dev.yml up -d
```

### Problema: Contenedor se detiene inmediatamente

```bash
# Ver logs del contenedor
docker logs bo-one-shell-dev

# Ver todos los contenedores (incluyendo detenidos)
docker ps -a
```

### Problema: Sin espacio en disco

```bash
# Limpiar imágenes y contenedores antiguos
docker system prune -a

# Ver uso de espacio
docker system df
```

## 📚 Más Información

- Ver `docker/README.md` para configuración detallada
- Ver `DOCKER_DEPLOYMENT.md` para guía completa
- Ver `README.md` para documentación general

## 💡 Tips

1. **Usa `-d` (detached)** para correr en segundo plano
2. **Usa `--build`** para reconstruir las imágenes
3. **Usa `-f`** para seguir logs en tiempo real
4. **Usa `--no-cache`** si hay problemas de caché
5. **Health checks** en `/health` para verificar estado

