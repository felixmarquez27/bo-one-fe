# Componentes del Design System BO-ONE

Este documento lista todos los componentes disponibles en el `@bo-one/design-system`.

## Resumen del Análisis

He analizado las páginas y componentes en `apps/shell/src` y he identificado los componentes faltantes en el design system. A continuación se detallan los cambios realizados.

## Componentes Agregados

### Componentes que existían pero no estaban exportados:
1. **Grid** - Sistema de rejilla para layouts responsivos
2. **AppBar** - Barra de aplicación superior
3. **Toolbar** - Barra de herramientas
4. **Drawer** - Cajón lateral/navegación lateral
5. **Avatar** - Avatar de usuario

### Componentes nuevos creados:
6. **List** - Componente de lista
7. **ListItem** - Item de lista
8. **ListItemText** - Texto para items de lista
9. **CircularProgress** - Indicador de carga circular
10. **Chip** - Etiquetas/badges
11. **Menu** - Menú desplegable
12. **MenuItem** - Item de menú
13. **Dialog** - Modal/diálogo
14. **DialogTitle** - Título de diálogo
15. **DialogContent** - Contenido de diálogo
16. **DialogActions** - Acciones de diálogo

## Lista Completa de Componentes Disponibles

### Layout & Contenedores
- **Box** - Contenedor flexible básico
- **Container** - Contenedor con ancho máximo
- **Grid** - Sistema de rejilla
- **Stack** - Apilamiento de elementos
- **Paper** - Superficie elevada

### Navegación
- **AppBar** - Barra de aplicación
- **Toolbar** - Barra de herramientas
- **Drawer** - Cajón lateral
- **Link** - Enlaces
- **Menu** - Menú desplegable
- **MenuItem** - Item de menú

### Inputs & Formularios
- **Button** - Botón
- **IconButton** - Botón de icono
- **TextField** - Campo de texto
- **Checkbox** - Casilla de verificación
- **FormControlLabel** - Etiqueta de control de formulario
- **InputAdornment** - Adornos para inputs

### Display & Feedback
- **Typography** - Tipografía
- **Card** - Tarjeta
- **CardContent** - Contenido de tarjeta
- **Alert** - Alertas
- **Chip** - Etiquetas/badges
- **Avatar** - Avatar de usuario
- **CircularProgress** - Indicador de carga
- **Divider** - Divisor

### Listas
- **List** - Lista
- **ListItem** - Item de lista
- **ListItemText** - Texto de item de lista

### Diálogos
- **Dialog** - Diálogo/modal
- **DialogTitle** - Título de diálogo
- **DialogContent** - Contenido de diálogo
- **DialogActions** - Acciones de diálogo

## Uso

Todos los componentes pueden ser importados desde `@bo-one/design-system`:

```typescript
import { 
  Button, 
  TextField, 
  Card, 
  Grid,
  AppBar,
  Drawer,
  List,
  Dialog,
  CircularProgress,
  // ... etc
} from '@bo-one/design-system';
```

## Notas

- Todos los componentes son wrappers de Material UI
- Heredan todas las props de sus componentes MUI correspondientes
- Se pueden personalizar mediante el sistema de temas del design system
- Están listos para usar con TypeScript (incluyen tipos exportados)

## Total de Componentes

**37 componentes** disponibles en el design system.
