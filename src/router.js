import LoginPage from './pages/login.vue'

const routes = [
    { path: '/', component: LoginPage }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes,
});

export default router;