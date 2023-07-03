import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import MealByName from '../views/MealByName.vue'
import Meal
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
        component: SearchByLetter
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;