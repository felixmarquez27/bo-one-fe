# 🚀 BO-ONE - Sistema de Gestión Empresarial

Sistema modular de gestión empresarial construido con **Micro Frontends** usando **Module Federation**, **React**, **TypeScript** y **Tailwind CSS**.

## 📋 Tabla de Contenidos

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Arquitectura](#arquitectura)
- [Inicio Rápido](#inicio-rápido)
- [Desarrollo](#desarrollo)
- [Despliegue](#despliegue)
- [Documentación](#documentación)

## ✨ Características

- 🎯 **Micro Frontends**: Arquitectura modular con Module Federation
- 🛡️ **Tolerancia a Fallos**: Sistema resiliente que maneja módulos desconectados
- 🔐 **Autenticación**: Sistema de login corporativo
- 📊 **Dashboard**: Panel de control con métricas en tiempo real
- 👥 **Gestión de Usuarios**: CRUD completo con búsqueda y filtros
- 🎨 **Diseño Corporativo**: UI profesional con Tailwind CSS
- 🧭 **Enrutamiento**: React Router v6 con rutas protegidas
- 🐳 **Docker Ready**: Configuración completa para despliegue en contenedores
- 📱 **Responsive**: Diseño adaptable a todos los dispositivos

## 🛠️ Tecnologías

### Frontend
- **React 19** - Framework UI
- **TypeScript** - Tipado estático
- **React Router v6** - Enrutamiento
- **Tailwind CSS** - Estilos
- **Rsbuild** - Build tool

### Arquitectura
- **Module Federation** - Micro frontends
- **Monorepo** - Gestión de múltiples aplicaciones

### DevOps
- **Docker** - Contenedores
- **Docker Compose** - Orquestación
- **Nginx** - Servidor web

## 🏗️ Arquitectura

```
bo-one-fe/
├── apps/
│   ├── shell/              # Aplicación principal (Host)
│   │   ├── src/
│   │   │   ├── components/ # Login, Sidebar
│   │   │   ├── pages/      # Dashboard, Configuración, etc.
│   │   │   └── App.tsx     # Router principal
│   │   ├── Dockerfile      # Build Docker producción
│   │   ├── Dockerfile.dev  # Build Docker desarrollo
│   │   ├── nginx.conf      # Configuración nginx
│   │   └── rsbuild.config.ts
│   │
│   └── users/              # Módulo de usuarios (Remote)
│       ├── src/
│       │   └── App.tsx     # Tabla de usuarios
│       ├── Dockerfile      # Build Docker producción
│       ├── Dockerfile.dev  # Build Docker desarrollo
│       ├── nginx.conf      # Configuración nginx
│       └── rsbuild.config.ts
│
├── docker/                 # 🐳 Configuración Docker general
│   ├── docker-compose.yml  # Orquestación producción
│   ├── docker-compose.dev.yml  # Orquestación desarrollo
│   ├── nginx-proxy.conf    # Reverse proxy
│   ├── deploy.sh           # Script de despliegue
│   └── README.md           # Guía Docker
│
├── styles/
│   └── globals.css         # Estilos globales Tailwind
│
└── tailwind.config.js      # Configuración Tailwind
```

### Flujo de Micro Frontends

```
┌─────────────────────────────────────┐
│         Shell (Host)                │
│     http://localhost:3000           │
│                                     │
│  ┌──────────────────────────────┐  │
│  │  Router                      │  │
│  │  - /login                    │  │
│  │  - /dashboard                │  │
│  │  - /usuarios ──────────┐     │  │
│  │  - /configuracion      │     │  │
│  └────────────────────────┼─────┘  │
└─────────────────────────────┼───────┘
                              │
                              │ Module Federation
                              │
                              ▼
            ┌──────────────────────────────┐
            │   Users (Remote)             │
            │   http://localhost:3001      │
            │                              │
            │  - Tabla de usuarios         │
            │  - CRUD completo             │
            │  - Búsqueda y filtros        │
            └──────────────────────────────┘
```

## 🚀 Inicio Rápido

### Prerequisitos

- Node.js 20+
- npm 9+
- Docker (opcional, para despliegue)

### Instalación

```bash
# 1. Clonar el repositorio
git clone <repository-url>
cd bo-one-fe

# 2. Instalar dependencias
npm install

# 3. Instalar dependencias de cada aplicación
cd apps/shell && npm install
cd ../users && npm install
cd ../..
```

### Ejecutar en Desarrollo

```bash
# Terminal 1: Shell (Host)
cd apps/shell
npm run dev
# http://localhost:2000

# Terminal 2: Users (Remote)
cd apps/users
npm run dev
# http://localhost:2001
```

Abre http://localhost:2000 en tu navegador.

**Credenciales de prueba:**
- Email: cualquier email válido
- Contraseña: cualquier contraseña

## 💻 Desarrollo

### Estructura de Scripts

```bash
# En cada aplicación (shell/users)
npm run dev         # Servidor de desarrollo
npm run build       # Build de producción
npm run preview     # Previsualizar build
```

### Agregar Nuevas Páginas

1. Crear componente en `apps/shell/src/pages/NuevaPagina.tsx`
2. Importar en `apps/shell/src/App.tsx`
3. Agregar ruta en el Router
4. Agregar enlace en `components/Sidebar.tsx`

Ver [README_ROUTING.md](apps/shell/README_ROUTING.md) para más detalles.

### Agregar Nuevos Micro Frontends

1. Crear nueva carpeta en `apps/`
2. Configurar Module Federation en `rsbuild.config.ts`
3. Exponer componentes necesarios
4. Importar en Shell

## 🐳 Despliegue

### Con Docker Compose (Recomendado)

**Desde la raíz del proyecto:**

```bash
# Despliegue en desarrollo (hot-reload)
docker compose -f docker-compose.dev.yml up -d --build

# Despliegue en producción
docker compose up -d --build

# Ver logs
docker compose logs -f

# Detener servicios
docker compose down
```

### Con Script de Despliegue

**Desde la carpeta docker/:**

```bash
cd docker

# Dar permisos de ejecución (solo primera vez - Linux/Mac)
chmod +x deploy.sh

# Comandos disponibles
./deploy.sh dev      # Desarrollo
./deploy.sh prod     # Producción
./deploy.sh stop     # Detener
./deploy.sh clean    # Limpieza completa
./deploy.sh logs     # Ver logs
```

### URLs de Despliegue

**Desarrollo:**
- Shell: http://localhost:2000
- Users: http://localhost:2001

**Producción:**
- Shell: http://localhost:3000
- Users: http://localhost:3001
- Proxy: http://localhost:80

Ver [DOCKER_DEPLOYMENT.md](DOCKER_DEPLOYMENT.md) para más detalles.

## 📚 Documentación

- [Comandos Docker](DOCKER_COMMANDS.md) - ⭐ Comandos rápidos de Docker
- [Tolerancia a Fallos](REMOTE_FALLBACK.md) - 🛡️ Manejo de módulos remotos desconectados
- [Enrutamiento](apps/shell/README_ROUTING.md) - Sistema de rutas
- [Despliegue Docker](DOCKER_DEPLOYMENT.md) - Guía completa de Docker
- [Docker README](docker/README.md) - Configuración Docker
- [Quick Start](QUICK_START.md) - Inicio rápido
- [Tailwind Module Federation](TAILWIND_MODULE_FEDERATION.md) - Solución de estilos

## 🎨 Características de UI

### Componentes Implementados

- ✅ Login corporativo
- ✅ Sidebar con navegación
- ✅ Dashboard con métricas
- ✅ Tabla de usuarios con CRUD
- ✅ Búsqueda y filtros
- ✅ Página 404
- ✅ Diseño responsive
- ✅ Dark mode ready

### Paleta de Colores

- **Principal**: Slate (gris azulado)
- **Acentos**: Azul, Verde, Rojo
- **Fondo**: Slate-50
- **Texto**: Slate-900

## 🔐 Seguridad

- Rutas protegidas con autenticación
- Validación en frontend
- Headers CORS configurados
- Variables de entorno para secretos
- Sin secretos en imágenes Docker

## 📈 Roadmap

- [ ] Autenticación con JWT
- [ ] Integración con backend
- [ ] Tests unitarios y E2E
- [ ] CI/CD con GitHub Actions
- [ ] Más módulos (Productos, Reportes)
- [ ] Internacionalización (i18n)
- [ ] Tema dark/light
- [ ] PWA

## 🤝 Contribución

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto es privado y confidencial.

## 👥 Equipo

- Desarrollo: [Tu Nombre]
- Empresa: BO-ONE

## 📞 Soporte

Para soporte técnico, contacta a: admin@bo-one.com

---

**Versión**: 1.0.0  
**Última actualización**: 2025

