import { createRouter , createWebHistory } from "vue-router";

const routes = [
    {
        name : 'ListPage',
        path : '/',
        component : () => import('@/views/ListPage.vue')
    },
    {
        name : 'AddPage',
        path : '/AddPage',
        component : () => import('@/views/AddPage.vue')
    }
]

const router = createRouter({
    routes,
    history : createWebHistory()
})

export default router;