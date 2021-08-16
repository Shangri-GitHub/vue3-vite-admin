import {createApp} from 'vue'
import router from './router'
import store from './store'
import App from './App.vue'

/* 引入Element Plus */
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
// import '/src/styles/element-variables.scss'

import global from '@/utils/global'

/* 引入自己的样式、JS文和组件 */
import '/src/styles/common.scss'
import appIcon from '/src/components/AppIcon/index.vue'

import {createI18n} from 'vue-i18n'

import en from '/src/lang/en.js'
import zh from '/src/lang/zh.js'

const messages = {
    en,
    zh,
}

const i18n = createI18n({
    locale: 'zh', // set locale
    fallbackLocale: 'en', // set fallback locale
    messages, // set locale messages
})

const app = createApp(App)
app.use(ElementPlus, {
    i18n: i18n.global.t,
}).use(i18n).use(router)
// app.use(router).use(ElementPlus,{locale}).use(I18n)
app.component('app-icon', appIcon)
app.config.globalProperties.$store = store
app.config.globalProperties.$global = global
app.mount('#app')
