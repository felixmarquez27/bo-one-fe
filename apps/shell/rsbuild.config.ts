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
        react: { singleton: true, eager: true },
        'react-dom': { singleton: true, eager: true },
        '@mui/material': { singleton: true, eager: true },
        '@emotion/react': { singleton: true, eager: true },
        '@emotion/styled': { singleton: true, eager: true },
        '@bo-one/design-system': { singleton: true, eager: true },
      },
      manifest: false,
    }),

  ],

});
