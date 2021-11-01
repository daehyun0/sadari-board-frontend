import { createRouter, createWebHistory } from 'vue-router'

const LoginPage = () => import('./pages/login.vue')

const routes = [
    { path: '/', component: LoginPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;