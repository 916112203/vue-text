//引入common.scss文件
import "@/styles/common.scss"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { getCategory } from '@/apis/testAPI'

import { lazyPlugin } from '@/directives/index'
// axios测试
getCategory().then(res => {
    console.log(res);
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(lazyPlugin);

app.mount('#app')


//定义全局指令

