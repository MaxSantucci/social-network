import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
   // resolve: {
   //    alias: {
   //       src: 'src',
   //    },
   // }
   // server: {
   //    proxy: {
   //       '/api': {
   //          target: 'https://social-network.samuraijs.com/api/1.0/',
   //          changeOrigin: true,
   //          secure: false,
   //          headers: {
   //             'Access-Control-Allow-Origin': '*',
   //             'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
   //             'Access-Control-Allow-Headers': 'X-Requested-With, content-type, Authorization',
   //          },
   //       },
   //    },
   // },
})
