# 🎨 BO ONE - Design System

Design System corporativo basado en **Material UI** para el proyecto BO ONE.

## 📦 Instalación

Este paquete está diseñado para ser usado internamente en el monorepo de BO ONE.

```bash
# Desde la raíz del proyecto
npm install

# Instalar dependencias del design-system
cd packages/design-system
npm install
```

## 🚀 Uso

### Importar el Tema

```typescript
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@bo-one/design-system';

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Tu aplicación */}
    </ThemeProvider>
  );
}
```

### Crear un Tema Personalizado

```typescript
import { createClaroTheme } from '@bo-one/design-system';

const customTheme = createClaroTheme({
  palette: {
    primary: {
      main: '#custom-color',
    },
  },
});
```

### Usar Dark Mode

```typescript
import { ThemeProvider } from '@mui/material/styles';
import { darkTheme } from '@bo-one/design-system';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {/* Tu aplicación */}
    </ThemeProvider>
  );
}
```

Ver [DARK_MODE.md](DARK_MODE.md) para guía completa de dark mode.

### Usar Componentes

```typescript
import { WelcomeCard, ColorPalette } from '@bo-one/design-system';

function MyPage() {
  return (
    <div>
      <WelcomeCard 
        title="Bienvenido"
        description="Descripción personalizada"
        version="1.0.0"
      />
      <ColorPalette />
    </div>
  );
}
```

## 🎨 Paleta de Colores

El Design System incluye una paleta corporativa basada en Slate:

- **Primary**: Slate 900 (#0f172a)
- **Secondary**: Blue 500 (#3b82f6)
- **Success**: Green 500 (#10b981)
- **Error**: Red 500 (#ef4444)
- **Warning**: Amber 500 (#f59e0b)
- **Info**: Blue 500 (#3b82f6)

## 📝 Tipografía

Fuente principal: **Inter**

Jerarquía de títulos:
- H1: 2.5rem, weight 700
- H2: 2rem, weight 600
- H3: 1.75rem, weight 600
- H4: 1.5rem, weight 600
- H5: 1.25rem, weight 600
- H6: 1rem, weight 600

## 🧩 Componentes Disponibles

### WelcomeCard

Tarjeta de bienvenida con información del sistema.

```typescript
<WelcomeCard 
  title="Título personalizado"
  description="Descripción"
  version="1.0.0"
/>
```

### ColorPalette

Demostración visual de todos los colores del tema.

```typescript
<ColorPalette />
```

## 🏗️ Estructura

```
design-system/
├── src/
│   ├── theme/
│   │   ├── theme.ts       # Configuración del tema
│   │   └── index.ts       # Exports del tema
│   ├── components/
│   │   ├── WelcomeCard.tsx
│   │   ├── ColorPalette.tsx
│   │   └── index.ts
│   └── index.ts           # Entry point principal
├── package.json
├── tsconfig.json
└── tsup.config.ts
```

## 🔧 Desarrollo

```bash
# Compilar el paquete
npm run build

# Modo watch (desarrollo)
npm run dev

# Type checking
npm run type-check
```

## 📦 Build

El paquete se compila a:
- **CommonJS** (dist/index.js)
- **ES Modules** (dist/index.mjs)
- **TypeScript Definitions** (dist/index.d.ts)

## 🔗 Module Federation

Este paquete está preparado para ser usado con Module Federation:

1. Puede ser compartido entre microfrontends
2. Usa peer dependencies para evitar duplicación
3. Compatible con React 19 y Material UI 7

## 📚 Documentación de Material UI

Para más información sobre componentes disponibles:
- [Material UI Components](https://mui.com/material-ui/all-components/)
- [Material UI Theming](https://mui.com/material-ui/customization/theming/)

## 🎯 Roadmap

- [ ] Más componentes personalizados
- [ ] Storybook para documentación
- [ ] Tokens de diseño exportables
- [ ] Modo oscuro
- [ ] Componentes de formularios
- [ ] Componentes de navegación
- [ ] Sistema de iconos personalizado

## 📄 Licencia

Privado - Uso interno de BO ONE

---

**Versión**: 1.0.0  
**Última actualización**: 2025
