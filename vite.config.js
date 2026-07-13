import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Had l-config kat-khlli Vite y-compiler `.js` f blast `.jsx`
export default defineConfig({
  plugins: [react()],
  esbuild: {
    loader: 'jsx',
    include: /src\/.*\.js$/,
  },
})