import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  server: {
    port: 2001,
  },

  source: {
    define: {
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
    },
  },

  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'users',
      exposes: {
        './UsersApp': './src/App',
      },
      shared: {
        react: { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true },
        '@mui/material': { singleton: true, eager: true },
        '@emotion/react': { singleton: true, eager: true },
        '@emotion/styled': { singleton: true, eager: true },
        '@bo-one/design-system': { singleton: true, eager: true },
      },
      manifest: true,
    }),
  ],

});

