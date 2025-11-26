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
      filename: 'remoteEntry.js',
      exposes: {
        './UsersApp': './src/App',
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: '^19.2.0' },
        'react-dom': { singleton: true, eager: true, requiredVersion: '^19.2.0' },
        '@mui/material': { singleton: true, requiredVersion: false },
        '@emotion/react': { singleton: true, requiredVersion: false },
        '@emotion/styled': { singleton: true, requiredVersion: false },
        '@bo-one/design-system': { singleton: true, requiredVersion: false },
      },
      manifest: true,
    }),
  ],

});

