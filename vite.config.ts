import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path, { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // TODO 不生效
      "@": path.resolve(__dirname, "src"),
      "components": path.resolve(__dirname, "src/components"),
      "assets": path.resolve(__dirname, "src/assets")
    }
  },
  css: {
    preprocessorOptions: {
      less: {
        modifyVars: {
          // 用于全局导入，以避免需要单独导入每个样式文件。
          // reference:  避免重复引用
          hack: `true; @import (reference) "${resolve('src/styles/index.less')}";`,
          // ↓这行代码下一章讲
          // ...generateModifyVars(),
        },
        javascriptEnabled: true,
      },
    }
  },
  plugins: [reactRefresh()],
  server: {
    port: 8881,
  }

})
