import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { ghPages } from "vite-plugin-gh-pages";
export const BASE_URL = '/EG_R/'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), ghPages()],
  base: BASE_URL
})
