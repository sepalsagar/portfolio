import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Vercel serves this app at the domain root; GitHub Pages uses the repository path.
  base: process.env.VITE_BASE_PATH || '/',
})
