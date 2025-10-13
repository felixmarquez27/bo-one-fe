# 🐳 Guía de Despliegue con Docker - BO-ONE

Esta guía explica cómo desplegar los micro frontends de manera independiente usando Docker.

## 📋 Requisitos Previos

- Docker (v20.10 o superior)
- Docker Compose (v2.0 o superior)
- Node.js 20+ (para desarrollo local)
- 4GB de RAM mínimo
- Puertos disponibles: 80, 3000, 3001, 2000, 2001

## 🏗️ Estructura de Archivos Docker

```
bo-one-fe/
├── apps/
│   ├── shell/
│   │   ├── Dockerfile              # Build de producción
│   │   ├── Dockerfile.dev          # Build de desarrollo
│   │   ├── nginx.conf              # Configuración nginx
│   │   └── docker-entrypoint.sh    # Script de inicio
│   └── users/
│       ├── Dockerfile              # Build de producción
│       ├── Dockerfile.dev          # Build de desarrollo
│       └── nginx.conf              # Configuración nginx
│
├── docker/                         # 🐳 Configuración Docker general
│   ├── docker-compose.yml          # Orquestación producción
│   ├── docker-compose.dev.yml      # Orquestación desarrollo
│   ├── nginx-proxy.conf            # Reverse proxy
│   ├── deploy.sh                   # Script de despliegue
│   └── README.md                   # Guía Docker
│
└── .dockerignore                   # Archivos a ignorar
```

## 🚀 Despliegue en Producción

### Opción 1: Usando Docker Compose (RECOMENDADO)

```bash
# Navegar a la carpeta docker
cd docker

# 1. Construir las imágenes
docker-compose -f docker-compose.yml build

# 2. Iniciar todos los servicios
docker-compose -f docker-compose.yml up -d

# 3. Verificar que los contenedores estén corriendo
docker-compose ps

# 4. Ver logs
docker-compose logs -f
```

**URLs de acceso:**
- Shell (Host): http://localhost:3000
- Users (Remote): http://localhost:3001
- Proxy: http://localhost:80

### Opción 2: Construir y ejecutar individualmente

#### Shell Application

```bash
# Construir imagen (desde la raíz del proyecto)
docker build -f apps/shell/Dockerfile -t bo-one-shell:latest .

# Ejecutar contenedor
docker run -d \
  --name bo-one-shell \
  -p 3000:80 \
  -e USERS_URL=http://localhost:3001 \
  bo-one-shell:latest
```

#### Users Application

```bash
# Construir imagen (desde la raíz del proyecto)
docker build -f apps/users/Dockerfile -t bo-one-users:latest .

# Ejecutar contenedor
docker run -d \
  --name bo-one-users \
  -p 3001:80 \
  bo-one-users:latest
```

## 💻 Despliegue en Desarrollo

Para desarrollo con hot-reload:

```bash
# Navegar a la carpeta docker
cd docker

# Iniciar servicios de desarrollo
docker-compose -f docker-compose.dev.yml up

# Ver logs
docker-compose -f docker-compose.dev.yml logs -f

# Detener servicios
docker-compose -f docker-compose.dev.yml down
```

**URLs de desarrollo:**
- Shell: http://localhost:2000
- Users: http://localhost:2001

## 🔧 Comandos Útiles

### Gestión de Contenedores

```bash
# Desde la carpeta docker/
cd docker

# Ver contenedores corriendo
docker-compose ps

# Detener todos los servicios
docker-compose down

# Detener y eliminar volúmenes
docker-compose down -v

# Reiniciar un servicio específico
docker-compose restart shell

# Ver logs de un servicio específico
docker-compose logs -f shell

# Ejecutar comandos dentro del contenedor
docker-compose exec shell sh
```

### Limpieza

```bash
# Eliminar contenedores parados
docker container prune -f

# Eliminar imágenes sin usar
docker image prune -a -f

# Limpieza completa (¡CUIDADO!)
docker system prune -a --volumes -f
```

### Reconstruir imágenes

```bash
# Reconstruir sin caché
docker-compose build --no-cache

# Reconstruir un servicio específico
docker-compose build --no-cache shell
```

## 🌐 Configuración de URLs

### Variables de Entorno

En `docker-compose.yml` puedes configurar las URLs de los micro frontends:

