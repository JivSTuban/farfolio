import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    dedupe: ['three']
  },
  build: {
    commonjsOptions: {
      include: [/three/, /node_modules/]
    }
  }
});
