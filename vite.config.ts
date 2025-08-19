import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
  },
  define: {
    // Allow the use of process.env in our code, injecting the environment variables from Vite
    'process.env': process.env
  },
  server: {
    port: 3000
  },
  preview: {
    port: 4000
  }
})
