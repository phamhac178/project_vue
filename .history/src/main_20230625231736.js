import { createApp } from 'vue'
import router from './router'
import store from './'
import './style.css'
import App from './App.vue'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
