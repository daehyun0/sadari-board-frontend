import { createRouter, createWebHistory } from 'vue-router'

const LoginPage = () => import('@/pages/login.vue')
const JoinPage = () => import('@/pages/join.vue')

const routes = [
    { path: '/', component: LoginPage },
    { path: '/join', component: JoinPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;