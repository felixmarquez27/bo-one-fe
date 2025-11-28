import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import path from 'path';

export default defineConfig({
  server: {
    port: 2000,
  },

  source: {
    alias: {
      '@bo-one/design-system': path.resolve(__dirname, '../../packages/design-system/src'),
    },
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'shell',
      remotes: {
        users: 'users@http://localhost:2001/mf-manifest.json',
      },

      shared: {
        react: { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true },
        '@bo-one/design-system': { singleton: true, eager: true },
      },
      manifest: false,
    }),

  ],

});
