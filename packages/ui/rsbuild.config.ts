import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [
        pluginReact(),
    ],
    resolve: {
        alias: {
            // INSTRUCCIÓN DIRECTA A RSBUILD: 
            // Cuando veas 'ui-lib/...' reemplázalo por el path absoluto a 'packages/ui/src/...'
            'ui-lib': path.resolve(__dirname, './src'),
        },
    },
    // ... otras configuraciones (ej. server)
});