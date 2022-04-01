import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import ElementPlus from 'unplugin-element-plus/vite';
import externalGlobals from 'rollup-plugin-external-globals';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver({ importStyle: 'sass' })],
    }),
    ElementPlus({
      useSource: true,
    }),
  ],
  build: {
    polyfillModulePreload: false,
    rollupOptions: {
      external: ['vue', 'vuex', 'vue-router', 'element-plus'],
      plugins: [
        externalGlobals({
          vue: 'Vue',
          vuex: 'Vuex',
          'vue-router': 'VueRouter',
          'element-plus': 'ElementPlus'
        })
      ]
    }
  }
})
