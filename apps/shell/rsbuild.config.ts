import { pluginModuleFederation } from '@module-federation/rsbuild-plugin';
import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';

export default defineConfig({
  server: {
    port: 2000,
  },
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'shell',
      remotes: {
        users: 'users@http://localhost:2001/mf-manifest.json',
      },
      shared: {
        react: { singleton: true, eager: true, requiredVersion: '^19.2.0' },
        'react-dom': { singleton: true, eager: true, requiredVersion: '^19.2.0' },
        '@mui/material': { singleton: true, requiredVersion: false },
        '@emotion/react': { singleton: true, requiredVersion: false },
        '@emotion/styled': { singleton: true, requiredVersion: false },
        '@bo-one/design-system': { singleton: true, requiredVersion: false },
      },
    }),

  ],

});
