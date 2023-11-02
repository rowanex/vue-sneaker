import MainPage from '@/pages/MainPage'
import ProfilePage from '@/pages/ProfilePage'
import FavoritesPage from '@/pages/FavoritesPage'

import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'main',
        component: MainPage,
    },
    {
        path: '/profile',
        name: 'profile',
        component: ProfilePage,
    },
    {
        path: '/favorites',
        name: 'favorites',
        component: FavoritesPage,
    }
]

const router = createRouter({
    routes,
    history: createWebHistory(process.env.BASE_URL),
})

export default router;