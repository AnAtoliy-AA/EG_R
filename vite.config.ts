import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { ghPages } from 'vite-plugin-gh-pages'
import EnvironmentPlugin from 'vite-plugin-environment'
import * as path from 'path'

const baseUrl = '/EG_R/' // in .env should be the same value (with import.meta jest fails)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ghPages(), EnvironmentPlugin('all')],
  base: baseUrl,
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
        find: '@store',
        replacement: path.resolve(__dirname, 'src/store'),
      },
      {
        find: '@hooks',
        replacement: path.resolve(__dirname, 'src/hooks'),
      },
      {
        find: '@data',
        replacement: path.resolve(__dirname, 'src/data'),
      },
    ],
  },
})
