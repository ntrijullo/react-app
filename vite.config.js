import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: true, // Permite acceso externo
    strictPort: true,
    allowedHosts: [
      "a2ee-2800-150-114-1776-f95f-7c4f-b971-c92f.ngrok-free.app"
    ]
  }
})
