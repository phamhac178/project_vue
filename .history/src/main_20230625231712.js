import { createApp } from 'vue'
import router from './router'
import store from '../src/'
import './style.css'
import App from './App.vue'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
