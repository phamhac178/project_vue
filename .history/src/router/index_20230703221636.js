import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/home.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByIngredient from '../views/MealsByIngredient.vue'
const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [

        ]
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;