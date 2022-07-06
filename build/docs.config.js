import { resolve } from 'path'
import { defineConfig } from 'vite'
import baseConfig from './base.config'

export default defineConfig({
    ...baseConfig,

    base: './',
    build: {
        outDir: 'docs',
        assetsDir: 'assets',
        rollupOptions: {
            // 修改 src 为 examples
            input: {
                main: resolve(__dirname, '../index.html')
            }
        }
    },
    resolve: {
        alias: {
            '@': resolve(__dirname, '../examples'),
            'assets': resolve(__dirname, '../examples/assets')
        }
    },
    server: {
        port: 9696,
        hmr: {
            overlay: true
        }
    }
})
