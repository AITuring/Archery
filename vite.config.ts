import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path from 'path'
import viteCompression from 'vite-plugin-compression';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    reactRefresh(),
    viteCompression()
  ],

  base: './',//打包路径

  // 别名
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')//设置别名
    }
  },
  // 全局css
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import './src/style/var.less';`
      }
    }
  },
  server: {
    port: 8881
  },
  build: {
    //  传递给 Terser 的更多 minify 选项。
    terserOptions: {
      compress: {
        // 打包自动删除console
        drop_console: true,
        // 对代码压缩的次数，默认是1，压缩次数越多，时间越长
        passes: 100,
      }
    },

    rollupOptions: {

      output: {
        manualChunks: {
          // reactAndRedux: ['react', 'react-redux', 'redux-saga', 'react-router-config'],
          // reactDom: ['react-dom'],
          // antd: ['antd'],
          // connectReactRouter: ['connected-react-router'],
          // highlight: ['highlight.js'],
          // otherStores: ['marked', 'react-tsparticles', 'react-typewriter-hook', 'axios'],
          // reactRouterDom: ['react-router-dom'],
          // reduxActions: ['redux-actions'],
          // console.log(id,'--------');
          // return id.toString()
          // if (id.includes('node_modules')) {
          //   return id.toString().split('node_modules/')[1].split('/')[0].toString();
          // }
        }
      }
    }
  }
})