```yaml
environment:
  - USERS_URL=http://users/mf-manifest.json
```

### Para producción con dominio real:

```yaml
environment:
  - USERS_URL=https://users.midominio.com/mf-manifest.json
```

## 🔍 Health Checks

Cada aplicación tiene un endpoint de health check:

```bash
# Verificar estado de Shell
curl http://localhost:3000/health

# Verificar estado de Users
curl http://localhost:3001/health
```

## 📊 Monitoreo

### Ver uso de recursos

```bash
# Estadísticas en tiempo real
docker stats

# Inspeccionar contenedor
docker inspect bo-one-shell
```

## 🐛 Troubleshooting

### Problema: Los contenedores no inician

```bash
# Ver logs detallados
docker-compose logs

# Verificar puertos en uso
netstat -an | grep "3000\|3001\|80"
```

### Problema: CORS errors en Module Federation

Verifica que nginx tenga los headers CORS correctos en `apps/*/nginx.conf`:

```nginx
add_header Access-Control-Allow-Origin *;
add_header Access-Control-Allow-Methods "GET, POST, OPTIONS";
```

### Problema: Build falla

```bash
# Limpiar caché de Docker
docker builder prune -a

# Reconstruir sin caché
docker-compose build --no-cache
```

### Problema: Los estilos no se aplican

Asegúrate de que:
1. `tailwind.config.js` existe en la raíz
2. Los estilos se importan en cada aplicación
3. Las imágenes se reconstruyeron después de los cambios

```bash
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

## 🚢 Despliegue en Cloud

### AWS ECS

```bash
# Tag y push a ECR
docker tag bo-one-shell:latest <account-id>.dkr.ecr.<region>.amazonaws.com/bo-one-shell:latest
docker push <account-id>.dkr.ecr.<region>.amazonaws.com/bo-one-shell:latest
```

### Google Cloud Run

```bash
# Tag y push a GCR
docker tag bo-one-shell:latest gcr.io/<project-id>/bo-one-shell:latest
docker push gcr.io/<project-id>/bo-one-shell:latest
```

### Azure Container Instances

```bash
# Tag y push a ACR
docker tag bo-one-shell:latest <registry-name>.azurecr.io/bo-one-shell:latest
docker push <registry-name>.azurecr.io/bo-one-shell:latest
```

## 🔐 Seguridad

### Best Practices

1. **No incluir secretos en las imágenes**
2. **Usar variables de entorno para configuración**
3. **Actualizar imágenes base regularmente**
4. **Escanear imágenes con herramientas de seguridad**

```bash
# Escanear vulnerabilidades (ejemplo con Trivy)
trivy image bo-one-shell:latest
```

## 📈 Optimización

### Reducir tamaño de imágenes

Ya implementado:
- ✅ Multi-stage builds
- ✅ Imágenes base alpine
- ✅ .dockerignore configurado
- ✅ Limpieza de caché npm

### Tamaño aproximado de imágenes:

- Shell: ~50MB
- Users: ~40MB
- Total: ~90MB

## 🔄 CI/CD

### GitHub Actions (Ejemplo)

```yaml
name: Build and Deploy

on:
  push:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      
      - name: Build Shell
        run: docker build -f apps/shell/Dockerfile -t bo-one-shell .
      
      - name: Build Users
        run: docker build -f apps/users/Dockerfile -t bo-one-users .
      
      - name: Push to Registry
        run: |
          docker push bo-one-shell
          docker push bo-one-users
```

## 📝 Notas Importantes

1. **Los micro frontends se despliegan independientemente**
2. **Cada aplicación tiene su propio contenedor**
3. **Las URLs de Module Federation se configuran en tiempo de ejecución**
4. **Nginx maneja el routing de React Router**
5. **CORS está configurado para permitir Module Federation**

## 🆘 Soporte

Si encuentras problemas:

1. Revisa los logs: `docker-compose logs -f`
2. Verifica health checks: `curl http://localhost:3000/health`
3. Inspecciona el contenedor: `docker inspect <container-name>`
4. Consulta la documentación de Module Federation

## 📚 Referencias

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Documentation](https://docs.docker.com/compose/)
- [Module Federation](https://module-federation.github.io/)
- [Nginx Documentation](https://nginx.org/en/docs/)

