import {createRouter, createWebHistory, RouteRecordRaw} from 'vue-router';
import testRoutes from "./routes/testRoutes";

const routes: Array<RouteRecordRaw> = [
    ...testRoutes
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
    scrollBehavior(to, from, savedPosition) {
        console.log(to,from,savedPosition)
    },
});


export default router;
