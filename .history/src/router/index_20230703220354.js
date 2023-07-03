import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByLetter from '../views/MealsByLetter'
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
        component: MealsByLetter
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;