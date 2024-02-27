import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/PortFolio/', // Adjust this to match your GitHub Pages URL
  plugins: [react()]
});
