import { resolve } from 'path'
import { defineConfig } from 'vite'
import baseConfig from './base.config'
import { version } from '../package.json'

export default defineConfig({
    ...baseConfig,

    publicDir: resolve(__dirname, '../src/public'),
    build: {
        outDir: 'lib',
        assetsDir: 'assets',
        lib: {
            entry: resolve(__dirname, '../src/index.js'),
            name: 'MyLib',
            fileName: (format) => `my-lib@${version}.${format}.js`
        },
        rollupOptions: {
            // 确保外部化处理那些你不想打包进库的依赖
            external: ['vue'],
            output: {
                // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
})
