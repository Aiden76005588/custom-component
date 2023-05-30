import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'TestComponentView',
        component: () => import('@/components/test/TestComponentView.vue'),
    },
];

export default routes