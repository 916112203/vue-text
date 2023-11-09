//引入common.scss文件
import "@/styles/common.scss"

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { getCategory } from '@/apis/testAPI'

import { useIntersectionObserver } from "@vueuse/core";
// axios测试
getCategory().then(res => {
    console.log(res);
})

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')


//定义全局指令

app.directive('img-lazy',{
    mounted(el,binding) {
        //el：指令绑定的元素
        //binding：binding.value 指令等于号后面绑定的表达式的值 
        console.log(el,binding.value);
         useIntersectionObserver(
          el,
          ([{ isIntersecting }]) => {
            console.log(isIntersecting);
            if (isIntersecting) {
                el.src = binding.value
						}
          },    
        )
        
    },
})