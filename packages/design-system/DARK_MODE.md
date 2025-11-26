# 🌙 Dark Mode - Guía de Uso

El Design System de BO ONE incluye soporte completo para modo oscuro con una paleta de colores optimizada para ambientes con poca luz.

## 🎨 Temas Disponibles

### 1. Light Theme (Predeterminado)
```typescript
import { theme } from '@bo-one/design-system';
```

### 2. Dark Theme
```typescript
import { darkTheme } from '@bo-one/design-system';
```

## 🚀 Uso Básico

### Tema Fijo (Light o Dark)

```typescript
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { darkTheme } from '@bo-one/design-system';

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {/* Tu aplicación */}
    </ThemeProvider>
  );
}
```

### Toggle entre Light y Dark Mode

```typescript
import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme, darkTheme } from '@bo-one/design-system';
import { Switch } from '@mui/material';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const currentTheme = isDarkMode ? darkTheme : theme;

  return (
    <ThemeProvider theme={currentTheme}>
      <CssBaseline />
      
      <Switch 
        checked={isDarkMode}
        onChange={(e) => setIsDarkMode(e.target.checked)}
      />
      
      {/* Tu aplicación */}
    </ThemeProvider>
  );
}
```

## 🎯 Paleta de Colores Dark Mode

### Colores Principales

| Color | Light Mode | Dark Mode |
|-------|-----------|-----------|
| **Primary** | Slate 900 (#0f172a) | Blue 400 (#60a5fa) |
| **Secondary** | Blue 500 (#3b82f6) | Indigo 400 (#818cf8) |
| **Background Default** | Slate 50 (#f8fafc) | Slate 900 (#0f172a) |
| **Background Paper** | White (#ffffff) | Slate 800 (#1e293b) |
| **Text Primary** | Slate 900 (#0f172a) | Slate 100 (#f1f5f9) |
| **Text Secondary** | Slate 600 (#475569) | Slate 300 (#cbd5e1) |

### Colores de Estado

| Estado | Light Mode | Dark Mode |
|--------|-----------|-----------|
| **Success** | Green 500 (#10b981) | Green 400 (#34d399) |
| **Error** | Red 500 (#ef4444) | Red 400 (#f87171) |
| **Warning** | Amber 500 (#f59e0b) | Amber 400 (#fbbf24) |
| **Info** | Blue 500 (#3b82f6) | Blue 400 (#60a5fa) |

## 🔧 Personalización

### Crear Tema Dark Personalizado

```typescript
import { createDarkTheme } from '@bo-one/design-system';

const customDarkTheme = createDarkTheme({
  palette: {
    primary: {
      main: '#your-custom-color',
    },
  },
});
```

### Crear Tema Light Personalizado

```typescript
import { createClaroTheme } from '@bo-one/design-system';

const customLightTheme = createClaroTheme({
  palette: {
    primary: {
      main: '#your-custom-color',
    },
  },
});
```

## 💾 Persistencia del Modo

### Guardar Preferencia en localStorage

```typescript
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme, darkTheme } from '@bo-one/design-system';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const currentTheme = isDarkMode ? darkTheme : theme;

  return (
    <ThemeProvider theme={currentTheme}>
      {/* Tu aplicación */}
    </ThemeProvider>
  );
}
```

### Detectar Preferencia del Sistema

```typescript
import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme, darkTheme } from '@bo-one/design-system';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      setIsDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const currentTheme = isDarkMode ? darkTheme : theme;

  return (
    <ThemeProvider theme={currentTheme}>
      {/* Tu aplicación */}
    </ThemeProvider>
  );
}
```

## 🎨 Componentes Adaptativos

Todos los componentes de Material UI se adaptan automáticamente al tema activo:

```typescript
import { Paper, Card, Button, TextField } from '@mui/material';

// Estos componentes cambiarán automáticamente según el tema
<Paper elevation={2}>
  <Card>
    <Button variant="contained">Click me</Button>
    <TextField label="Input" />
  </Card>
</Paper>
```

## 🌓 Hook Personalizado (Opcional)

Puedes crear un hook para manejar el dark mode:

```typescript
// hooks/useDarkMode.ts
import { useState, useEffect } from 'react';

export function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    if (saved !== null) {
      return saved === 'true';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(prev => !prev);

  return { isDarkMode, setIsDarkMode, toggleDarkMode };
}

// Uso
import { useDarkMode } from './hooks/useDarkMode';
import { theme, darkTheme } from '@bo-one/design-system';

function App() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();
  const currentTheme = isDarkMode ? darkTheme : theme;

  return (
    <ThemeProvider theme={currentTheme}>
      <Switch checked={isDarkMode} onChange={toggleDarkMode} />
      {/* Tu aplicación */}
    </ThemeProvider>
  );
}
```

## 📱 Ejemplo Completo

Ver el archivo `example/DarkModeExample.tsx` para un ejemplo completo con toggle interactivo.

## 🎯 Best Practices

1. **Usa CssBaseline**: Siempre incluye `<CssBaseline />` para normalizar estilos
2. **Persistencia**: Guarda la preferencia del usuario en localStorage
3. **Preferencia del Sistema**: Detecta y respeta la preferencia del sistema operativo
4. **Transiciones Suaves**: Considera agregar transiciones CSS para cambios de tema
5. **Accesibilidad**: Asegúrate de que los contrastes sean adecuados en ambos modos

## 🔍 Troubleshooting

### Los colores no cambian

Asegúrate de estar usando `<CssBaseline />` dentro del `ThemeProvider`:

```typescript
<ThemeProvider theme={currentTheme}>
  <CssBaseline />
  <App />
</ThemeProvider>
```

### Componentes personalizados no se adaptan

Usa los colores del tema en lugar de valores hardcodeados:

```typescript
// ❌ Mal
<Box sx={{ backgroundColor: '#ffffff' }}>

// ✅ Bien
<Box sx={{ backgroundColor: 'background.paper' }}>
```

---

**Versión**: 1.0.0  
**Última actualización**: 2025-11-26
