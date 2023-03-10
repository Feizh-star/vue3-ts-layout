import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import 'reset-css' // 重置样式
import '@/assets/iconfont/iconfont.css'
import '@/assets/iconfont-colorful/iconfont.css'
import { defaultStylePlugin } from '@/style/variables' // 全局默认样式

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(defaultStylePlugin)

app.mount('#app')
