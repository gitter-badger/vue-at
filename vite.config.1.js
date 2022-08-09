import { defineConfig } from 'vite'
import { resolve } from 'path'
import commonConfig from './vite.config.0'

export default defineConfig({
  ...commonConfig,
  build: {
    ...commonConfig.build,
    lib: {
      entry: resolve(__dirname, 'src/At.vue'),
      name: 'VueAt',
      fileName: 'vue-at',
      formats: ['cjs', 'es', 'umd']
    }
  }
})
