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
        path: '/login',
        component: () => import('../pages/LoginPage.vue'),
        meta: {
            title: 'Login'
        }
    },
    {
        path: '/logout',
        component: () => import('../pages/LogoutPage.vue'),
        meta: {
            title: 'Logout'
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
    {
        path: '/services',
        component: () => import('../pages/ServicesPage.vue'),
        meta: {
            title: 'Services'
        }
    },
    {
        path: '/services/new',
        component: () => import('../pages/CreateServicePage.vue'),
        meta: {
            title: 'Create service'
        }
    },
    {
        path: '/service/:id',
        component: () => import('../pages/UpdateServicePage.vue'),
        meta: {
            title: 'Update service'
        }
    },
    {
        path: '/faq',
        component: () => import('../pages/FaqPage.vue'),
        meta: {
            title: 'FAQ'
        }
    },
    {
        path: '/contacts',
        component: () => import('../pages/ContactsPage.vue'),
        meta: {
            title: 'Contacts'
        }
    }
]

const router = createRouter({
    routes,
    history: createWebHistory()
})

router.beforeEach(to => {
    document.title = to.meta?.title ?? ''
})

export default router;
