import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import MealList from '../views/MealList.vue'

const routes = [
    {
        path: '/homes',
        name: 'home',
        component: Home
    },
    {
        path: '/letter/:letter',
        name: 'byLetter',
        component: MealList
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;