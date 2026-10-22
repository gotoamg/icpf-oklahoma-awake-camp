import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
export default defineConfig({
  plugins: [react()],
  base: process.env.PAGES_BASE || "/icpf-oklahoma-awake-camp",
  resolve: { alias: { '@': path.resolve(__dirname, './src') } }
});