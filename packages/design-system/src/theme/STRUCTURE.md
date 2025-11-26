# 📁 Estructura del Theme

La estructura del tema ha sido organizada de forma modular para mejor mantenibilidad y escalabilidad.

## 🗂️ Estructura de Archivos

```
src/theme/
├── index.ts          # Barrel export - punto de entrada principal
├── types.ts          # Tipos TypeScript compartidos
├── shared.ts         # Configuraciones compartidas (typography, components, etc)
├── lightTheme.ts     # Tema claro (light mode)
├── darkTheme.ts      # Tema oscuro (dark mode)
└── theme.ts          # ⚠️ DEPRECATED - mantener por compatibilidad
```

## 📄 Descripción de Archivos

### `types.ts`
Define los tipos TypeScript compartidos:
- `BOOneThemeOptions` - Interface para opciones de tema

### `shared.ts`
Contiene configuraciones compartidas entre temas:
- `typography` - Configuración de tipografía
- `components` - Estilos de componentes MUI
- `spacing` - Sistema de espaciado (8px)
- `breakpoints` - Puntos de quiebre responsive
- `shape` - Configuración de bordes redondeados

### `lightTheme.ts`
Tema claro de BO ONE:
- Paleta de colores light mode
- `theme` - Tema predeterminado
- `createLightTheme()` - Factory function
- `createClaroTheme()` - Alias para compatibilidad

### `darkTheme.ts`
Tema oscuro de BO ONE:
- Paleta de colores dark mode
- `darkTheme` - Tema oscuro predeterminado
- `createDarkTheme()` - Factory function

### `index.ts`
Barrel export que re-exporta todo:
```typescript
export { theme, darkTheme } from './lightTheme' | './darkTheme';
export { createLightTheme, createDarkTheme } from ...;
export type { BOOneThemeOptions } from './types';
```

## 🎯 Ventajas de esta Estructura

### 1. **Separación de Responsabilidades**
Cada archivo tiene una responsabilidad clara:
- Tipos en `types.ts`
- Configuraciones compartidas en `shared.ts`
- Cada tema en su propio archivo

### 2. **Mantenibilidad**
- Fácil encontrar y modificar paletas de colores
- Cambios en un tema no afectan al otro
- Configuraciones compartidas en un solo lugar

### 3. **Escalabilidad**
- Fácil agregar nuevos temas (ej: `highContrastTheme.ts`)
- Fácil agregar variantes (ej: `lightTheme.blue.ts`)
- Fácil personalizar configuraciones compartidas

### 4. **Tree Shaking**
- Los bundlers pueden eliminar código no usado
- Importar solo lo necesario

### 5. **Testing**
- Cada archivo puede ser testeado independientemente
- Mocks más fáciles de crear

## 📦 Imports Recomendados

### Desde el paquete (recomendado)
```typescript
import { theme, darkTheme } from '@bo-one/design-system';
```

### Desde archivos específicos (uso avanzado)
```typescript
import { theme } from '@bo-one/design-system/theme/lightTheme';
import { darkTheme } from '@bo-one/design-system/theme/darkTheme';
import { typography } from '@bo-one/design-system/theme/shared';
```

## 🔄 Migración desde theme.ts

El archivo `theme.ts` original aún existe pero está marcado como deprecated.
Todos los exports funcionan igual, solo cambia la organización interna.

### Antes (theme.ts monolítico)
```typescript
// Todo en un solo archivo de 342 líneas
const lightColors = { ... };
const darkColors = { ... };
const typography = { ... };
const components = { ... };
export const theme = createTheme(...);
export const darkTheme = createTheme(...);
```

### Ahora (modular)
```typescript
// types.ts (8 líneas)
export interface BOOneThemeOptions { ... }

// shared.ts (150 líneas)
export const typography = { ... };
export const components = { ... };

// lightTheme.ts (100 líneas)
import { typography, components } from './shared';
const lightColors = { ... };
export const theme = createTheme(...);

// darkTheme.ts (100 líneas)
import { typography, components } from './shared';
const darkColors = { ... };
export const darkTheme = createTheme(...);
```

## 🚀 Agregar un Nuevo Tema

Para agregar un nuevo tema (ej: High Contrast):

1. Crear `highContrastTheme.ts`:
```typescript
import { createTheme } from '@mui/material/styles';
import type { BOOneThemeOptions } from './types';
import { typography, components, spacing, breakpoints, shape } from './shared';

const highContrastColors = {
  // Tu paleta de alto contraste
};

const highContrastThemeOptions: BOOneThemeOptions = {
  palette: highContrastColors,
  typography,
  components,
  spacing,
  breakpoints,
  shape,
};

export const highContrastTheme = createTheme(highContrastThemeOptions);
```

2. Exportar en `index.ts`:
```typescript
export { highContrastTheme } from './highContrastTheme';
```

3. ¡Listo! Ya está disponible:
```typescript
import { highContrastTheme } from '@bo-one/design-system';
```

## 📝 Notas

- **Compatibilidad**: Todos los exports anteriores siguen funcionando
- **Performance**: No hay impacto en performance, solo mejor organización
- **Bundle Size**: Igual o menor gracias a mejor tree-shaking

---

**Última actualización**: 2025-11-26
