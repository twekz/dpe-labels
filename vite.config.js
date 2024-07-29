import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'dpe-labels',
      fileName: 'dpe-labels',
    },
    rollupOptions: {
      output: {
        assetFileNames: 'dpe-labels.[ext]',
      },
    },
  },
});
