# Iconos en BO ONE Design System

## Uso de Iconos

Los iconos están centralizados en el design system y se importan junto con los demás componentes:

```typescript
import { 
  Visibility, 
  VisibilityOff, 
  MenuIcon,
  // ... otros iconos
} from '@bo-one/design-system';
```

## Iconos Disponibles

### Navegación y UI
- `MenuIcon` - Menú hamburguesa
- `CloseIcon` - Cerrar/X
- `ChevronLeft` - Flecha izquierda
- `ChevronRight` - Flecha derecha
- `ExpandMore` - Expandir hacia abajo
- `ExpandLess` - Contraer hacia arriba

### Acciones
- `AddIcon` - Agregar/Más
- `EditIcon` - Editar
- `DeleteIcon` - Eliminar
- `CheckIcon` - Confirmar
- `ClearIcon` - Limpiar

### Usuario y Sistema
- `PersonIcon` - Usuario/Perfil
- `SettingsIcon` - Configuración
- `DashboardIcon` - Dashboard
- `LogoutIcon` - Cerrar sesión
- `SearchIcon` - Búsqueda

### Visibilidad
- `Visibility` - Mostrar (ej: mostrar contraseña)
- `VisibilityOff` - Ocultar (ej: ocultar contraseña)

### Estados y Feedback
- `InfoIcon` - Información
- `WarningIcon` - Advertencia
- `ErrorIcon` - Error
- `CheckCircleIcon` - Éxito/Completado

## Agregar Nuevos Iconos

Si necesitas agregar un nuevo icono al design system:

1. Abre `/packages/design-system/src/icons/index.ts`
2. Importa el icono desde `@mui/icons-material`
3. Expórtalo con un alias descriptivo (ej: `Menu as MenuIcon`)
4. Agrégalo a la exportación en `/packages/design-system/src/index.ts`

### Ejemplo:

```typescript
// En icons/index.ts
export { 
    // ... iconos existentes
    Favorite as FavoriteIcon,
} from '@mui/icons-material';

// En index.ts principal
export {
    // ... iconos existentes
    FavoriteIcon,
} from './icons';
```

## Ventajas de Este Enfoque

✅ **Consistencia**: Todos los iconos vienen del mismo lugar  
✅ **Mantenibilidad**: Fácil cambiar de librería de iconos en el futuro  
✅ **Control de versiones**: Una sola dependencia de `@mui/icons-material`  
✅ **Type Safety**: TypeScript completo en toda la aplicación  
✅ **Tree Shaking**: Solo se importan los iconos que realmente usas
