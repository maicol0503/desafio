import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  optimizeDeps: {
    include: ['**/*.jsx'], // Ensure JSX files are included for optimization
  },
  plugins: [react()]
});

