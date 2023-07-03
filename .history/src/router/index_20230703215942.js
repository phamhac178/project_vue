import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import SearchByLetter from '../views/SearchByLetter.vue'

const routes = [
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/by-name',
        name: 'home',
        component: Home
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/letter/:letter',
        name: 'byLetter',
        component: SearchByLetter
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;