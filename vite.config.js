import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // Map src directory for absolute imports
      '@': path.resolve(__dirname, './src'),
      'components': path.resolve(__dirname, './src/components'),
      'examples': path.resolve(__dirname, './src/examples'),
      'layouts': path.resolve(__dirname, './src/layouts'),
      'assets': path.resolve(__dirname, './src/assets'),
      'context': path.resolve(__dirname, './src/context'),
      'variables': path.resolve(__dirname, './src/variables'),
      'routes': path.resolve(__dirname, './src/routes'),
      'App': path.resolve(__dirname, './src/App'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
})

