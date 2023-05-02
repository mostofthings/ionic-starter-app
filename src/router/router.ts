import { createRouter, createWebHistory } from '@ionic/vue-router';
import App from '../App.vue';
import About from '../about/About.vue';
import { IonicVueRouterOptions } from '@ionic/vue-router/dist/types/types';


const routes = [{
  path: '/',
  name: 'home',
  component: App,
}, {
  path: '/about',
  name: 'about',
  component: About,
}];

export function getRouter() {
  return createRouter({
    history: createWebHistory(),
    routes,
  } as IonicVueRouterOptions);
}
