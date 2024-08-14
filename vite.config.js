import { resolve } from 'path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      name: 'dpe-labels',
      fileName: 'dpe-labels',
    },
    rollupOptions: {
      output: {
        assetFileNames: 'dpe-labels.[ext]',
      },
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
