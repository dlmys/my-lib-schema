import { createApp } from 'vue'
import App from './App.vue'

// 宿主环境请使用 import MyLib from 'my-lib'
import MyLib from '../src/index.js'

console.log(MyLib, 'MyLib')

createApp(App).mount('#app')
