import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { ghPages } from 'vite-plugin-gh-pages'
import * as path from 'path'

export const BASE_URL = '/EG_R/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ghPages()],
  base: BASE_URL,
  resolve: {
    alias: [
      { find: '@router', replacement: path.resolve(__dirname, 'src/router') },
      {
        find: '@constants',
        replacement: path.resolve(__dirname, 'src/constants'),
      },
      { find: '@assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
      {
        find: '@components',
        replacement: path.resolve(__dirname, 'src/components'),
      },
    ],
  },
})
