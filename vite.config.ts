import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import path from 'path';

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
  plugins: [reactRefresh()],
  server: {
    port: 8881,
  }

})
