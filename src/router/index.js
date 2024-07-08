import { createRouter, createWebHistory } from 'vue-router';
import store from '../store'; 
import Login from '../views/Login.vue';
import Graph from '../views/Graph.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/graph',
    name: 'Graph',
    component: Graph
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.getters.isAuthenticated;
  if (!isAuthenticated && to.name !== 'Login') {
    next({ name: 'Login' });
  } else {
    next();
  }
});

export default router;
