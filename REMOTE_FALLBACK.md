# 🛡️ Manejo de Fallos en Module Federation

Este proyecto implementa un sistema robusto de tolerancia a fallos para los módulos remotos (Module Federation).

## 🎯 Objetivo

Si un módulo remoto (como `users`) no está disponible, la aplicación principal sigue funcionando y muestra un mensaje informativo en lugar de fallar completamente.

## 🏗️ Implementación

### 1. Error Boundary

**Archivo:** `apps/shell/src/components/ErrorBoundary.tsx`

Componente que captura errores de React, incluyendo errores de carga de módulos remotos.

```typescript
<ErrorBoundary fallback={<RemoteNotAvailable moduleName="Users" />}>
  <UsersApp />
</ErrorBoundary>
```

### 2. Componente de Fallback

**Archivo:** `apps/shell/src/components/RemoteNotAvailable.tsx`

Interfaz amigable que se muestra cuando un módulo remoto no está disponible:

- ✅ Mensaje claro sobre el problema
- ✅ Razones posibles del fallo
- ✅ Información técnica para administradores
- ✅ Comandos para verificar y reiniciar el servicio
- ✅ Botón de reintentar (opcional)

### 3. Lazy Loading con Manejo de Errores

**Archivo:** `apps/shell/src/App.tsx`

```typescript
const UsersApp = React.lazy(() =>
  import('users/UsersApp').catch((error) => {
    console.error('Error al cargar el módulo Users:', error);
    return {
      default: () => <RemoteNotAvailable moduleName="Users" />
    };
  })
);
```

## 🧪 Cómo Probar

### Escenario 1: Módulo Users Desconectado

```bash
# 1. Iniciar solo shell
docker compose -f docker-compose.dev.yml up -d shell-dev

# 2. Abrir la aplicación
open http://localhost:2000

# 3. Navegar a /usuarios
# Verás el componente RemoteNotAvailable
```

### Escenario 2: Módulo Users se Cae Durante Ejecución

```bash
# 1. Iniciar ambos servicios
docker compose -f docker-compose.dev.yml up -d

# 2. Detener users mientras la app está corriendo
docker stop bo-one-users-dev

# 3. Navegar a /usuarios
# El ErrorBoundary capturará el error
```

### Escenario 3: Reiniciar el Módulo

```bash
# 1. Con la app mostrando el error, reiniciar users
docker start bo-one-users-dev

# 2. Recargar la página o hacer clic en "Reintentar"
# El módulo debería cargar normalmente
```

## 📋 Características del Sistema

### ✅ Resiliencia
- La aplicación principal **nunca se cae**
- Solo el módulo afectado muestra el error
- Los demás módulos siguen funcionando

### ✅ Información Clara
- Mensaje amigable para usuarios
- Detalles técnicos para administradores
- Sugerencias para resolver el problema

### ✅ Recuperación Automática
- El lazy loading reintenta al navegar nuevamente
- No requiere reiniciar la aplicación principal

### ✅ Logs para Debug
- Errores se registran en console
- Información útil para diagnosticar problemas

## 🎨 Diseño del Componente de Error

El componente `RemoteNotAvailable` muestra:

1. **Header**: Título y botón de reintentar
2. **Alerta Amarilla**: Explicación del problema y razones comunes
3. **Info Técnica**: Detalles del módulo y comandos Docker
4. **Footer**: Mensaje tranquilizador

## 🔧 Personalización

### Agregar Más Módulos Remotos

```typescript
// Para cada módulo remoto
const NuevoModulo = React.lazy(() =>
  import('nuevo-modulo/App').catch((error) => {
    console.error('Error al cargar NuevoModulo:', error);
    return {
      default: () => <RemoteNotAvailable moduleName="NuevoModulo" />
    };
  })
);

// En las rutas
<ErrorBoundary fallback={<RemoteNotAvailable moduleName="NuevoModulo" />}>
  <NuevoModulo />
</ErrorBoundary>
```

### Agregar Retry Logic

```typescript
export const RemoteNotAvailable: React.FC<RemoteNotAvailableProps> = ({ 
  moduleName, 
  onRetry 
}) => {
  const handleRetry = () => {
    window.location.reload();
  };

  return (
    <div>
      {/* ... */}
      <button onClick={onRetry || handleRetry}>
        Reintentar
      </button>
    </div>
  );
};
```

## 🌐 Casos de Uso

### 1. Desarrollo Local
- Un desarrollador trabaja solo en shell
- No necesita levantar todos los servicios
- Los módulos no disponibles muestran el fallback

### 2. Mantenimiento
- Un módulo está en actualización
- Los demás módulos siguen funcionando
- Mensaje claro al usuario sobre el mantenimiento

### 3. Problemas de Red
- Falla la conexión entre módulos
- La app no se rompe completamente
- Usuario puede seguir usando otros módulos

### 4. Despliegue Gradual
- Se despliegan módulos uno por uno
- Los módulos nuevos cargan cuando estén listos
- Rollback sin afectar toda la aplicación

## 📊 Ventajas

✅ **Mejor UX**: Usuario informado, no solo pantalla en blanco
✅ **Desarrollo Flexible**: No requiere todos los servicios
✅ **Producción Resiliente**: Fallos parciales no tumban todo
✅ **Debug Fácil**: Logs claros y mensajes informativos
✅ **Escalable**: Fácil agregar más módulos

## 🚨 Monitoreo

Puedes agregar monitoreo de errores:

```typescript
componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
  // Enviar a servicio de monitoreo
  // Sentry, LogRocket, etc.
  console.error('Error en Module Federation:', error, errorInfo);
  
  // Opcional: tracking
  analytics.track('remote_module_error', {
    module: 'users',
    error: error.message,
  });
}
```

## 📚 Referencias

- [Module Federation Best Practices](https://module-federation.io/)
- [React Error Boundaries](https://react.dev/reference/react/Component#catching-rendering-errors-with-an-error-boundary)
- [Micro Frontend Resilience Patterns](https://martinfowler.com/articles/micro-frontends.html)

---

**Estado**: ✅ Implementado y funcionando
**Versión**: 1.0.0

