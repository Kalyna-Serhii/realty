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
    {
        path: '/users/new',
        component: () => import('../pages/CreateUserPage.vue'),
        meta: {
            title: 'Create user'
        }
    },
    {
        path: '/user/:id',
        component: () => import('../pages/UpdateUserPage.vue'),
        meta: {
            title: 'Update user'
        }
    },
    {
        path: '/realty',
        component: () => import('../pages/RealtyPage.vue'),
        meta: {
            title: 'Realty'
        }
    },
    {
        path: '/realty/new',
        component: () => import('../pages/CreateRealtyPage.vue'),
        meta: {
            title: 'Create realty'
        }
    },
    {
        path: '/realty/:id',
        component: () => import('../pages/UpdateRealtyPage.vue'),
        meta: {
            title: 'Update realty'
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
