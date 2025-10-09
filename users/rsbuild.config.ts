import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';

export default defineConfig({
  server: {
    port: 2001,
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'remote1',
      filename: 'remoteEntry.js',
      exposes: {
        './UsersApp': './src/App',
      },
      shared: {
        react: { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true },
      },
      manifest: true, // genera mf-manifest.json automáticamente
    }),
  ],
});

