import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import MealByName from '../views/MealByName.vue'
import MealByLetter from '../views/MealByLetter'
const routes = [
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/by-name/:name',
        name: 'byName',
        component: MealByName
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/letter/:letter',
        name: 'byLetter',
        component: MealByLetter
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;