import { createRouter,createWebHistory } from "vue-router";
import Details from '../pages/Details.vue';
import Home from '../pages/Home.vue';

const routes=[
    {
        path:'/details/:name',
        name:'details',
        component: Details
    },
    {
        path:'/',
        name:'home',
        component: Home
    }
]
const router=createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes,
})

export default router