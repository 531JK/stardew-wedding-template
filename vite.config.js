import { resolve } from 'node:path'
import { cpSync, existsSync, mkdirSync } from 'node:fs'
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

  plugins: [
    {
      name: 'copy-assets-to-dist',
      closeBundle() {
        const source = resolve(import.meta.dirname, 'assets')
        const target = resolve(import.meta.dirname, 'dist/assets')

        if (existsSync(source)) {
          mkdirSync(target, { recursive: true })
          cpSync(source, target, { recursive: true })
        }
      },
    },
  ],
})
