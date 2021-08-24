import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import eslintPlugin from 'vite-plugin-eslint'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      // 配置项
      cache: false // 禁用eslint缓存
    }),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    })
  ]
})
