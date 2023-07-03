import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByIngredient from '../views/MealsByIngredient.vue'
import DefaultLayout
const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/home',
                name: 'home',
                component: Home
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: MealsByName
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: MealsByLetter
            },
            {
                path: '/by-ingredient/:ingredient?',
                name: 'byIngredient',
                component: MealsByIngredient
            },
            {
                path: '/home',
                name: 'home',
                component: Home
            },
        ]
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;