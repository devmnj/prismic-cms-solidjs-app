import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
const path = require('path')

export default defineConfig({
 
  define:{
    BRAND:JSON.stringify("Solid BLOG"),
    NAV_MENU:[{caption:"Home",path:"/"},{caption:"Tags",path:"/tag"},{caption:"About",path:"/About"}],
  },
  resolve:{
    alias:{
      'components' : path.resolve(__dirname, './src/components'),
      '@' : path.resolve(__dirname,'./src'),
    },
  },
  plugins: [solidPlugin()],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
