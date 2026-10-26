import { resolve } from 'node:path'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/stardew-wedding-template/',
  build: {
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        admin: resolve(import.meta.dirname, 'admin/index.html'),
      },
    },
  },
})
