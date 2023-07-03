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
        component: MealsByName
    },
    {
        path: '/by-letter/:name',
        name: 'byName',
        component: MealsByName
    },
    {
        path: '/by-name/:name',
        name: 'byName',
        component: MealsByName
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;