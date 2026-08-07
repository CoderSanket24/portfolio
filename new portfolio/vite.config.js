import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
// base: '/' — configured for Vercel deployment (no subdirectory needed)
export default defineConfig({
  plugins: [react()],
  base: '/',
})
