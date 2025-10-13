# Sistema de Enrutamiento - BO-ONE

## 🚀 Configuración

Este proyecto utiliza **React Router v6** para manejar la navegación entre páginas.

## 📍 Rutas Disponibles

### Rutas Públicas
- `/login` - Pantalla de inicio de sesión

### Rutas Protegidas (requieren autenticación)
- `/` - Redirección automática a `/dashboard` o `/login`
- `/dashboard` - Panel principal con estadísticas
- `/usuarios` - Módulo de gestión de usuarios (Module Federation)
- `/productos` - Módulo de productos
- `/reportes` - Módulo de reportes
- `/configuracion` - Configuración del sistema

### Rutas Especiales
- `*` (404) - Página de error para rutas no encontradas

## 🔒 Protección de Rutas

Todas las rutas excepto `/login` están protegidas mediante el componente `ProtectedRoute`:

```typescript
<ProtectedRoute isAuthenticated={isAuthenticated}>
  <MainLayout onLogout={handleLogout}>
    <Dashboard />
  </MainLayout>
</ProtectedRoute>
```

Si un usuario no autenticado intenta acceder a una ruta protegida, será redirigido a `/login`.

## 🧭 Navegación

### Desde el Sidebar
El sidebar usa `Link` de React Router para navegación declarativa:

```typescript
<Link to="/dashboard">Dashboard</Link>
```

### Navegación Programática
Para navegar programáticamente, usa el hook `useNavigate`:

```typescript
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate();
navigate('/dashboard');
```

## 📦 Module Federation

El módulo de usuarios (`UsersApp`) se carga mediante Module Federation y React Lazy:

```typescript
const UsersApp = React.lazy(() => import('users/UsersApp'));
```

La navegación funciona transparentemente con los módulos federados.

## 🔄 Flujo de Autenticación

1. Usuario accede a `/` → Redirección a `/login` (si no autenticado)
2. Usuario ingresa credenciales → `setIsAuthenticated(true)`
3. Redirección automática a `/dashboard`
4. Usuario navega libremente por las rutas protegidas
5. Usuario hace logout → `setIsAuthenticated(false)` → Redirección a `/login`

## 📱 Características Adicionales

### Cierre automático del Sidebar en móviles
Al hacer clic en un enlace del menú en dispositivos móviles, el sidebar se cierra automáticamente:

```typescript
<Link onClick={() => setIsSidebarOpen(false)}>
```

### Resaltado de ruta activa
El enlace de la ruta actual se resalta usando `useLocation`:

```typescript
const location = useLocation();
const isActive = (path: string) => location.pathname === path;
```

## 🛠️ Agregar Nuevas Rutas

1. Crea el componente de la página en `src/pages/`
2. Importa el componente en `App.tsx`
3. Agrega la ruta en el `<Routes>`:

```typescript
<Route
  path="/nueva-ruta"
  element={
    <ProtectedRoute isAuthenticated={isAuthenticated}>
      <MainLayout onLogout={handleLogout}>
        <NuevoComponente />
      </MainLayout>
    </ProtectedRoute>
  }
/>
```

4. Agrega el enlace en el Sidebar (`components/Sidebar.tsx`):

```typescript
{ id: 'nuevo', name: 'Nuevo', path: '/nueva-ruta' }
```

## 🎯 Ejemplo de Uso

```typescript
import { useNavigate, useParams, useLocation } from 'react-router-dom';

function MiComponente() {
  const navigate = useNavigate();
  const { id } = useParams(); // Para rutas con parámetros
  const location = useLocation();

  const irADashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div>
      <p>Ruta actual: {location.pathname}</p>
      <button onClick={irADashboard}>Ir al Dashboard</button>
    </div>
  );
}
```

## 📚 Documentación

Para más información sobre React Router:
- [React Router Documentation](https://reactrouter.com/)
- [React Router Tutorial](https://reactrouter.com/en/main/start/tutorial)

