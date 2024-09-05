/// <reference types="vitest" />
import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { minify } from 'rollup-plugin-esbuild';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      fileName: 'dpe-labels',
    },
    sourcemap: true,
    rollupOptions: {
      output: [
        {
          entryFileNames: 'dpe-labels.js',
          format: 'es',
        },
        {
          entryFileNames: 'dpe-labels.min.js',
          format: 'es',
          plugins: [minify()],
        },
      ],
    },
  },
  plugins: [dts({
    rollupTypes: true,
    exclude: ['**/*.test.ts'],
  })],
  test: {
    coverage: {
      enabled: true,
      include: ['lib/**'],
    },
  },
});
