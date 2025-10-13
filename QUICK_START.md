# ⚡ Guía de Inicio Rápido - BO-ONE

## 🚀 Desarrollo Local (Sin Docker)

```bash
# Terminal 1 - Shell
cd apps/shell
npm run dev

# Terminal 2 - Users
cd apps/users
npm run dev

# Abrir navegador
open http://localhost:2000
```

## 🐳 Desarrollo con Docker

```bash
cd docker

# Iniciar todos los servicios
docker-compose -f docker-compose.dev.yml up

# URLs
# Shell: http://localhost:2000
# Users: http://localhost:2001
```

## 🚢 Producción con Docker

```bash
cd docker

# Build y deploy
docker-compose -f docker-compose.yml up --build -d

# URLs
# Shell: http://localhost:3000
# Users: http://localhost:3001
# Proxy: http://localhost:80
```

## 📋 Comandos Útiles

### Docker Compose

```bash
cd docker

# Ver logs en tiempo real
docker-compose logs -f

# Ver logs de un servicio
docker-compose logs -f shell

# Reiniciar un servicio
docker-compose restart shell

# Detener todos los servicios
docker-compose down

# Detener y eliminar volúmenes
docker-compose down -v

# Reconstruir sin caché
docker-compose build --no-cache
```

### Script de Despliegue

```bash
cd docker

# Desarrollo
./deploy.sh dev

# Producción
./deploy.sh prod

# Detener
./deploy.sh stop

# Limpiar todo
./deploy.sh clean

# Ver logs
./deploy.sh logs
```

## 🔧 Troubleshooting

### Problema: Puerto en uso

```bash
# Windows
netstat -ano | findstr :2000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:2000 | xargs kill -9
```

### Problema: Estilos no se aplican

```bash
# Limpiar y reconstruir
docker-compose down -v
docker-compose build --no-cache
docker-compose up -d
```

### Problema: Module Federation no carga

```bash
# Verificar que ambos servicios están corriendo
curl http://localhost:2000/health
curl http://localhost:2001/health

# Verificar logs
docker-compose logs users
```

## 📝 Notas

- **Shell** debe iniciarse después de **Users** en producción
- Los cambios en `tailwind.config.js` requieren reiniciar
- CORS está configurado automáticamente en Docker
- Health checks disponibles en `/health`

## 🔐 Login de Prueba

```
Email: cualquier@email.com
Contraseña: cualquiera
```

## 📊 Estructura de URLs

### Desarrollo (Local)
```
Shell:  http://localhost:2000
Users:  http://localhost:2001
```

### Producción (Docker)
```
Shell:  http://localhost:3000
Users:  http://localhost:3001
Proxy:  http://localhost:80
```

### Rutas de la Aplicación
```
/login          - Inicio de sesión
/dashboard      - Panel principal
/usuarios       - Gestión de usuarios
/configuracion  - Configuración
```

## 🎯 Checklist de Despliegue

- [ ] Instalar Docker y Docker Compose
- [ ] Verificar puertos disponibles (80, 3000, 3001)
- [ ] Configurar variables de entorno si es necesario
- [ ] Ejecutar `docker-compose build`
- [ ] Ejecutar `docker-compose up -d`
- [ ] Verificar health checks
- [ ] Probar login y navegación
- [ ] Verificar que Module Federation funciona

## 💡 Tips

1. Usa el script `deploy.sh` para automatizar tareas
2. Revisa los logs si algo no funciona
3. Health checks en `/health` te ayudan a diagnosticar
4. CORS ya está configurado, no necesitas cambios
5. Los contenedores se reinician automáticamente

## 📚 Documentación Completa

- [README.md](README.md) - Documentación completa
- [DOCKER_DEPLOYMENT.md](DOCKER_DEPLOYMENT.md) - Guía de Docker detallada
- [docker/README.md](docker/README.md) - Configuración Docker
- [README_ROUTING.md](apps/shell/README_ROUTING.md) - Sistema de rutas
- [TAILWIND_MODULE_FEDERATION.md](TAILWIND_MODULE_FEDERATION.md) - Estilos

