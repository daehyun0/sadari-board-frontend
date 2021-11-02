import { createRouter, createWebHistory } from 'vue-router'

const LoginPage = () => import('@/pages/login.vue')
const JoinPage = () => import('@/pages/join.vue')
const PostsPage = () => import('@/pages/posts.vue')
const NotFoundPage = () => import('@/pages/not-found.vue')

const routes = [
    { path: '/', component: LoginPage },
    { path: '/join', component: JoinPage },
    { path: '/posts', component: PostsPage },
    { path: '/:notSemantic(.*)', component: NotFoundPage },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;