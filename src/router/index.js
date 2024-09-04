import { createRouter, createWebHistory } from 'vue-router';
import Dashboard from '@/views/Dashboard.vue';
import Settings from '@/views/Settings.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    meta: { title: 'Dashboard', breadcrumb: 'Dashboard', icon: 'el-icon-menu' },
  },
  {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: { title: 'Settings', breadcrumb: 'Settings', icon: 'el-icon-setting' },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
