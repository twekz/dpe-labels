import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/main.ts'),
      name: 'dpe-labels',
      fileName: 'dpe-labels',
      // fileName: (format) => `YOUR_LIBRARY_NAME.${format}.js`,
    },
  },
});
