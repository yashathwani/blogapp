import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['pg-hstore'], // Exclude pg-hstore from optimization
  },
  build: {
    rollupOptions: {
      external: ['pg-hstore'], // Mark pg-hstore as external
    },
  },
});

