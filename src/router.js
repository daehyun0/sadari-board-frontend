import accessTokenRepository from '@/utils/accessToken'
import { createRouter, createWebHistory } from 'vue-router'

const LoginPage = () => import('@/pages/login.vue')
const JoinPage = () => import('@/pages/join.vue')
const ProductsPage = () => import('@/pages/product/list.vue')
const ProductDetailPage = () => import('@/pages/product/detail.vue')
const NotFoundPage = () => import('@/pages/not-found.vue')

const routes = [
    { path: '/', redirect: '/login' },
    { path: '/login', component: LoginPage },
    { path: '/join', component: JoinPage },
    { path: '/products', component: ProductsPage, meta: { needLogin: true } },
    { path: '/products/:productIdx', component: ProductDetailPage, meta: { needLogin: true } },
    { path: '/:notSemantic(.*)', component: NotFoundPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from) => {
    if (to.meta.needLogin) {
        const accessToken = accessTokenRepository.get();

        if (!accessToken) {
            return '/login';
        }
    }

    return true;
})

export default router;