import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        component: () => import('../pages/HomePage.vue'),
        meta: {
            title: 'Home'
        }
    },
    {
        path: '/register',
        component: () => import('../pages/RegisterPage.vue'),
        meta: {
            title: 'Register'
        }
    },
    {
        path: '/users',
        component: () => import('../pages/UsersPage.vue'),
        meta: {
            title: 'Users'
        }
    },
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

router.beforeEach(to => {
    document.title = to.meta?.title ?? ''
})

export default router;
