import { defineConfig } from 'tsup';

export default defineConfig({
    entry: {
        index: 'src/index.ts',
        theme: 'src/theme/index.ts',
    },
    format: ['cjs', 'esm'],
    dts: true,
    sourcemap: true,
    clean: true,
    external: ['react', 'react-dom', '@mui/material', '@emotion/react', '@emotion/styled'],
    treeshake: true,
    splitting: false,
});
