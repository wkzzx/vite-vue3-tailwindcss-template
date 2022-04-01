import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Index',
    meta: {
      label: '首页',
    },
    component: () => import('../components/HelloWorld.vue'),
  },
  // https://next.router.vuejs.org/guide/migration/#removed-star-or-catch-all-routes
  {
    path: '/:pathMatch(.*)*',
    name: 'Demo',
    meta: {
      label: '404',
    },
    component: () => import('../components/NotFound.vue'),
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
