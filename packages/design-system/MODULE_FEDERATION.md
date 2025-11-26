# 🔗 Integración con Module Federation

Esta guía explica cómo compartir el Design System entre microfrontends usando Module Federation.

## Opción 1: Como Dependencia Local (Recomendado)

La forma más simple es usar el paquete como dependencia local del workspace:

### En cualquier microfrontend:

```typescript
// Importar directamente
import { theme, WelcomeCard } from '@bo-one/design-system';
```

### Configuración en rsbuild.config.ts:

```typescript
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'yourApp',
      shared: {
        react: { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true },
        '@mui/material': { singleton: true, eager: false },
        '@emotion/react': { singleton: true, eager: false },
        '@emotion/styled': { singleton: true, eager: false },
        '@mui/icons-material': { singleton: true, eager: false },
      },
    }),
  ],
});
```

## Opción 2: Exponer vía Module Federation

Si quieres exponer el design-system como un remote:

### 1. Crear un microfrontend para el design-system

```bash
mkdir apps/design-system-remote
cd apps/design-system-remote
npm init -y
```

### 2. Configurar rsbuild.config.ts:

```typescript
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  server: {
    port: 2002,
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'designSystem',
      filename: 'remoteEntry.js',
      exposes: {
        './theme': '@bo-one/design-system/theme',
        './WelcomeCard': '@bo-one/design-system',
        './ColorPalette': '@bo-one/design-system',
      },
      shared: {
        react: { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true },
        '@mui/material': { singleton: true, eager: true },
        '@emotion/react': { singleton: true, eager: true },
        '@emotion/styled': { singleton: true, eager: true },
        '@mui/icons-material': { singleton: true, eager: true },
      },
      manifest: true,
    }),
  ],
});
```

### 3. En el Shell (consumidor):

```typescript
// rsbuild.config.ts
export default defineConfig({
  plugins: [
    pluginModuleFederation({
      name: 'shell',
      remotes: {
        designSystem: 'designSystem@http://localhost:2002/mf-manifest.json',
      },
      shared: {
        react: { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true },
        '@mui/material': { singleton: true },
        '@emotion/react': { singleton: true },
        '@emotion/styled': { singleton: true },
      },
    }),
  ],
});
```

### 4. Usar en el código:

```typescript
// Lazy load
const DesignSystemTheme = React.lazy(() => import('designSystem/theme'));
const WelcomeCard = React.lazy(() => import('designSystem/WelcomeCard'));

// En tu componente
<Suspense fallback={<div>Loading...</div>}>
  <WelcomeCard />
</Suspense>
```

## Opción 3: Shared Singleton (Más Eficiente)

Para evitar duplicación y asegurar una sola instancia del tema:

### En todos los microfrontends:

```typescript
// rsbuild.config.ts
shared: {
  '@bo-one/design-system': {
    singleton: true,
    eager: false,
    requiredVersion: '^1.0.0',
  },
  '@mui/material': {
    singleton: true,
    eager: false,
  },
  '@emotion/react': {
    singleton: true,
    eager: false,
  },
  '@emotion/styled': {
    singleton: true,
    eager: false,
  },
}
```

## Recomendaciones

1. **Opción 1** es la más simple y recomendada para empezar
2. **Opción 2** es útil si quieres lazy loading del design system
3. **Opción 3** es la más eficiente para producción

## Consideraciones Importantes

### Singleton

Siempre marca Material UI como singleton para evitar conflictos:

```typescript
'@mui/material': { singleton: true }
```

### Eager vs Lazy

- `eager: true` - Carga inmediatamente (mejor para dependencias críticas)
- `eager: false` - Carga bajo demanda (mejor para optimización)

### Versiones

Asegúrate de que todos los microfrontends usen las mismas versiones:

```json
{
  "@mui/material": "^7.3.5",
  "@emotion/react": "^11.14.0",
  "@emotion/styled": "^11.14.1",
  "@mui/icons-material": "^7.3.5"
}
```

## Troubleshooting

### Error: "Invalid hook call"

Esto ocurre cuando hay múltiples instancias de React. Solución:

```typescript
shared: {
  react: { singleton: true, eager: true },
  'react-dom': { singleton: true, eager: true },
}
```

### Estilos no se aplican

Asegúrate de envolver tu app con ThemeProvider:

```typescript
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@bo-one/design-system';

<ThemeProvider theme={theme}>
  <App />
</ThemeProvider>
```

### Componentes no se cargan

Verifica que el remote esté corriendo y accesible:

```bash
# Verificar que el remote responde
curl http://localhost:2002/mf-manifest.json
```

## Ejemplo Completo

Ver el archivo `example/ExampleApp.tsx` para un ejemplo completo de integración.
