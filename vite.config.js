import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    // Forces Vite to be strict about file casing — catches issues locally too
    caseSensitive: true,
  },
})