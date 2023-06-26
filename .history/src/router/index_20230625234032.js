import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/letter/:letter',
        name: 'byLetter',
        component: Meal
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;