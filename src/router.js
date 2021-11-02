import { createRouter, createWebHistory } from 'vue-router'

const LoginPage = () => import('@/pages/login.vue')
const JoinPage = () => import('@/pages/join.vue')
const ProductsPage = () => import('@/pages/product/list.vue')
const ProductDetailPage = () => import('@/pages/product/detail.vue')
const NotFoundPage = () => import('@/pages/not-found.vue')

const routes = [
    { path: '/', component: LoginPage },
    { path: '/join', component: JoinPage },
    { path: '/products', component: ProductsPage },
    { path: '/products/:id', component: ProductDetailPage },
    { path: '/:notSemantic(.*)', component: NotFoundPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;