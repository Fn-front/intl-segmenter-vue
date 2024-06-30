import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'top',
    component: async () => {
      const top = await import('@/pages/Top.vue');
      return top;
    }
  },
  {
    path: '/about',
    name: 'about',
    component: async () => {
      const about = await import('@/pages/About.vue');
      return about;
    }
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
