import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
const pinia = createPinia() // 创建pinia实例

// 挂载根实例
const app = createApp(App)
app.use(pinia)
app.mount('#app')
